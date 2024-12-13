import type { CircularProgressProps } from "./types"

import { useId } from "react"

import { numberFormat } from "@/shared/utils/number"
import { clampPercentage } from "@/shared/ui/linear-progress/utils"

import { circularProgressVariants } from "./variants"

const initialFormatOptions: Intl.NumberFormatOptions = {
	style: "percent",
	unit: "percent",
}

export const CircularProgress = (props: CircularProgressProps) => {
	const {
		showValueLabel = true,
		value = 0,
		minValue = 0,
		maxValue = 100,
		label,
		valueLabel,
		formatOptions = initialFormatOptions,
		strokeWidth,

		color,
		size,
		indeterminate,
		disabled,
		className,
		classNames,

		...restProps
	} = props

	const labelId = useId()

	const textValue = showValueLabel
		? numberFormat("BY", formatOptions)
			.format(formatOptions?.style === "percent" ? value / 100 : value)
		: undefined

	const center = 16
	const currentStrokeWidth = strokeWidth ?? size === "sm" ? 2 : 3
	const radius = 16 - currentStrokeWidth
	const circumference = 2 * radius * Math.PI

	const percentage = indeterminate
		? 0.25
		: clampPercentage((value - minValue) / (maxValue - minValue), 1)

	const slots = circularProgressVariants({
		color,
		size,
		indeterminate,
		disabled,
	})

	return (
		<div
			role="progressbar"
			aria-valuenow={value}
			aria-valuemin={minValue}
			aria-valuemax={maxValue}
			aria-valuetext={textValue}
			aria-labelledby={labelId}
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			<div className={slots.svgWrapper({ className: classNames?.svgWrapper })}>
				<svg
					viewBox="0 0 32 32"
					fill="none"
					strokeWidth={currentStrokeWidth}
					className={slots.svg({ className: classNames?.svg })}
				>
					<circle
						role="presentation"
						cx={center} cy={center} r={radius}
						strokeDasharray={`${circumference} ${circumference}`}
						strokeDashoffset="0"
						transform="rotate(-90 16 16)"
						strokeLinecap="round"
						className={slots.track({ className: classNames?.track })}
					/>

					<circle
						role="presentation"
						cx={center} cy={center} r={radius}
						strokeDasharray={`${circumference} ${circumference}`}
						strokeDashoffset={circumference - percentage * circumference}
						transform="rotate(-90 16 16)"
						strokeLinecap="round"
						className={slots.indicator({ className: classNames?.indicator })}
					/>
				</svg>

				{showValueLabel
					? <span className={slots.value({ className: classNames?.value })}>{valueLabel ?? textValue}</span>
					: null
				}
			</div>

			{label
				? <span id={labelId} className={slots.label({ className: classNames?.label })}>{label}</span>
				: null
			}
		</div>
	)
}