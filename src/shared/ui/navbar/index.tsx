"use client"

import type { NavbarProps } from "./types"

import { navbarVariants } from "./variants"

export const Navbar = (props: NavbarProps) => {
	const {
		position,
		// className,

		children,
		...restProps
	} = props

	const classNames = navbarVariants({
		position,
	})

	return (
		<header className={classNames} {...restProps}>
			{children}
		</header>
	)
}