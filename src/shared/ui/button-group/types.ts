import type { ComponentProps } from "@/shared/types/props"
import type { ButtonProps } from "@/shared/ui/button/types"
import type { ButtonGroupVariantsProps } from "./variants"

export type ButtonGroupContextValue =
	Pick<ButtonGroupProps, "variant" | "color" | "size" | "rounded" | "fullWidth" | "disabled"> &
	{
		inGroup?: boolean
	}

export type ButtonGroupProps = ComponentProps<
	"div",
	ButtonGroupVariantsProps &
	Pick<ButtonProps, "variant" | "color" | "size" | "rounded" | "disabled">
>