"use client"

import type { ChangeEvent, HTMLProps } from "react"
import type { CheckboxIconProps, CheckboxProps } from "./types"

import { useId } from "react"
import { useCheckboxGroupContext } from "@/shared/ui/checkbox-group/hooks"

import { cloneElement, isValidElement } from "react"

import { VisuallyHidden } from "@/shared/ui/visually-hidden"

import { checkboxVariants } from "./variants"

export const Checkbox = (props: CheckboxProps) => {
	const {
		checked: checkedCtx,
		onCheckedChange: onCheckedChangeCtx,
		...restCtxProps
	} = useCheckboxGroupContext()

	const {
		icon,
		value,
		checked = checkedCtx?.(value),
		onCheckedChange = onCheckedChangeCtx?.(value),
		readOnly,

		color,
		size,
		rounded,
		disabled,
		error,
		className,
		classNames,

		children,
		...restProps
	} = {
		...restCtxProps,
		...props,
	}

	const labelId = useId()

	const handleCheckedChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onCheckedChange?.(ev.target.checked)
	}

	const slots = checkboxVariants({
		color,
		size,
		rounded,
		readOnly,
		disabled,
		error,
		hasIcon: Boolean(icon),
	})

	return (
		<label className={slots.base({ className: [className, classNames?.base] })}>
			<span aria-hidden="true" className={slots.wrapper({ className: classNames?.wrapper })}>
				<VisuallyHidden>
					<input
						type="checkbox"
						aria-labelledby={labelId}
						aria-checked={checked}
						disabled={disabled || readOnly}
						value={value}
						checked={checked}
						className={slots.input({ className: classNames?.input })}
						onChange={handleCheckedChange}
						{...restProps}
					/>
				</VisuallyHidden>

				{icon
					? isValidElement<HTMLProps<SVGSVGElement>>(icon)
						? cloneElement(icon, { className: slots.icon({ className: classNames?.icon }) })
						: null
					: <CheckboxIcon className={slots.icon({ className: classNames?.icon })}/>
				}
			</span>

			{children
				? <span id={labelId} className={slots.label({ className: classNames?.label })}>{children}</span>
				: null
			}
		</label>
	)
}

const CheckboxIcon = (props: CheckboxIconProps) => {
	return (
		<svg
			aria-hidden="true"
			role="presentation"
			viewBox="0 0 17 18"
			{...props}
		>
			<polyline
				fill="none"
				points="1 9 7 14 15 4"
				stroke="currentColor"
				strokeDasharray="22"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	)
}