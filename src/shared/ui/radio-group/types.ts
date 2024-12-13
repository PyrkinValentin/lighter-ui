import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { RadioProps } from "@/shared/ui/radio/types"
import type { RadioGroupVariantsProps } from "./variants"

export type RadioGroupContextValue = Pick<
	RadioGroupProps,
	| "color"
	| "size"
	| "readOnly"
	| "disabled"
	| "error"
> & {
	groupId?: string
	checked?: (value?: string) => boolean | undefined
	onCheckedChange?: (value?: string) => (checked: boolean) => void
}

export type RadioGroupProps = ComponentProps<"div", RadioGroupVariantsProps & Pick<
	RadioProps,
	| "color"
	| "size"
	| "readOnly"
	| "disabled"
	| "error"
> & {
	label?: ReactNode
	description?: ReactNode
	errorMessage?: string
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
}>