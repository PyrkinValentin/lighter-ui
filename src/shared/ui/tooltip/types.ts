import type { ReactNode } from "react"
import type { OpenChangeReason, Placement } from "@floating-ui/react"
import type { TooltipVariantsProps } from "./variants"

export type TooltipProps = TooltipVariantsProps & TooltipOwnProps

type TooltipOwnProps = {
	placement?: Placement
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	onClose?: () => void
	offset?: number
	content: ReactNode
	children?: ReactNode
}
