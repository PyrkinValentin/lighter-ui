import type { HTMLProps, ReactNode } from "react"
import type { OpenChangeReason, ReferenceType, UseFloatingReturn } from "@floating-ui/react"
import type { ComponentProps } from "@/shared/types/props"
import type { BackdropProps } from "@/shared/ui/backdrop/types"
import type { DialogVariantsProps } from "./variants"

export type DialogContextValue = Pick<
	DialogProps,
	| "lockScroll"
	| "open"
	| "backdrop"
> & {
	headerId?: string
	bodyId?: string
	triggerRef?: (node: (ReferenceType | null)) => void
	contentRef?: (node: (HTMLElement | null)) => void
	getReferenceProps?: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
	getFloatingProps?: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
	onOpenChange?: (open: boolean, ev?: Event, reason?: OpenChangeReason) => void
	context?: UseFloatingReturn["context"]
	wrapperClassName?: string
	baseClassName?: string
	headerClassName?: string
	bodyClassName?: string
	footerClassName?: string
}

export type DialogProps = DialogVariantsProps & DialogOwnProps

type DialogOwnProps = {
	backdrop?: BackdropProps["variant"]
	lockScroll?: boolean
	dismissable?: boolean
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	onClose?: () => void
	children?: ReactNode
}

export type DialogTriggerProps = {
	children?: ReactNode
}

export type DialogCloseProps = {
	children?: ReactNode
}

export type DialogContentProps = {
	children?: ReactNode
}

export type DialogHeaderProps = ComponentProps<"header">
export type DialogBodyProps = ComponentProps<"div">
export type DialogFooterProps = ComponentProps<"footer">