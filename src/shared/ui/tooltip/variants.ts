import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type TooltipVariantsProps = VariantProps<typeof tooltipVariants> & VariantSlots<typeof tooltipVariants>

export const tooltipVariants = tv({
	slots: {
		base: [
			"z-50 relative px-2.5 py-1 box-border",
			"inline-flex flex-col items-center justify-center",
			"outline-none subpixel-antialiased",
		],
		trigger: "z-10",
	},
	variants: {
		size: {
			sm: { base: "text-xs" },
			md: { base: "text-sm" },
			lg: { base: "text-md" },
		},
		color: {
			default: {
				base: "bg-content1",
			},
			foreground: {
				base: "bg-foreground text-background",
			},
			primary: {
				base:  "bg-primary text-primary-foreground",
			},
			secondary: {
				base: "bg-secondary text-secondary-foreground",
			},
			success: {
				base: "bg-success text-success-foreground",
			},
			warning: {
				base: "bg-warning text-warning-foreground",
			},
			danger: {
				base: "bg-danger text-danger-foreground",
			},
		},
		rounded: {
			none: {
				base: "rounded-none",
			},
			sm: {
				base: "rounded-small",
			},
			md: {
				base: "rounded-medium",
			},
			lg: {
				base: "rounded-large",
			},
			full: {
				base: "rounded-full",
			},
		},
		shadow: {
			sm: {
				base: "shadow-small",
			},
			md: {
				base: "shadow-medium",
			},
			lg: {
				base: "shadow-large",
			},
		},
	},
	defaultVariants: {
		size: "md",
		color: "default",
		rounded: "lg",
		shadow: "md",
	},
})