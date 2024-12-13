"use client"

import type { ElementType, MouseEvent, ReactNode } from "react"
import type { ListBoxProps, ListBoxSectionProps, ListBoxItemProps, ListBoxContextValue } from "./types"

import { use, useId } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"
import { isFunction } from "@/shared/helpers/is-function"

import { Divider } from "@/shared/ui/divider"

import { listBoxVariants, listBoxItemVariants, listBoxSectionVariants } from "./variants"

const ListBoxContext = createContext<ListBoxContextValue>({})

const useListBoxContext= () => use(ListBoxContext)

export const ListBox = (props: ListBoxProps) => {
	const {
		disallowEmptySelection,
		hideSelectedIcon,
		mode = "none-selection",
		disabledValue = [],
		defaultValue = [],
		value,
		onValueChange,

		variant,
		color,
		disabled: disabledProp,

		className,
		children,
		...restProps
	} = props

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue: defaultValue,
		value: value,
		setValue: onValueChange,
	})

	const disabled = (value: string) => {
		return disabledProp ?? disabledValue.includes(value)
	}

	const selected = (value: string) => {
		return value
			? controlledValue.includes(value)
			: false
	}

	const onSelectedChange = (value: string, selected: boolean) => {
		if (
			mode === "none-selection" ||
			(disallowEmptySelection && !selected && controlledValue?.length === 1)
		) return

		setControlledValue?.(
			selected
				? mode === "multiple-selection" ? [...controlledValue, value] : [value]
				: mode === "multiple-selection" ? controlledValue.filter((v) => v !== value) : []
		)
	}

	const classNames = listBoxVariants({ className })

	const contextValue: ListBoxContextValue = {
		variant,
		color,
		disabled,
		selected,
		onSelectedChange,
		hideSelectedIcon,
	}

	return (
		<ListBoxContext value={contextValue}>
			<ul
				role="listbox"
				tabIndex={-1}
				className={classNames}
				{...restProps}
			>
				{children}
			</ul>
		</ListBoxContext>
	)
}

export const ListBoxSection = (props: ListBoxSectionProps) => {
	const {
		divider: dividerProp,
		title,

		className,
		classNames,
		children,
		...restProps
	} = props

	const headingId = useId()
	const slots = listBoxSectionVariants()

	return (
		<li
			role="presentation"
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			{title
				? <span id={headingId} className={slots.heading({ className: classNames?.heading })}>{title}</span>
				: null
			}

			<ul
				role="group"
				aria-labelledby={headingId}
				className={slots.group({ className: classNames?.group })}
			>
				{children}
			</ul>

			{dividerProp
				? <Divider className={slots.divider({ className: classNames?.divider })}/>
				: null
			}
		</li>
	)
}

export const ListBoxItem = <As extends ElementType = "li">(props: ListBoxItemProps<As>) => {
	const {
		disabled: disabledCtx,
		selected,
		onSelectedChange,
		hideSelectedIcon,
		...restCtxProps
	} = useListBoxContext()

	const labelId = useId()

	const {
		as = "li",
		readOnly,
		description,
		value = labelId,
		startContent,
		endContent,
		selectedIcon: selectedIconProp,

		variant,
		color,
		divider,
		disabled = disabledCtx?.(value),
		className,
		classNames,

		onClick,
		children,
		...restProps
	} = {
		...restCtxProps,
		...props,
	} as ListBoxItemProps

	const isSelected = Boolean(selected?.(value))

	const handleClick = (ev: MouseEvent<HTMLLIElement>) => {
		onSelectedChange?.(value, !isSelected)
		onClick?.(ev)
	}

	const {
		base,
		wrapper,
		title,
		description: descriptionSlot,
		selectedIcon,
	} = listBoxItemVariants({
		variant,
		color,
		divider,
		disabled,
		readOnly,
	})

	const baseClassNames = base({
		className: [className, classNames?.base]
	})

	const wrapperClassNames = wrapper({
		className: classNames?.wrapper,
	})

	const titleClassNames = title({
		className: classNames?.title,
	})

	const descriptionClassNames = descriptionSlot({
		className: classNames?.description,
	})

	const selectedIconClassNames = selectedIcon({
		className: classNames?.selectedIcon,
	})

	const titleWrapper = (children: ReactNode) => description
		? <div className={wrapperClassNames}>{children}</div>
		: <>{children}</>

	const Tag = as

	return (
		<Tag
			role="option"
			aria-labelledby={labelId}
			aria-selected={isSelected}
			aria-disabled={disabled}
			tabIndex={(disabled || readOnly) ? -1 : 0}
			className={baseClassNames}
			onClick={handleClick}
			{...restProps}
		>
			{startContent}

			{titleWrapper(
				<>
					<span id={labelId} className={titleClassNames}>
						{children}
					</span>

					{description ? (
						<span className={descriptionClassNames}>
							{description}
						</span>
					) : null}
				</>
			)}

			{!hideSelectedIcon ? (
				!selectedIconProp ? (
					<svg
						aria-hidden="true"
						role="presentation"
						viewBox="0 0 17 18"
						className={selectedIconClassNames}
					>
						<polyline
							fill="none"
							points="1 9 7 14 15 4"
							stroke="currentColor"
							strokeDasharray={22}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
						/>
					</svg>
				) : (
					isFunction(selectedIconProp)
						? selectedIconProp(isSelected)
						: selectedIconProp
				)
			) : null}

			{endContent}
		</Tag>
	)
}