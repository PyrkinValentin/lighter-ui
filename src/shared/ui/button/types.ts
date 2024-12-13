import type { ElementType, ReactNode } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"
import type { ButtonVariantsProps } from "./variants"

export type ButtonProps<As extends ElementType = "button"> = ComponentPropsWithAs<
	As,
	Omit<ButtonVariantsProps, "inGroup"> &
	ButtonOwnProps
>

type ButtonOwnProps = {
	startContent?: ReactNode
	endContent?: ReactNode
}