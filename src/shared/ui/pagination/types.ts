import type { AriaRole, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { PaginationVariantsProps } from "./variants"

export type PaginationProps = ComponentProps<
	"nav",
	PaginationOwnProps &
	PaginationVariantsProps
>

type PaginationOwnProps = {
	loop?: boolean
	showControls?: boolean
	dotsJump?: number
	siblings?: number
	boundaries?: number
	defaultPage?: number
	page?: number
	totalPages?: number
	onPageChange?: (page: number) => void
	renderItem?: (props: PaginationItemProps) => ReactNode
}

export type PaginationItemProps = {
	role?: AriaRole
	"aria-label"?: string
	"aria-disabled"?: boolean
	"aria-selected"?: boolean
	tabIndex?: number
	page: number
	className?: string
	onClick?: () => void
	children?: ReactNode
}