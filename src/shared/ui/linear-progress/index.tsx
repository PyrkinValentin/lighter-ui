import type { LinearProgressProps } from "./types"

import { useId } from "react"

import { numberFormat } from "@/shared/utils/number"

import { linearProgressVariants } from "./variants"
import { clampPercentage } from "./utils"

export const LinearProgress = (props: LinearProgressProps) => {
	const {
		showValueLabel,
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
		? numberFormat("BY", formatOptions)
			.format(formatOptions?.style === "percent" ? value / 100 : value)
		: undefined

	const percentage = indeterminate
		? 0
		: clampPercentage(((value - minValue) / (maxValue - minValue)) * 100, maxValue)

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
						? <span id={labelId} className={slots.label({ className: classNames?.label })}>{label}</span>
						: null
					}

					{showValueLabel
						? <span className={slots.label({ className: classNames?.label })}>{textValue}</span>
						: null
					}
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