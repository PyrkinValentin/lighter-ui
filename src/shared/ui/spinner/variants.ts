import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type SpinnerVariantsProps = VariantProps<typeof spinnerVariants> & VariantSlots<typeof spinnerVariants>

export const spinnerVariants = tv({
	slots: {
		base: "inline-flex flex-col gap-2 items-center",
		spinner: "border-b-2 rounded-full animate-spin-fast",
	},
	variants: {
		color: {
			default: {
				spinner: "border-foreground",
			},
			primary: {
				spinner: "border-primary",
			},
			secondary: {
				spinner: "border-secondary",
			},
			success: {
				spinner: "border-success",
			},
			warning: {
				spinner: "border-warning",
			},
			danger: {
				spinner: "border-danger",
			},
		},
		size: {
			sm: {
				base: "text-sm",
				spinner: "h-5 w-5",
			},
			md: {
				base: "text-md",
				spinner: "h-6 w-6",
			},
			lg: {
				base: "text-lg",
				spinner: "h-7 w-7",
			},
		},
	},
	defaultVariants: {
		color: "default",
		size: "md",
	},
})