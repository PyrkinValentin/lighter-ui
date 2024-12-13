import type { ElementType } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"
import type { ContainerVariantsProps, BoxVariantsProps, FlexVariantsProps, GridVariantsProps } from "./variants"

export type ContainerProps<As extends ElementType = "section"> = ComponentPropsWithAs<As, ContainerVariantsProps>
export type BoxProps<As extends ElementType = "div"> = ComponentPropsWithAs<As, BoxVariantsProps>
export type FlexProps<As extends ElementType = "div"> = ComponentPropsWithAs<As, FlexVariantsProps>
export type GridProps<As extends ElementType = "div"> = ComponentPropsWithAs<As, GridVariantsProps>