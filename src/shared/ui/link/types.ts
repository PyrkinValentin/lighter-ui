import type { LinkProps as NextLinkProps } from "next/link"
import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { LinkVariantsProps } from "./variants"

export type LinkProps = ComponentProps<
	"a",
	NextLinkProps &
	LinkVariantsProps &
	LinkOwnProps
>

type LinkOwnProps = {
	external?: boolean
	showAnchorIcon?: boolean
	anchorIcon?: ReactNode
	children?: ReactNode
}