"use client"

import type { ChangeEvent } from "react"
import type { SwitchProps } from "./types"

import { useId } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { isFunction } from "@/shared/helpers/is-function"

import { VisuallyHidden } from "@/shared/ui/visually-hidden"

import { switchVariants } from "./variants"

export const Switch = (props: SwitchProps) => {
	const {
		thumbIcon,
		startContent,
		endContent,

		defaultChecked = false,
		checked,
		onCheckedChange,

		color,
		size,
		readOnly,
		disabled,
		className,
		classNames,

		children,
		...restProps
	} = props

	const labelId = useId()

	const [controlledChecked, setControlledChecked] = useControlledState({
		defaultValue: defaultChecked,
		value: checked,
		setValue: onCheckedChange,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		setControlledChecked?.(ev.target.checked)
	}

	const slots = switchVariants({
		color,
		size,
		readOnly,
		disabled,
	})

	return (
		<label className={slots.base({ className: [className, classNames?.base] })}>
			<span className={slots.wrapper({ className: classNames?.wrapper })}>
				<VisuallyHidden>
					<input
						aria-labelledby={labelId}
						role="switch"
						type="checkbox"
						disabled={disabled || readOnly}
						checked={controlledChecked}
						className={slots.input({ className: classNames?.input })}
						onChange={handleChange}
						{...restProps}
					/>
				</VisuallyHidden>

				{startContent ? (
					<span className={slots.startContent({ className: classNames?.startContent })}>
						{startContent}
					</span>
				) : null}

				<span className={slots.thumb({ className: classNames?.thumb })}>
					{isFunction(thumbIcon)
						? thumbIcon(controlledChecked)
						: thumbIcon
					}
				</span>

				{endContent ? (
					<span className={slots.endContent({ className: classNames?.endContent })}>
						{endContent}
					</span>
				) : null}
			</span>

			{children ? (
				<span id={labelId} className={slots.label({ className: classNames?.label })}>
					{children}
				</span>
			) : null}
		</label>
	)
}