import type { ElementType } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { TabsVariantsProps } from "./variants"

export type TabsContextValue = Pick<
	TabsProps,
	| "keepMounted"
> & {
	disabled?: (value: string) => boolean | undefined
	selected?: (value: string) => boolean | undefined
	onSelectedChange?: (value: string) => void
	tabListClassName?: string
	tabClassName?: string
	tabPanelClassName?: string
}

export type TabsProps = ComponentProps<
	"div",
	TabsVariantsProps &
	TabsOwnProps
>

type TabsOwnProps = ({ value: string } | { defaultValue: string }) & {
	keepMounted?: boolean
	disabledValue?: string[]
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
}

export type TabListProps = ComponentProps<"div">

export type TabProps<As extends ElementType = "button"> = ComponentPropsWithAs<As, TabOwnProps>

type TabOwnProps = {
	value: string
}

export type TabPanelProps = ComponentProps<"div", TabPanelOwnProps>

type TabPanelOwnProps = {
	value: string
}