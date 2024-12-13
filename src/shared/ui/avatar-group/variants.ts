import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type AvatarGroupVariantsProps = VariantProps<typeof avatarGroupVariants> & VariantSlots<typeof avatarGroupVariants>

export const avatarGroupVariants = tv({
	slots: {
		base: "flex items-center justify-center h-auto w-max",
		count: "font-medium",
	},
	variants: {
		grid: {
			true: {
				base: "inline-grid grid-cols-4 gap-3",
			},
			false: {
				base: "ms-2",
				count: "z-10 transition-none hover:-translate-x-0 focus-visible:-translate-x-0",
			},
		},
	},
	defaultVariants: {
		grid: false,
	},
})