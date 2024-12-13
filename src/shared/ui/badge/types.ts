import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { BadgeVariantsProps } from "./variants"

export type BadgeProps = ComponentProps<
	"div",
	BadgeVariantsProps &
	BadgeOwnProps
>

type BadgeOwnProps = {
	content?: ReactNode
}