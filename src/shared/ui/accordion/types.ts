import type { CSSProperties, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AccordionItemVariantsProps, AccordionVariantsProps } from "./variants"

export type AccordionContextValue =
	Pick<AccordionProps, "keepMounted" | "variant" | "compact"> &
	{
		disabled?: (value: string) => boolean
		expanded?: (value: string) => boolean
		onExpandedChange?: (value: string, expanded: boolean) => void
	}

export type AccordionProps = ComponentProps<
	"div",
	AccordionVariantsProps &
	Pick<AccordionItemProps, "compact" | "disabled"> &
	AccordionOwnProps
>

type AccordionOwnProps = {
	keepMounted?: boolean
	multiple?: boolean
	disabledValue?: string[]
	defaultValue?: string[]
	value?: string[]
	onValueChange?: (value: string[]) => void
}

export type AccordionItemProps = ComponentProps<
	"div",
	Omit<AccordionItemVariantsProps, "variant"> &
	AccordionItemOwnProps
>

type AccordionItemOwnProps = {
	title: ReactNode
	subtitle?: ReactNode
	value?: string
	startContent?: ReactNode
	indicator?: ReactNode | ((expanded: boolean) => ReactNode)
}

export type CollapseProps = {
	animateOpacity?: boolean
	expanded?: boolean
	keepMounted?: boolean
	duration?: number
	ease?: CSSProperties["transitionTimingFunction"]
	children?: ReactNode
}