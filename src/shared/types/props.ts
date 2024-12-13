import type { ComponentProps as ReactComponentProps, ElementType } from "react"

export type ComponentProps<
	Element extends ElementType,
	Props = unknown,
> = Omit<ReactComponentProps<Element>, keyof Props> & Props

export type ComponentPropsWithAs<
	Element extends ElementType,
	Props = unknown,
> = ComponentProps<Element, Props> & {
	as?: Element
}