import type { ImageProps as NextImageProps } from "next/image"
import type { ReactNode } from "react"
import type { AvatarVariantsProps } from "./variants"

export type AvatarProps =
	Partial<NextImageProps> &
	Omit<AvatarVariantsProps, "loading" | "inGroup" | "inGroupGrid"> &
	AvatarOwnProps

type AvatarOwnProps = {
	fallback?: ReactNode
	name?: string
	icon?: ReactNode
}