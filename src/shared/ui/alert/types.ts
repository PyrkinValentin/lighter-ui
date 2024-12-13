import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AlertVariantsProps } from "./variants"

export type AlertProps = ComponentProps<
	"div",
	AlertVariantsProps &
	AlertOwnProps
>

type AlertOwnProps = {
	hideIcon?: boolean
	title?: ReactNode
	icon?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
}