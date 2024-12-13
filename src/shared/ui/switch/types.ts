import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { SwitchVariantsProps } from "./variants"

export type SwitchProps = ComponentProps<"input", SwitchVariantsProps & {
	startContent?: ReactNode
	endContent?: ReactNode
	onCheckedChange?: (checked: boolean) => void
	thumbIcon?: ReactNode | ((checked: boolean) => ReactNode)
}>