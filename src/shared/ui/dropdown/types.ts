import type { ElementType } from "react"
import type { PopoverProps, PopoverTriggerProps } from "@/shared/ui/popover/types"
import type { ListBoxItemProps, ListBoxProps, ListBoxSectionProps } from "@/shared/ui/list-box/types"

export type DropdownProps = PopoverProps
export type DropdownTriggerProps = PopoverTriggerProps
export type DropdownMenuProps = ListBoxProps
export type DropdownSectionProps = ListBoxSectionProps
export type DropdownMenuItemProps<As extends ElementType = "li"> = ListBoxItemProps<As>