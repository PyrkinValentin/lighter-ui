import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { BreadcrumbsVariantsProps } from "./variants"

export type BreadcrumbsProps = ComponentProps<
	"nav",
	BreadcrumbsVariantsProps &
	BreadcrumbsOwnProps
>

type BreadcrumbsOwnProps = {
	separator?: ReactNode
}