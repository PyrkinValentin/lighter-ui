"use client"

import type { RadioGroupContextValue, RadioGroupProps } from "./types"

import { use, useId } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"

import { HelperText } from "@/shared/ui/helper-text"

import { radioGroupVariants } from "./variants"

const RadioGroupContext = createContext<RadioGroupContextValue>({})
export const useRadioGroupContext = () => use(RadioGroupContext)

export const RadioGroup = (props: RadioGroupProps) => {
	const {
		label,
		description,
		errorMessage,
		defaultValue = "",
		value,
		onValueChange,

		color,
		size,
		readOnly,
		disabled,

		orientation = "vertical",
		error,
		className,
		classNames,

		children,
		...restProps
	} = props

	const groupId = useId()
	const descriptionId = useId()

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange,
	})

	const checked = (value?: string) => {
		return value
			? controlledValue === value
			: undefined
	}

	const onCheckedChange = (value?: string) => (checked: boolean) => {
		if (!value) return

		setControlledValue?.(
			checked
				? value
				: ""
		)
	}

	const contextValue: RadioGroupContextValue = {
		groupId,
		checked,
		onCheckedChange,
		color,
		size,
		error,
		readOnly,
		disabled,
	}

	const slots = radioGroupVariants({
		orientation,
	})

	return (
		<RadioGroupContext value={contextValue}>
			<div
				role="radiogroup"
				aria-describedby={descriptionId}
				aria-orientation={orientation}
				className={slots.base({ className: [className, classNames?.base] })}
				{...restProps}
			>
				{label
					? <span className={slots.label({ className: classNames?.label })}>{label}</span>
					: null
				}

				<div role="presentation" className={slots.wrapper({ className: classNames?.wrapper })}>
					{children}
				</div>

				{((error && errorMessage) || description) ? (
					<HelperText id={descriptionId} error={error}>
						{error && errorMessage
							? errorMessage
							: description
						}
					</HelperText>
				) : null}
			</div>
		</RadioGroupContext>
	)
}