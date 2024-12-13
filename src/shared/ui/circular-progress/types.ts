import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { CircularProgressVariantsProps } from "./variants"

export type CircularProgressProps = ComponentProps<
	"div",
	CircularProgressVariantsProps &
	CircularProgressOwnProps
>

type CircularProgressOwnProps = {
	showValueLabel?: boolean
	value?: number
	minValue?: number
	maxValue?: number
	label?: ReactNode
	valueLabel?: ReactNode
	strokeWidth?: number
	formatOptions?: Intl.NumberFormatOptions
}