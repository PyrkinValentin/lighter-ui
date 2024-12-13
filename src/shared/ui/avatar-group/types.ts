import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AvatarProps } from "@/shared/ui/avatar/types"
import type { AvatarGroupVariantsProps } from "./variants"

export type AvatarGroupContextValue =
	Pick<AvatarGroupProps, "size" | "color" | "rounded" | "bordered" | "disabled"> &
	{
		inGroup?: boolean
		inGroupGrid?: boolean
	}

export type AvatarGroupProps = ComponentProps<
	"div",
	AvatarGroupVariantsProps &
	Pick<AvatarProps, "size" | "color" | "rounded" | "bordered" | "disabled"> &
	AvatarGroupOwnProps
>

type AvatarGroupOwnProps = {
	max?: number
	renderCount?: (count: number) => ReactNode
}