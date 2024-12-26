"use client"

import type { ChangeEvent, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react"
import type { SliderProps } from "./types"

import { useCallback, useEffect, useRef, useState, useId } from "react"
import { useCallbackEvent } from "@/shared/hooks/use-callback-event"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { numberArrayFormat, numberClump, numberFindClosest, numberFormat } from "@/shared/utils/number"
import { isUndefined } from "@/shared/helpers/is-undefined"

import { Fragment } from "react"
import { VisuallyHidden } from "@/shared/ui/visually-hidden"
import { Tooltip } from "@/shared/ui/tooltip"

import { sliderVariants } from "./variants"

export const Slider = (props: SliderProps) => {
	const {
		label,
		showTooltip,
		showValueLabel,
		showSteps,
		marks,
		startContent,
		endContent,
		formatOptions,
		fillOffset,
		step = 1,
		minValue = 0,
		maxValue = 100,
		defaultValue = [0],
		value,
		onValueChange,
		onValueChangeComplete,
		renderValue,
		tooltipProps,

		size,
		rounded,
		color = "foreground",
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
		onChangeComplete: () => handleChangeComplete(),
	})

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue: numberClump(defaultValue, minValue, maxValue),
		value: value ? numberClump(value, minValue, maxValue) : value,
		setValue: onValueChange,
	})

	const range = controlledValue.length > 1

	const handleChangeRange = (trigger: number, value: number) => {
		const findIndex = () => {
			const closestValue = numberFindClosest(controlledValue, value)

			return controlledValue.findIndex((v) => v === closestValue)
		}

		const indexValue = trigger === -1
			? findIndex()
			: trigger

		setControlledValue?.(
			controlledValue.with(
				indexValue,
				numberClump(
					value,
					controlledValue[indexValue - 1] ?? minValue,
					controlledValue[indexValue + 1] ?? maxValue,
				)
			)
		)
	}

	const handleChangeInput = (trigger: number) => (ev: ChangeEvent<HTMLInputElement>) => {
		handleChangeRange(trigger, Number(ev.target.value))
	}

	const handleChangeComplete = () => {
		onValueChangeComplete?.(controlledValue)
	}

	const getValuePercent = (value: number = 0) => (value - minValue) / (maxValue - minValue)
	const getThumbPercent = (index: number) => getValuePercent(controlledValue[index])

	const offsetThumbValue = [
		range
			? getThumbPercent(0)
			: !isUndefined(fillOffset)
				? getValuePercent(fillOffset)
				: 0,
		getThumbPercent(controlledValue.length - 1),
	]

	const [startOffset, endOffset] = offsetThumbValue.toSorted()

	const getTextValue = () => {
		return range
			? numberArrayFormat(formatOptions).formatRange(controlledValue)
			: numberArrayFormat(formatOptions).format(controlledValue)
	}

	const steps = showSteps
		? Math.floor((maxValue - minValue) / step) + 1
		: 0

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

	const renderThumb = (value: number, index: number) => (
		<div
			key={index}
			className={slots.thumb({ className: classNames?.thumb })}
			style={{
				...(orientation === "horizontal"
						? { left: `${getThumbPercent(index) * 100}%` }
						: { bottom: `${getThumbPercent(index) * 100}%` }
				),
			}}
			{...getThumbProps({ trigger: index })}
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
					onChange={handleChangeInput(index)}
					onBlur={handleChangeComplete}
				/>
			</VisuallyHidden>
		</div>
	)

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
							htmlFor={controlledValue.map((_, index) => `${labelId}-${index}`).join(" ")}
							className={slots.value({ className: classNames?.value })}
						>
							{renderValue
								? renderValue({ value: controlledValue, textValue: getTextValue() })
								: getTextValue().join(" ")
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
							[orientation === "vertical" ? "bottom" : "left"]: `${startOffset * 100}%`,
							[orientation === "vertical" ? "height" : "width"]: `${(endOffset - startOffset) * 100}%`,
						}}
					/>

					{showSteps && Number.isFinite(steps) ? (
						Array.from({ length: steps }, (_, index) => {
							const percent = getValuePercent(index * step + minValue)

							return (
								<div
									key={index}
									className={slots.step({ className: classNames?.step })}
									data-in-range={getValuePercent(index * step + minValue) <= endOffset && percent >= startOffset}
									style={{
										[orientation === "vertical" ? "bottom" : "left"]: `${percent * 100}%`,
									}}
								/>
							)
						})
					) : null}

					{controlledValue.map((value, index) => (
						<Fragment key={index}>
							{showTooltip ? (
								<Tooltip
									color={color}
									content={numberFormat(formatOptions).format(value)}
									placement={orientation === "horizontal" ? "top" : "right"}
									{...tooltipProps}
								>
									{renderThumb(value, index)}
								</Tooltip>
							) : (
								renderThumb(value, index)
							)}
						</Fragment>
					))}

					{marks && marks.length > 0 &&
						marks.map(({ value, label }, index) => {
							const percent = getValuePercent(value)

							return (
								<div
									key={index}
									className={slots.mark({ className: classNames?.mark })}
									data-in-range={percent <= endOffset && percent >= startOffset}
									style={{
										[orientation === "vertical" ? "bottom" : "left"]: `${percent * 100}%`,
									}}
								>
									{label}
								</div>
							)
						})
					}
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
	onChange: (trigger: number, value: number) => void
	onChangeComplete: () => void
}

type GetThumbProps = {
	trigger: number
}

const useRange = (options: UseRangeOptions) => {
	const {
		step = 1,
		minValue = 0,
		maxValue = 100,
		orientation,
		onChange,
		onChangeComplete,
	} = options

	const trackRef = useRef<HTMLDivElement>(null)
	const triggerEventRef = useRef(-1)

	const onChangeEvent = useCallbackEvent(onChange)
	const onChangeCompleteEvent = useCallbackEvent(onChangeComplete)

	const [dragging, setDragging] = useState(false)

	const startDragging = () => setDragging(true)

	const endDragging = useCallback(() => {
		setDragging(false)
		onChangeCompleteEvent()
		triggerEventRef.current = -1
	}, [onChangeCompleteEvent])

	const roundValue = (value: number) => {
		return Math.round(value * 100) / 100
	}

	const clampValue = useCallback((value: number) => {
		return Math.min(Math.max(value, minValue), maxValue)
	}, [maxValue, minValue])

	const incrementValue = useCallback((value: number) => {
		return Math.round(value / step) * step
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

		onChangeEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}, [getPercentage, onChangeEvent])

	const touchMoveListener = useCallback((ev: TouchEvent) => {
		const { clientX, clientY } = ev.touches[0]

		onChangeEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}, [getPercentage, onChangeEvent])

	const mouseUpListener = useCallback(() => {
		endDragging()
	}, [endDragging])

	const touchEndListener = useCallback(() => {
		endDragging()
	}, [endDragging])

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
		onChangeEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}

	const onTouchStartTrack = (ev: ReactTouchEvent<HTMLDivElement>) => {
		const { clientX, clientY } = ev.touches[0]

		startDragging()
		onChangeEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}

	const onMouseDownThumb = (trigger: number) => (ev: ReactMouseEvent<HTMLDivElement>) => {
		ev.stopPropagation()
		startDragging()
		triggerEventRef.current = trigger

	}

	const onTouchStartThumb = (trigger: number) => (ev: ReactTouchEvent<HTMLDivElement>) => {
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