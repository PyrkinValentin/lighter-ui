import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { TooltipProps } from "@/shared/ui/tooltip/types"
import type { SliderVariantsProps } from "./variants"

export type SliderValue = number | [number, number]

export type SliderProps<
	T extends SliderValue
> = ComponentProps<
	"div",
	Omit<SliderVariantsProps, "singleThumb"> &
	SliderOwnProps<T>
>

type SliderOwnProps<T extends SliderValue> = {
	label?: ReactNode
	showValueLabel?: boolean
	showTooltip?: boolean
	startContent?: ReactNode
	endContent?: ReactNode
	formatOptions?: Intl.NumberFormatOptions
	fillOffset?: number
	step?: number
	minValue?: number
	maxValue?: number
	value?: T
	defaultValue?: T
	onValueChange?: (value: T) => void
	renderValue?: (props: RenderValueProps<T>) => ReactNode
	tooltipProps?: TooltipProps
}

type RenderValueProps<T extends SliderValue> = {
	value: T
	textValue: string
}