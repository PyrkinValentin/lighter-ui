import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { ListBoxItemVariantsProps, ListBoxSectionVariantsProps } from "./variants"

export type ListBoxContextValue = Pick<ListBoxProps, "variant" | "color" | "hideSelectedIcon"> & {
	disabled?: (value: string) => boolean
	selected?: (value: string) => boolean
	onSelectedChange?: (value: string, selected: boolean) => void
}

export type ListBoxProps = ComponentProps<
	"ul",
	Pick<ListBoxItemVariantsProps, "variant" | "color" | "disabled"> &
	ListBoxOwnProps
>

type ListBoxOwnProps = {
	disallowEmptySelection?: boolean
	hideSelectedIcon?: boolean
	mode?: "none-selection" | "single-selection" | "multiple-selection"
	disabledValue?: string[]
	defaultValue?: string[]
	value?: string[]
	onValueChange?: (value: string[]) => void
}

export type ListBoxSectionProps = ComponentProps<
	"li",
	ListBoxSectionVariantsProps &
	ListBoxSectionOwnProps
>

type ListBoxSectionOwnProps = {
	divider?: boolean
	title?: ReactNode
}

export type ListBoxItemProps<As extends ElementType = "li"> = ComponentPropsWithAs<
	As,
	ListBoxItemVariantsProps &
	ListBoxItemOwnProps
>

type ListBoxItemOwnProps = {
	value?: string
	description?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	selectedIcon?: ReactNode | ((selected: boolean) => ReactNode)
}