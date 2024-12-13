import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { CheckboxProps } from "@/shared/ui/checkbox/types"
import type { CheckboxGroupVariantsProps } from "./variants"

export type CheckboxGroupContextValue =
	Pick<CheckboxGroupProps, "color" | "size" | "rounded" | "readOnly" | "disabled" | "error"> &
	{
		checked?: (value?: string) => boolean | undefined
		onCheckedChange?: (value?: string) => (checked: boolean) => void
	}

export type CheckboxGroupProps = ComponentProps<
	"div",
	CheckboxGroupVariantsProps &
	Pick<CheckboxProps, "color" | "size" | "rounded" | "readOnly" | "disabled" | "error"> &
	CheckboxGroupOwnProps
>

type CheckboxGroupOwnProps = {
	label?: ReactNode
	description?: ReactNode
	errorMessage?: ReactNode
	defaultValue?: string[]
	value?: string[]
	onValueChange?: (value: string[]) => void
}