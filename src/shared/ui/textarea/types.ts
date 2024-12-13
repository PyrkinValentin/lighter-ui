import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { TextareaVariantsProps } from "./variants"

export type TextareaProps = ComponentProps<
	"textarea",
	TextareaVariantsProps &
	TextareaOwnProps
>

type TextareaOwnProps = {
	label?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	description?: ReactNode
	errorMessage?: ReactNode
	onValueChange?: (value: string) => void
}