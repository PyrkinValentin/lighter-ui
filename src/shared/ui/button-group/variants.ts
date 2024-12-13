import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type ButtonGroupVariantsProps = VariantProps<typeof buttonGroupVariants>

export const buttonGroupVariants = tv({
	base: "inline-flex items-center justify-center h-auto",
	variants: {
		fullWidth: {
			true: "w-full",
		},
	},
})