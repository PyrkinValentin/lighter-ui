import type { CSSProperties, HTMLProps, ReactNode } from "react"
import type { OpenChangeReason, Placement, ReferenceType, UseFloatingReturn, UseRoleProps } from "@floating-ui/react"
import type { BackdropProps } from "@/shared/ui/backdrop/types"
import type { PopoverVariantsProps } from "./variants"

export type PopoverContextValue = {
	triggerRef?: (node: (ReferenceType | null)) => void
	triggerClassName?: string
	getReferenceProps?: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
	keepFocusWithinElement?: boolean
	contentRef?: (node: (HTMLElement | null)) => void
	baseClassName?: string
	open?: boolean
	backdrop?: BackdropProps["variant"]
	lockScroll?: boolean
	context?: UseFloatingReturn["context"]
	getFloatingProps?: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
	floatingStyles?: CSSProperties
	onOpenChange?: (open: boolean, _ev?: Event, reason?: OpenChangeReason) => void
}

export type PopoverProps = PopoverVariantsProps & PopoverOwnProps

type PopoverOwnProps = {
	type?: UseRoleProps["role"]
	placement?: Placement
	backdrop?: BackdropProps["variant"]
	dismissable?: boolean
	lockScroll?: boolean
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	onClose?: () => void | boolean
	offset?: number

	children?: ReactNode
}

export type PopoverTriggerProps = {
	children?: ReactNode
}

export type PopoverCloseProps = {
	children?: ReactNode
}

export type PopoverContentProps = {
	children?: ReactNode
}