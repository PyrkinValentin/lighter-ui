"use client"

import type { ChangeEvent } from "react"
import type { InputProps } from "./types"

import { useId } from "react"

import { HelperText } from "@/shared/ui/helper-text"

import { inputVariants } from "./variants"

export const Input = (props: InputProps) => {
	const {
		label,
		startContent,
		endContent,
		description,
		errorMessage,
		onValueChange,

		variant,
		color,
		size,
		rounded,
		fullWidth,
		disabled,
		error,
		required,
		labelPlacement,
		className,
		classNames,

		...restProps
	} = props

	const inputId = useId()
	const helperTextId = useId()

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onValueChange?.(ev.target.value)
	}

	const slots = inputVariants({
		variant,
		color,
		size,
		rounded,
		fullWidth,
		disabled,
		error,
		required,
		labelPlacement,
	})

	return (
		<div className={slots.base({ className: [className, classNames?.base] })}>
			{label ? (
				<label htmlFor={inputId} className={slots.label({ className: classNames?.label })}>
					{label}
				</label>
			) : null}

			<div className={slots.wrapper({ className: classNames?.wrapper })}>
				<label className={slots.inputWrapper({ className: classNames?.inputWrapper })}>
					{startContent}

					<input
						id={inputId}
						aria-describedby={helperTextId}
						disabled={disabled}
						required={required}
						className={slots.input({ className: classNames?.input })}
						onChange={handleChange}
						{...restProps}
					/>

					{endContent}
				</label>

				{((error && errorMessage) || description) ? (
					<HelperText
						id={helperTextId}
						error={error}
						className={slots. helperText({ className: classNames?.helperText })}
					>
						{error && errorMessage
							? errorMessage
							: description
						}
					</HelperText>
				) : null}
			</div>
		</div>
	)
}