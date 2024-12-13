import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type NavbarVariantsProps = VariantProps<typeof navbarVariants>

export const navbarVariants = tv({
	base: "relative container h-14 flex items-center justify-between flex-nowrap bg-background gap-x-3",
	variants: {
		position: {
			static: "",
			sticky: "sticky top-0 z-40 inset-x-0",
		},
	},
	defaultVariants: {
		position: "sticky",
	},
})