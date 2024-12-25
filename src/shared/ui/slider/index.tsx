"use client"

import type { ChangeEvent, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react"
import type { SliderProps, SliderValue } from "./types"

import { useCallback, useEffect, useRef, useState, useId } from "react"
import { useCallbackEvent } from "@/shared/hooks/use-callback-event"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { numberFormat } from "@/shared/utils/number"
import { isArray } from "@/shared/helpers/is-array"
import { isUndefined } from "@/shared/helpers/is-undefined"

import { VisuallyHidden } from "@/shared/ui/visually-hidden"
import { Tooltip } from "@/shared/ui/tooltip"

import { sliderVariants } from "./variants"

type RangeTrigger = "thumb-start" | "thumb-end" | "track"

export const Slider = <T extends SliderValue>(props: SliderProps<T>) => {
	const {
		label,
		showValueLabel = true,
		startContent,
		endContent,
		formatOptions,
		fillOffset,
		step = 0,
		minValue = 0,
		maxValue = 100,
		defaultValue = 0,
		value,
		onValueChange,
		renderValue,

		showTooltip,
		tooltipProps,

		size,
		rounded,
		color,
		orientation = "horizontal",
		disabled,
		showOutline,
		hideThumb,
		className,
		classNames,

		...restProps
	} = props

	const labelId = useId()

	const { getTrackProps, getThumbProps } = useRange({
		step,
		minValue,
		maxValue,
		orientation,
		onChange: (trigger, value) => handleChangeRange(trigger, value),
	})

	const [values, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange,
	})

	const range = isArray(values)

	const findClosest = (value: number) => {
		const is = (prev: number, curr: number, value: number) => {
			return Math.abs(curr - value) < Math.abs(prev - value)
				? curr
				: prev
		}

		return range
			? values.reduce((prev, curr) => is(prev, curr, value))
			: value
	}

	const handleChangeRange = (trigger: RangeTrigger, value: number) => {
		if (!range) {
			setControlledValue?.(value as T)

			return
		}

		const [startValue, endValue] = values

		if (trigger === "track") {
			setControlledValue?.(
				findClosest(value) === values.at(0)
					? [Math.min(value, endValue), endValue] as T
					: [startValue, Math.max(value, startValue)] as T
			)

			return
		}

		setControlledValue?.(
			trigger === "thumb-start"
				? [Math.min(value, endValue), endValue] as T
				: [startValue, Math.max(value, startValue)] as T
		)
	}

	const handleChangeInput = (trigger: RangeTrigger) => (ev: ChangeEvent<HTMLInputElement>) => {
		handleChangeRange(trigger, Number(ev.target.value))
	}

	const getValuePercent = (value: number = 0) => {
		return (value - minValue) / (maxValue - minValue)
	}

	const getThumbPercent = (index: number) => getValuePercent(
		range
			? values.at(index)
			: values
	)

	const offsetThumbValue = [
		range
			? getThumbPercent(0)
			: !isUndefined(fillOffset)
				? getValuePercent(fillOffset)
				: 0,
		getThumbPercent(range ? 1 : 0),
	]

	const [startOffset, endOffset] = offsetThumbValue.toSorted()

	const textValue = showValueLabel
		? range
			? numberFormat("BY", formatOptions).formatRange(values[0], values[1])
			: numberFormat("BY", formatOptions).format(values)
		: undefined

	const slots = sliderVariants({
		size,
		rounded,
		color,
		orientation,
		disabled,
		showOutline,
		hideThumb,
		singleThumb: isUndefined(fillOffset)
			? !range
			: false,
	})

	const renderThumb = (value: number, index: number) => {
		const trigger = index === 0
			? "thumb-start"
			: "thumb-end"

		return (
			<div
				key={trigger}
				className={slots.thumb({ className: classNames?.thumb })}
				style={{
					...(orientation === "horizontal"
							? { left: `${getThumbPercent(index) * 100}%` }
							: { bottom: `${getThumbPercent(index) * 100}%` }
					),
				}}
				{...getThumbProps({ trigger })}
			>
				<VisuallyHidden>
					<input
						type="range"
						id={`${labelId}-${index}`}
						aria-labelledby={labelId}
						aria-orientation={orientation}
						disabled={disabled}
						min={minValue}
						max={maxValue}
						step={step}
						aria-valuetext={String(value)}
						value={value}
						onChange={handleChangeInput(trigger)}
					/>
				</VisuallyHidden>
			</div>
		)
	}

	return (
		<div
			role="group"
			aria-labelledby={labelId}
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
							htmlFor={
								range
									? values.map((_, i) => `${labelId}-${i}`).join(" ")
									: `${labelId}-0`
							}
							className={slots.value({ className: classNames?.value })}
						>
							{renderValue && textValue
								? renderValue({ value: values as T, textValue })
								: textValue
							}
						</output>
					) : null}
				</div>
			) : null}

			<div className={slots.trackWrapper({ className: classNames?.trackWrapper })}>
				{startContent
					? <div className={slots.startContent({ className: classNames?.startContent })}>{startContent}</div>
					: null
				}

				<div className={slots.track({ className: classNames?.track })} {...getTrackProps()}>
					<div
						className={slots.filler({ className: classNames?.filler })}
						style={{
							...(orientation === "horizontal" ? {
								left: `${startOffset * 100}%`,
								width: `${(endOffset - startOffset) * 100}%`,
							} : {
								bottom: `${startOffset * 100}%`,
								height: `${(endOffset - startOffset) * 100}%`,
							}),
						}}
					/>

					{range ? (
						values.map((value: number, index: number) => (
							showTooltip ? (
								<Tooltip
									key={index}
									color={color}
									content={numberFormat("BY", formatOptions).format(value)}
									placement={orientation === "horizontal" ? "top" : "right"}
									{...tooltipProps}
								>
									{renderThumb(value, index)}
								</Tooltip>
							) : renderThumb(value, index)
						))
					) : (
						showTooltip ? (
							<Tooltip
								color={color}
								content={numberFormat("BY", formatOptions).format(values)}
								placement={orientation === "horizontal" ? "top" : "right"}
								{...tooltipProps}
							>
								{renderThumb(values, 0)}
							</Tooltip>
						) : renderThumb(values, 0)
					)}
				</div>

				{endContent
					? <div className={slots.endContent({ className: classNames?.endContent })}>{endContent}</div>
					: null
				}
			</div>
		</div>
	)
}

type UseRangeOptions = {
	step?: number
	minValue?: number
	maxValue?: number
	orientation?: "horizontal" | "vertical"
	onChange: (trigger: RangeTrigger, value: number) => void
}

type GetThumbProps = {
	trigger: RangeTrigger
}

const useRange = (options: UseRangeOptions) => {
	const {
		step = 0,
		minValue = 0,
		maxValue = 100,
		orientation,
		onChange,
	} = options

	const trackRef = useRef<HTMLDivElement>(null)
	const triggerEventRef = useRef<RangeTrigger>("track")

	const onChangeCallbackEvent = useCallbackEvent(onChange)

	const [dragging, setDragging] = useState(false)

	const startDragging = () => setDragging(true)

	const endDragging = () => {
		setDragging(false)
		triggerEventRef.current = "track"
	}

	const roundValue = (value: number) => {
		return Math.round(value * 100) / 100
	}

	const clampValue = useCallback((value: number) => {
		return Math.min(Math.max(value, minValue), maxValue)
	}, [maxValue, minValue])

	const incrementValue = useCallback((value: number) => {
		const currentStep = step !== 0
			? step
			: 1

		return Math.round(value / currentStep) * currentStep
	}, [step])

	const getPercentage = useCallback((clientX: number, clientY: number) => {
		const track = trackRef.current

		if (!track) return 0

		const {
			left,
			bottom,
			width,
			height,
		} = track.getBoundingClientRect()

		const draggingPercentage = orientation === "horizontal"
			? (clientX - left) / width * 100
			: (bottom - clientY) / height * 100

		const value = draggingPercentage * (maxValue - minValue) / 100 + minValue

		return clampValue(
			roundValue(
				incrementValue(value)
			)
		)
	}, [clampValue, incrementValue, maxValue, minValue, orientation])

	const mouseMoveListener = useCallback((ev: MouseEvent) => {
		const { clientX, clientY } = ev

		onChangeCallbackEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}, [getPercentage, onChangeCallbackEvent])

	const touchMoveListener = useCallback((ev: TouchEvent) => {
		const { clientX, clientY } = ev.touches[0]

		onChangeCallbackEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}, [getPercentage, onChangeCallbackEvent])

	const mouseUpListener = useCallback(() => {
		endDragging()
	}, [])

	const touchEndListener = useCallback(() => {
		endDragging()
	}, [])

	useEffect(() => {
		if (!dragging) return

		addEventListener("mousemove", mouseMoveListener)
		addEventListener("touchmove", touchMoveListener)
		addEventListener("mouseup", mouseUpListener)
		addEventListener("touchend", touchEndListener)

		return () => {
			removeEventListener("mousemove", mouseMoveListener)
			removeEventListener("touchmove", touchMoveListener)
			removeEventListener("mouseup", mouseUpListener)
			removeEventListener("touchend", touchEndListener)
		}
	}, [dragging, mouseMoveListener, mouseUpListener, touchEndListener, touchMoveListener])

	const onMouseDownTrack = (ev: ReactMouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = ev

		startDragging()
		onChangeCallbackEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}

	const onTouchStartTrack = (ev: ReactTouchEvent<HTMLDivElement>) => {
		const { clientX, clientY } = ev.touches[0]

		startDragging()
		onChangeCallbackEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}

	const onMouseDownThumb = (trigger: RangeTrigger) => (ev: ReactMouseEvent<HTMLDivElement>) => {
		ev.stopPropagation()
		startDragging()
		triggerEventRef.current = trigger

	}

	const onTouchStartThumb = (trigger: RangeTrigger) => (ev: ReactTouchEvent<HTMLDivElement>) => {
		ev.stopPropagation()
		startDragging()
		triggerEventRef.current = trigger
	}

	const getTrackProps = () => ({
		ref: trackRef,
		onMouseDown: onMouseDownTrack,
		onTouchStart: onTouchStartTrack,
	})

	const getThumbProps = (props: GetThumbProps) => {
		const { trigger } = props

		return {
			onMouseDown: onMouseDownThumb(trigger),
			onTouchStart: onTouchStartThumb(trigger),
		}
	}

	return {
		getTrackProps,
		getThumbProps,
	}
}