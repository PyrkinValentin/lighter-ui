"use client"

import type { ChangeEvent } from "react"
import type { RadioProps } from "./types"

import { useId } from "react"
import { useRadioGroupContext } from "@/shared/ui/radio-group/hooks"

import { VisuallyHidden } from "@/shared/ui/visually-hidden"

import { radioVariants } from "./variants"

export const Radio = (props: RadioProps) => {
	const {
		groupId,
		checked: checkedCtx,
		onCheckedChange: onCheckedChangeCtx,
		...restCtxProps
	} = useRadioGroupContext()

	const {
		value,
		checked = checkedCtx?.(value),
		onCheckedChange = onCheckedChangeCtx?.(value),
		readOnly,

		color,
		size,
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

	const slots = radioVariants({
		color,
		size,
		error,
		readOnly,
		disabled,
	})

	return (
		<label className={slots.base({ className: [className, classNames?.base] })}>
			<span className={slots.wrapper({ className: classNames?.wrapper })}>
				<VisuallyHidden>
					<input
						type="radio"
						aria-labelledby={labelId}
						aria-checked={checked}
						disabled={disabled || readOnly}
						value={value}
						checked={checked}
						name={groupId}
						className={slots.input({ className: classNames?.input })}
						onChange={handleCheckedChange}
						{...restProps}
					/>
				</VisuallyHidden>

				<span className={slots.thumb({ className: classNames?.thumb })}/>
			</span>

			{children
				? <span id={labelId} className={slots.label({ className: classNames?.label })}>{children}</span>
				: null
			}
		</label>
	)
}