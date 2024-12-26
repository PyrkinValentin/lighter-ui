import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { TooltipProps } from "@/shared/ui/tooltip/types"
import type { SliderVariantsProps } from "./variants"

export type SliderProps = ComponentProps<
	"div",
	Omit<SliderVariantsProps, "singleThumb"> &
	SliderOwnProps
>

type SliderOwnProps = {
	label?: ReactNode
	showTooltip?: boolean
	showValueLabel?: boolean
	showSteps?: boolean
	marks?: Mark[]
	startContent?: ReactNode
	endContent?: ReactNode
	formatOptions?: Intl.NumberFormatOptions
	fillOffset?: number
	step?: number
	minValue?: number
	maxValue?: number
	value?: number[]
	defaultValue?: number[]
	onValueChange?: (value: number[]) => void
	onValueChangeComplete?: (value: number[]) => void
	renderValue?: (props: RenderValueProps) => ReactNode
	tooltipProps?: TooltipProps
}

type Mark = {
	label: string
	value: number
}

type RenderValueProps = {
	value: number[]
	textValue: string[]
}