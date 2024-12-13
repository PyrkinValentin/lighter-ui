"use client"

import type { BackdropProps } from "./types"

import { FloatingOverlay } from "@floating-ui/react"

import { backdropVariants } from "./variants"

export const Backdrop = (props: BackdropProps) => {
	const {
		variant,
		className,
		children,
		...restProps
	} = props

	const classNames = backdropVariants({
		variant,
		className,
	})

	return (
		<FloatingOverlay className={classNames} {...restProps}>
			{children}
		</FloatingOverlay>
	)
}