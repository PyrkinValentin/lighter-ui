import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type TypographyVariantsProps = VariantProps<typeof typographyVariants>

export const typographyVariants = tv({
	variants: {
		color: {
			inherit: "text-inherit",
			current: "text-current",
			transparent: "text-transparent",
			black: "text-black",
			white: "text-white",
			foreground: "text-foreground",
			default: "text-default-500",
			primary: "text-primary",
			secondary: "text-secondary",
			success: "text-success",
			warning: "text-warning",
			danger: "text-danger",
		},
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
		},
		weight: {
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
			extrabold: "font-extrabold",
		},
		align: {
			start: "text-start",
			center: "text-center",
			justify: "text-justify",
			end: "text-end",
		},
		truncate: {
			true: "truncate",
		},
		wrap: {
			wrap: "text-wrap",
			nowrap: "text-nowrap",
			balance: "text-balance",
			pretty: "text-pretty",
		},
		letterSpacing: {
			xs: "tracking-tighter",
			sm: "tracking-tight",
			md: "tracking-normal",
			lg: "tracking-wide",
			xl: "tracking-wider",
			"2xl": "tracking-widest",
		},
		lineClamp: {
			none: "line-clamp-none",
			"1": "line-clamp-1",
			"2": "line-clamp-2",
			"3": "line-clamp-3",
			"4": "line-clamp-4",
			"5": "line-clamp-5",
			"6": "line-clamp-6",
		},
		decoration: {
			underline: "underline underline-offset-4",
			overline: "overline",
			through: "line-through",
		},
		decorationColor: {
			inherit: "decoration-inherit",
			current: "decoration-current",
			transparent: "decoration-transparent",
			black: "decoration-black",
			white: "decoration-white",
			foreground: "decoration-foreground",
			default: "decoration-default-500",
			primary: "decoration-primary",
			secondary: "decoration-secondary",
			success: "decoration-success",
			warning: "decoration-warning",
			danger: "decoration-danger",
		},
		decorationStyle: {
			solid: "decoration-solid",
			double: "decoration-double",
			dotted: "decoration-dotted",
			dashed: "decoration-dashed",
			wavy: "decoration-wavy",
		},
		transform: {
			uppercase: "uppercase",
			lowercase: "lowercase",
			capitalize: "capitalize",
		},
	},
	defaultVariants: {
		color: "foreground",
	},
})