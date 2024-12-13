import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type BackdropVariantsProps = VariantProps<typeof backdropVariants>

export const backdropVariants = tv({
	base: "z-50 fixed w-screen h-screen",
	variants: {
		variant: {
			transparent: "bg-transparent",
			opaque: "bg-black/30 dark:bg-black/50",
			blur: "backdrop-blur-sm",
		},
	},
	defaultVariants: {
		variant: "opaque",
	},
})