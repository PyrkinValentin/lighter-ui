import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type RadioGroupVariantsProps = VariantProps<typeof radioGroupVariants> & VariantSlots<typeof radioGroupVariants>

export const radioGroupVariants = tv({
	slots: {
		base: "relative flex flex-col gap-2",
		label: "relative text-default-500",
		wrapper: "flex flex-wrap gap-2",
	},
	variants: {
		orientation: {
			vertical: {
				wrapper: "flex-col",
			},
			horizontal: {
				wrapper: "flex-row",
			},
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
})