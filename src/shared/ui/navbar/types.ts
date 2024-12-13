import type { ComponentProps } from "@/shared/types/props"
import type { NavbarVariantsProps } from "./variants"

export type NavbarProps = ComponentProps<"header", NavbarVariantsProps>
export type NavbarLogoProps = ComponentProps<"div">
export type NavbarNavigationProps = ComponentProps<"nav">
export type NavbarProfileProps = ComponentProps<"div">