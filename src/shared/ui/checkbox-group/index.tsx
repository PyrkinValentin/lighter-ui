import type { CheckboxGroupContextValue, CheckboxGroupProps } from "./types"

import { useId } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"

import { HelperText } from "@/shared/ui/helper-text"

import { checkboxGroupVariants } from "./variants"

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue>({})

export const CheckboxGroup = (props: CheckboxGroupProps) => {
	const {
		label,
		description,
		errorMessage,
		defaultValue = [],
		value,
		onValueChange,

		color,
		size,
		rounded,
		readOnly,
		disabled,

		orientation,
		error,
		className,
		classNames,

		children,
		...restProps
	} = props

	const descriptionId = useId()

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange,
	})

	const checked = (value?: string) => {
		return value
			? controlledValue.includes(value)
			: undefined
	}

	const onCheckedChange = (value?: string) => (checked: boolean) => {
		if (!value) return

		setControlledValue?.(
			checked
				? [...controlledValue, value]
				: controlledValue.filter((v) => v !== value)
		)
	}

	const slots = checkboxGroupVariants({
		orientation,
	})

	const contextValue: CheckboxGroupContextValue = {
		checked,
		onCheckedChange,
		color,
		size,
		rounded,
		disabled,
		readOnly,
		error,
	}

	return (
		<CheckboxGroupContext value={contextValue}>
			<div
				role="group"
				aria-describedby={descriptionId}
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
		</CheckboxGroupContext>
	)
}