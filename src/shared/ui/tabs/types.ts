import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { TabsVariantsProps } from "./variants"

export type TabsProps = ComponentProps<
	"div",
	TabsVariantsProps &
	TabsOwnProps
>

type TabsOwnProps = {
	disabledValue?: string[]
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
}

export type TabProps<
	As extends ElementType = "button"
> = ComponentPropsWithAs<As, TabOwnProps>

type TabOwnProps = {
	selected?: boolean
	value?: string
	title: ReactNode
	classNames?: {
		cursor?: string
		tabContent?: string
	}
}