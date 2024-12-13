"use client"

import type { NavbarLogoProps, NavbarNavigationProps, NavbarProfileProps, NavbarProps } from "./types"

import { useState } from "react"

import { cn } from "@/core/theme"

import { MdMenu } from "react-icons/md"
import { Button } from "@/shared/ui/button"

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

export const NavbarLogo = (props: NavbarLogoProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={cn("w-1/3 order-1 sm:order-first flex justify-center sm:justify-start", className)} {...restProps}>
			{children}
		</div>
	)
}

export const NavbarNavigation = (props: NavbarNavigationProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	// const handleClose = () => setOpen(false)

	return (
		<nav className={cn("w-1/3 order-first sm:order-1 flex justify-start sm:justify-center", className)} {...restProps}>
			<Button
				iconOnly
				size="sm"
				variant="light"
				rounded="full"
				className="-ml-2 sm:hidden"
				onClick={handleOpen}
			>
				<MdMenu className="w-5 h-5"/>
			</Button>

			<ul className="hidden sm:flex items-center gap-1">
				{children}
			</ul>

			{open && (
				<ul className="flex flex-col gap-1">
					{children}
				</ul>
			)}
		</nav>
	)
}

export const NavbarProfile = (props: NavbarProfileProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={cn("w-1/3 order-last flex justify-end", className)} {...restProps}>
			{children}
		</div>
	)
}