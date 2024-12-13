import type { ReactNode, MouseEvent } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { ChipVariantsProps } from "./variants"

export type ChipProps = ComponentProps<
	"div",
	Omit<ChipVariantsProps, "hasStartContent" | "hasEndContent"> &
	ChipOwnProps
>

type ChipOwnProps = {
	avatar?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	onClose?: (ev: MouseEvent<HTMLSpanElement>) => void
}