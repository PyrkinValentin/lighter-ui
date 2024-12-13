import type { ComponentProps } from "@/shared/types/props"
import type { RadioVariantsProps } from "./variants"

export type RadioProps = ComponentProps<"input", RadioVariantsProps & {
	value?: string
	onCheckedChange?: (checked: boolean) => void
}>