import type { ElementType } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"
import type { TypographyVariantsProps } from "./variants"

export type TypographyProps<As extends ElementType = "span"> = ComponentPropsWithAs<As, TypographyVariantsProps>