"use client"

import type { ElementType, ReactElement } from "react"
import type { TabProps, TabsProps } from "./types"

import { useControlledState } from "@/shared/hooks/use-controlled-state"
import { useAnimate } from "@/shared/hooks/use-animate"

import { getCollectionChildren } from "@/shared/utils/children"

import { tabsVariants } from "./variants"

const getDefaultTab = (collection: ReactElement<TabProps>[], disabledValue?: string[]) => {
	if (!disabledValue) {
		return collection.at(0)?.props
	}

	const defaultTabElement = collection.find(({ props }) => props.value
		? !disabledValue?.includes(props.value)
		: false
	)

	return defaultTabElement?.props
}

export const Tabs = (props: TabsProps) => {
	const {
		disabled: disabledProp,
		disabledValue,
		defaultValue,
		value,
		onValueChange,

		variant,
		color,
		size,
		rounded,
		placement = "top",
		fullWidth,
		className,
		classNames,

		children,
		...restProps
	} = props

	const collectionChildren = getCollectionChildren<TabProps>(children, (child, index) => ({
		...child,
		props: {
			...child.props,
			value: child.props.value ?? String(index),
		},
	}))

	const defaultTab = getDefaultTab(collectionChildren, disabledValue)

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue: defaultValue ?? defaultTab?.value,
		value,
		setValue: onValueChange,
	})

	const disabled = (value?: string) => {
		return disabledProp ||
			(value
					? disabledValue?.includes(value)
					: undefined
			)
	}

	const selected = (value?: string) => value === controlledValue

	const onSelected = (value?: string) => {
		if (value) {
			setControlledValue?.(value)
		}
	}

	const orientation = ["start", "end"].includes(placement)
		? "vertical"
		: "horizontal"

	const slots = tabsVariants({
		variant,
		color,
		size,
		rounded,
		placement,
		fullWidth,
		disabled: disabledProp,
	})

	const tabClassNames = slots.tab({
		className: classNames?.tab,
	})

	const cursorClassNames = slots.cursor({
		className: classNames?.cursor,
	})

	const tabContentClassNames = slots.tabContent({
		className: classNames?.tabContent,
	})

	return (
		<div className={slots.base({ className: [className, classNames?.base] })} {...restProps}>
			<div
				role="tablist"
				aria-orientation={orientation}
				className={slots.tabList({ className: classNames?.tabList })}
			>
				{collectionChildren.map(({ key, props: { value, onClick, ...restProps } }) => (
					<Tab
						key={key}
						value={value}
						disabled={disabled(value)}
						selected={selected(value)}
						className={tabClassNames}
						classNames={{
							cursor: cursorClassNames,
							tabContent: tabContentClassNames,
						}}
						onClick={(ev) => {
							onSelected(value)
							onClick?.(ev)
						}}
						{...restProps}
					/>
				))}
			</div>

			{collectionChildren.map(({ props: { value, children } }) => selected(value) ? (
				<div
					key={value}
					role="tabpanel"
					id={`tabpanel-${value}`}
					aria-labelledby={`tab-${value}`}
					className={slots.tabPanel({ className: classNames?.tabPanel })}
				>
					{children}
				</div>
			) : null)}
		</div>
	)
}

export const Tab = <As extends ElementType = "button">(props: TabProps<As>) => {
	const {
		as = "button",
		title,
		value,
		selected,
		disabled,
		classNames,
		...restProps
	} = props as TabProps

	const [mounted, animateClassName] = useAnimate(selected, {
		initial: "opacity-0 scale-90",
		enter: "opacity-100 scale-100",
	})

	const Tag = as

	return (
		<Tag
			role="tab"
			id={`tab-${value}`}
			aria-controls={`tabpanel-${value}`}
			aria-disabled={disabled}
			aria-selected={selected}
			disabled={disabled}
			{...restProps}
		>
			{mounted
				? <div className={animateClassName(classNames?.cursor)}/>
				: null
			}

			<div className={classNames?.tabContent}>
				{title}
			</div>
		</Tag>
	)
}