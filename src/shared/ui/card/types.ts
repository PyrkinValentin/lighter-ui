import type { ComponentProps } from "@/shared/types/props"
import type { CardVariantsProps } from "./variants"

export type CardContextValue = {
	headerClassNames: string
	bodyClassNames: string,
	footerClassNames: string,
}

export type CardProps = ComponentProps<"div", CardVariantsProps>
export type CardHeaderProps = ComponentProps<"div">
export type CardBodyProps = ComponentProps<"div">
export type CardFooterProps = ComponentProps<"div">