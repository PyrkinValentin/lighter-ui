import type { ElementType } from "react"
import type { DropdownMenuItemProps, DropdownMenuProps, DropdownProps, DropdownSectionProps, DropdownTriggerProps } from "./types"

import { Fragment } from "react"
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"
import { ListBox, ListBoxItem, ListBoxSection } from "@/shared/ui/list-box"

export const Dropdown = (props: DropdownProps) => {
	const {
		classNames,
		children,
		...restProps
	} = props

	return (
		<Popover
			type="menu"
			lockScroll
			classNames={{
				...classNames,
				base: ["p-2 min-w-[200px]", classNames?.base],
			}}
			{...restProps}
		>
			{children}
		</Popover>
	)
}

export const DropdownTrigger = (props: DropdownTriggerProps) => {
	const { children, ...restProps } = props

	return (
		<PopoverTrigger {...restProps}>
			{children}
		</PopoverTrigger>
	)
}

export const DropdownMenu = (props: DropdownMenuProps) => {
	const { children, ...restProps } = props

	return (
		<PopoverContent>
			<ListBox role="menu" {...restProps}>
				{children}
			</ListBox>
		</PopoverContent>
	)
}

export const DropdownSection = (props: DropdownSectionProps) => {
	const { children, ...restProps } = props

	return (
		<ListBoxSection {...restProps}>
			{children}
		</ListBoxSection>
	)
}

export const DropdownMenuItem = <As extends ElementType = "li">(props: DropdownMenuItemProps<As>) => {
	const {
		children,
		readOnly,
		...restProps
	} = props as DropdownMenuItemProps

	const Component = readOnly
		? Fragment
		: PopoverClose

	return (
		<Component>
			<ListBoxItem
				role="menuitem"
				readOnly={readOnly}
				{...restProps}
			>
				{children}
			</ListBoxItem>
		</Component>
	)
}