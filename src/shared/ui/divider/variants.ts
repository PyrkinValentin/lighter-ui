import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type DividerVariantsProps = VariantProps<typeof dividerVariants>

export const dividerVariants = tv({
	base: "shrink-0 bg-divider border-none",
	variants: {
		orientation: {
			horizontal: "w-full h-px",
			vertical: "h-full min-h-5 w-px",
		},
	},
	defaultVariants: {
		orientation: "horizontal",
	},
})