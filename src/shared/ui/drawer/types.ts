import type { HTMLProps, ReactNode } from "react"
import type { OpenChangeReason, ReferenceType, UseFloatingReturn } from "@floating-ui/react"
import type { ComponentProps } from "@/shared/types/props"
import type { BackdropProps } from "@/shared/ui/backdrop/types"
import type { DrawerVariantsProps } from "./variants"

export type DrawerContextValue = Pick<
	DrawerProps,
	| "lockScroll"
	| "open"
	| "backdrop"
	| "placement"
> & {
	headerId?: string
	bodyId?: string
	triggerRef?: (node: (ReferenceType | null)) => void
	contentRef?: (node: (HTMLElement | null)) => void
	getReferenceProps?: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
	getFloatingProps?: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
	onOpenChange?: (open: boolean, ev?: Event, reason?: OpenChangeReason) => void
	context?: UseFloatingReturn["context"]
	baseClassName?: string
	headerClassName?: string
	bodyClassName?: string
	footerClassName?: string
}

export type DrawerProps = DrawerVariantsProps & DrawerOwnProps

type DrawerOwnProps = {
	backdrop?: BackdropProps["variant"]
	lockScroll?: boolean
	dismissable?: boolean
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	onClose?: () => void
	children?: ReactNode
}

export type DrawerTriggerProps = {
	children?: ReactNode
}

export type DrawerCloseProps = {
	children?: ReactNode
}

export type DrawerContentProps = {
	children?: ReactNode
}

export type DrawerHeaderProps = ComponentProps<"header">
export type DrawerBodyProps = ComponentProps<"div">
export type DrawerFooterProps = ComponentProps<"footer">