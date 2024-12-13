import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { InputVariantsProps } from "./variants"

export type InputProps = ComponentProps<
	"input",
	InputVariantsProps &
	InputOwnProps
>

type InputOwnProps = {
	label?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	description?: ReactNode
	errorMessage?: ReactNode
	onValueChange?: (value: string) => void
}