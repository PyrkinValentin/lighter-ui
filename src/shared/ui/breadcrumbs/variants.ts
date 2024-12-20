import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type BreadcrumbsVariantsProps = VariantProps<typeof breadcrumbsVariants> &
	VariantSlots<typeof breadcrumbsVariants>

export const breadcrumbsVariants = tv({
	slots: {
		base: "",
		list: "flex flex-wrap list-none",
		item: "flex items-center",
		itemContent: [
			"outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
			"hover:opacity-80 active:opacity-70 transition-opacity",
		],
		lastItemContent: "",
		separator: "px-1",
	},
	variants: {
		variant: {
			solid: {
				list: "bg-default-100",
			},
			bordered: {
				list: "border-2 border-default-200 shadow-sm",
			},
			light: "",
		},
		underline: {
			none: {
				itemContent: "no-underline",
			},
			hover: {
				itemContent: "hover:underline",
			},
			always: {
				itemContent: "underline",
			},
			active: {
				itemContent: "active:underline",
			},
			focus: {
				itemContent: "focus:underline",
			},
		},
		size: {
			sm: "",
			md: "",
			lg: "",
		},
		color: {
			foreground: {
				itemContent: "text-foreground/50 focus-visible:outline-foreground/50",
				lastItemContent: "text-foreground",
				separator: "text-foreground/50",
			},
			primary: {
				itemContent: "text-primary/80 focus-visible:outline-primary",
				lastItemContent: "text-primary",
				separator: "text-primary/80",
			},
			secondary: {
				itemContent: "text-secondary/80 focus-visible:outline-secondary",
				lastItemContent: "text-secondary",
				separator: "text-secondary/80",
			},
			success: {
				itemContent: "text-success/80 focus-visible:outline-success",
				lastItemContent: "text-success",
				separator: "text-success/80",
			},
			warning: {
				itemContent: "text-warning/80 focus-visible:outline-warning",
				lastItemContent: "text-warning",
				separator: "text-warning/80",
			},
			danger: {
				itemContent: "text-danger/80 focus-visible:outline-danger",
				lastItemContent: "text-danger",
				separator: "text-danger/80",
			},
		},
		rounded: {
			none: {
				list: "rounded-none",
			},
			sm: {
				list: "rounded-small",
			},
			md: {
				list: "rounded-medium",
			},
			lg: {
				list: "rounded-large",
			},
			full: {
				list: "rounded-full",
			},
		},
		disabled: {
			true: {
				item: "opacity-70 pointer-events-none",
			},
		},
	},
	defaultVariants: {
		variant: "light",
		size: "md",
		color: "foreground",
		rounded: "sm",
		underline: "none",
	},
	compoundVariants: [
		{
			variant: ["solid", "bordered"],
			className: {
				list: "max-w-fit",
			},
		},
		{
			variant: ["solid", "bordered"],
			size: "sm",
			className: {
				list: "px-2 py-1",
			},
		},
		{
			variant: ["solid", "bordered"],
			size: "md",
			className: {
				list: "px-2.5 py-1.5",
			},
		},
		{
			variant: ["solid", "bordered"],
			size: "lg",
			className: {
				list: "px-3 py-2",
			},
		},
		{
			underline: ["hover", "always", "active", "focus"],
			className: "underline-offset-4",
		},
	],
	compoundSlots: [
		{
			slots: ["itemContent", "lastItemContent"],
			className: "flex gap-1 items-center whitespace-nowrap",
		},
		{
			slots: ["itemContent", "lastItemContent", "separator"],
			size: "sm",
			className: "text-xs",
		},
		{
			slots: ["itemContent", "lastItemContent", "separator"],
			size: "md",
			className: "text-sm",
		},
		{
			slots: ["itemContent", "lastItemContent", "separator"],
			size: "lg",
			className: "text-md",
		},
	],
})