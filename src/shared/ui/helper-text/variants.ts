import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type HelperTextVariantsProps = VariantProps<typeof helperTextVariants>

export const helperTextVariants = tv({
	base: "relative text-xs transition-colors motion-reduce:transition-none text-default-400",
	variants: {
		error: {
			true: "text-danger",
		},
	},
})