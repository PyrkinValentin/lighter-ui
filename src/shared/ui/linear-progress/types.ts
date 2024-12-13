import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { LinearProgressVariantsProps } from "./variants"

export type LinearProgressProps = ComponentProps<
	"div",
	LinearProgressVariantsProps &
	LinearProgressOwnProps
>

type LinearProgressOwnProps = {
	showValueLabel?: boolean
	value?: number
	minValue?: number
	maxValue?: number
	label?: ReactNode
	formatOptions?: Intl.NumberFormatOptions
}