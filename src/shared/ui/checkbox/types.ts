import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { CheckboxVariantsProps } from "./variants"

export type CheckboxProps = ComponentProps<
	"input",
	Omit<CheckboxVariantsProps, "hasIcon"> &
	CheckboxOwnProps
>

type CheckboxOwnProps = {
	icon?: ReactNode
	value?: string
	onCheckedChange?: (checked: boolean) => void
}

export type CheckboxIconProps = ComponentProps<"svg">