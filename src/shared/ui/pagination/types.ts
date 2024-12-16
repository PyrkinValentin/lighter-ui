import type { AriaRole, Key, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { PaginationVariantsProps } from "./variants"

export type PaginationProps = ComponentProps<
	"nav",
	PaginationOwnProps &
	PaginationVariantsProps
>

type PaginationOwnProps = {
	dotsJump?: number
	loop?: boolean
	siblings?: number
	boundaries?: number
	showControls?: boolean
	defaultPage?: number
	page?: number
	totalPages?: number
	onPageChange?: (page: number) => void
	renderItem?: (props: PaginationItemProps) => ReactNode
}

export type PaginationItemProps = {
	key: Key
	role: AriaRole
	tabIndex: number
	"aria-label": string
	page: number
	className: string
	onClick: () => void
	children: ReactNode
}