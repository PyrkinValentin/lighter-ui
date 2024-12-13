import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type LinkVariantsProps = VariantProps<typeof linkVariants>

export const linkVariants = tv({
	base: [
		"relative inline-flex items-center gap-1.5 outline-none",
		"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
	],
	variants: {
		variant: {
			light: "hover:opacity-80 active:opacity-70 transition-opacity",
			flat: [
				"px-2 py-1",
				"hover:after:opacity-100 after:content-[''] after:inset-0 after:opacity-0 after:w-full",
				"after:h-full after:rounded-xl after:transition-[background] after:absolute",
			],
		},
		size: {
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
		},
		color: {
			foreground: "text-foreground",
			primary: "text-primary",
			secondary: "text-secondary",
			success: "text-success",
			warning: "text-warning",
			danger: "text-danger",
		},
		underline: {
			none: "no-underline",
			hover: "hover:underline",
			always: "underline",
			active: "active:underline",
			focus: "focus:underline",
		},
		disabled: {
			true: "opacity-70 cursor-default pointer-events-none",
		},
	},
	defaultVariants: {
		variant: "light",
		color: "foreground",
		size: "md",
		underline: "none",
	},
	compoundVariants: [
		{
			variant: "flat",
			color: "foreground",
			className: "hover:after:bg-foreground/10",
		},
		{
			variant: "flat",
			color: "primary",
			className: "hover:after:bg-primary/20",
		},
		{
			variant: "flat",
			color: "secondary",
			className: "hover:after:bg-secondary/20",
		},
		{
			variant: "flat",
			color: "success",
			className: "hover:after:bg-success/20",
		},
		{
			variant: "flat",
			color: "warning",
			className: "hover:after:bg-warning/20",
		},
		{
			variant: "flat",
			color: "danger",
			className: "hover:after:bg-danger/20",
		},
		{
			underline: ["hover", "always", "active", "focus"],
			className: "underline-offset-4",
		},
	],
})