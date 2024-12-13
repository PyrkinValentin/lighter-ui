"use client"

import type { ChangeEvent } from "react"
import type { TextareaProps } from "./types"

import { useId } from "react"

import { HelperText } from "@/shared/ui/helper-text"

import { textareaVariants } from "./variants"

export const Textarea = (props: TextareaProps) => {
	const {
		label,
		startContent,
		endContent,
		description,
		errorMessage,
		onValueChange,
		rows = 3,

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

	const textareaId = useId()
	const helperTextId = useId()

	const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
		onValueChange?.(ev.target.value)
	}

	const slots = textareaVariants({
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
				<label htmlFor={textareaId} className={slots.label({ className: classNames?.label })}>
					{label}
				</label>
			) : null}

			<div className={slots.wrapper({ className: classNames?.wrapper })}>
				<label className={slots.textareaWrapper({ className: classNames?.textareaWrapper })}>
					{startContent}

					<textarea
						id={textareaId}
						aria-describedby={helperTextId}
						disabled={disabled}
						required={required}
						rows={rows}
						className={slots.textarea({ className: classNames?.textarea })}
						onChange={handleChange}
						{...restProps}
					/>

					{endContent}
				</label>

				{((error && errorMessage) || description) ? (
					<HelperText
						id={helperTextId}
						error={error}
						className={slots.helperText({ className: classNames?.helperText })}
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