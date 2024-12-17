import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type PaginationVariantsProps = VariantProps<typeof paginationVariants> & VariantSlots<typeof paginationVariants>

export const paginationVariants = tv({
	slots: {
		base: "p-2.5 -m-2.5",
		wrapper: "relative max-w-fit h-fit flex flex-nowrap gap-1 items-center",
		item: "select-none touch-none",
		prev: "",
		next: "",
		cursor: [
			"z-20 flex items-center justify-center select-none touch-none origin-center pointer-events-none",
			"transition-transform duration-300 motion-reduce:transition-none",
		],
		forwardIcon: "hidden group-hover:block group-focus-visible:block",
		ellipsis: "group-hover:hidden group-focus-visible:hidden",
	},
	variants: {
		variant: {
			bordered: "",
			light: "",
			flat: "",
			faded: "",
		},
		color: {
			default: {
				cursor: "bg-default text-default-foreground",
			},
			primary: {
				cursor: "bg-primary text-primary-foreground",
			},
			secondary: {
				cursor: "bg-secondary text-secondary-foreground",
			},
			success: {
				cursor: "bg-success text-success-foreground",
			},
			warning: {
				cursor: "bg-warning text-warning-foreground",
			},
			danger: {
				cursor: "bg-danger text-danger-foreground",
			},
		},
		size: {
			sm: "",
			md: "",
			lg: "",
		},
		rounded: {
			none: "",
			sm: "",
			md: "",
			lg: "",
			full: "",
		},
		compact: {
			true: {
				wrapper: "gap-0 shadow-sm",
				item: [
					"shadow-none first-of-type:rounded-e-none last-of-type:rounded-s-none",
					"[&:not(:first-of-type):not(:last-of-type)]:rounded-none",
				],
				prev: "!rounded-e-none",
				next: "!rounded-s-none",
			},
		},
		disabled: {
			true: {
				base: "opacity-70 pointer-events-none",
			},
		},
		showShadow: {
			true: "",
		},
	},
	defaultVariants: {
		variant: "flat",
		color: "default",
		size: "md",
		rounded: "md",
	},
	compoundVariants: [
		{
			showShadow: true,
			color: "default",
			className: {
				cursor: "shadow-md shadow-default/50",
			},
		},
		{
			showShadow: true,
			color: "primary",
			className: {
				cursor: "shadow-md shadow-primary/40",
			},
		},
		{
			showShadow: true,
			color: "secondary",
			className: {
				cursor: "shadow-md shadow-secondary/40",
			},
		},
		{
			showShadow: true,
			color: "success",
			className: {
				cursor: "shadow-md shadow-success/40",
			},
		},
		{
			showShadow: true,
			color: "warning",
			className: {
				cursor: "shadow-md shadow-warning/40",
			},
		},
		{
			showShadow: true,
			color: "danger",
			className: {
				cursor: "shadow-md shadow-danger/40",
			},
		},
	],
	compoundSlots: [
		{
			slots: ["item", "next"],
			compact: true,
			variant: ["bordered", "faded"],
			className: "ms-[calc(theme(borderWidth.2)*-1)]",
		},
		{
			slots: ["item", "prev", "next"],
			color: "default",
			className: "outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
		},
		{
			slots: ["item", "prev", "next"],
			color: "default",
			className: "focus-visible:outline-default",
		},
		{
			slots: ["item", "prev", "next"],
			color: "primary",
			className: "focus-visible:outline-primary",
		},
		{
			slots: ["item", "prev", "next"],
			color: "secondary",
			className: "focus-visible:outline-secondary",
		},
		{
			slots: ["item", "prev", "next"],
			color: "success",
			className: "focus-visible:outline-success",
		},
		{
			slots: ["item", "prev", "next"],
			color: "warning",
			className: "focus-visible:outline-warning",
		},
		{
			slots: ["item", "prev", "next"],
			color: "danger",
			className: "focus-visible:outline-danger",
		},
		{
			slots: ["item", "prev", "next"],
			className: [
				"box-border flex flex-wrap items-center justify-center",
				"truncate outline-none text-default-foreground",
				"active:scale-[0.97] transition-[transform,background-color]",
				"aria-disabled:text-default-300 aria-disabled:pointer-events-none",
			],
		},
		{
			slots: ["item", "prev", "next"],
			variant: ["flat", "bordered", "faded"],
			className: "shadow-sm",
		},
		{
			slots: ["item", "prev", "next"],
			variant: "bordered",
			className: "border-2 border-default hover:bg-default-100",
		},
		{
			slots: ["item", "prev", "next"],
			variant: "flat",
			className: "bg-default-100 hover:bg-default-200",
		},
		{
			slots: ["item", "prev", "next"],
			variant: "faded",
			className: "border-2 border-default bg-default-50 hover:bg-default-100",
		},
		{
			slots: ["item", "prev", "next"],
			variant: "light",
			className: "hover:bg-default-100",
		},
		{
			slots: ["item", "cursor", "prev", "next"],
			size: "sm",
			className: "min-w-8 w-8 h-8 text-xs",
		},
		{
			slots: ["item", "cursor", "prev", "next"],
			size: "md",
			className: "min-w-9 w-9 h-9 text-sm",
		},
		{
			slots: ["item", "cursor", "prev", "next"],
			size: "lg",
			className: "min-w-10 w-10 h-10 text-md",
		},
		{
			slots: ["wrapper", "item", "cursor", "prev", "next"],
			rounded: "none",
			className: "rounded-none",
		},
		{
			slots: ["wrapper", "item", "cursor", "prev", "next"],
			rounded: "sm",
			className: "rounded-small",
		},
		{
			slots: ["wrapper", "item", "cursor", "prev", "next"],
			rounded: "md",
			className: "rounded-medium",
		},
		{
			slots: ["wrapper", "item", "cursor", "prev", "next"],
			rounded: "lg",
			className: "rounded-large",
		},
		{
			slots: ["wrapper", "item", "cursor", "prev", "next"],
			rounded: "full",
			className: "rounded-full",
		},
	],
})