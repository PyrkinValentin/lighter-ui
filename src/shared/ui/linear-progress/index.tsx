import type { LinearProgressProps } from "./types"

import { useId } from "react"

import { numberFormat } from "@/shared/utils/number"

import { linearProgressVariants } from "./variants"
import { clampPercentage } from "./utils"

export const LinearProgress = (props: LinearProgressProps) => {
	const {
		showValueLabel = true,
		value = 0,
		minValue = 0,
		maxValue = 100,
		label,
		formatOptions = { style: "percent", unit: "percent" },

		color,
		size,
		rounded,
		indeterminate,
		striped,
		disabled,
		className,
		classNames,

		...restProps
	} = props

	const labelId = useId()

	const textValue = (!indeterminate && showValueLabel)
		? numberFormat(formatOptions).format(value)
		: undefined

	const percentage = !indeterminate
		? clampPercentage(((value - minValue) / (maxValue - minValue)) * 100, maxValue)
		: 0

	const slots = linearProgressVariants({
		color,
		size,
		rounded,
		indeterminate,
		striped,
		disabled,
	})

	return (
		<div
			role="progressbar"
			aria-labelledby={labelId}
			aria-valuenow={value}
			aria-valuemin={minValue}
			aria-valuemax={maxValue}
			aria-valuetext={textValue}
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			{(label || showValueLabel) ? (
				<div className={slots.labelWrapper({ className: classNames?.labelWrapper })}>
					{label
						? <label id={labelId} className={slots.label({ className: classNames?.label })}>{label}</label>
						: null
					}

					{showValueLabel ? (
						<output
							aria-live="off"
							htmlFor={labelId}
							className={slots.value({ className: classNames?.value })}
						>
							{textValue}
						</output>
					) : null}
				</div>
			) : null}

			<div className={slots.track({ className: classNames?.track })}>
				<div
					className={slots.indicator({ className: classNames?.indicator })}
					style={{
						transform: `translateX(-${100 - (percentage || 0)}%)`,
					}}
				/>
			</div>
		</div>
	)
}