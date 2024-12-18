import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type PaginationVariantsProps = VariantProps<typeof paginationVariants> & VariantSlots<typeof paginationVariants>

export const paginationVariants = tv({
	slots: {
		base: "p-2.5 -m-2.5",
		wrapper: "max-w-fit h-fit flex flex-nowrap gap-1 items-center",
		item: "select-none touch-none",
		prev: "",
		next: "",
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
				item: "aria-selected:bg-default-300 aria-selected:text-default-foreground",
			},
			primary: {
				item: "aria-selected:bg-primary aria-selected:text-primary-foreground",
			},
			secondary: {
				item: "aria-selected:bg-secondary aria-selected:text-secondary-foreground",
			},
			success: {
				item: "aria-selected:bg-success aria-selected:text-success-foreground",
			},
			warning: {
				item: "aria-selected:bg-warning aria-selected:text-warning-foreground",
			},
			danger: {
				item: "aria-selected:bg-danger aria-selected:text-danger-foreground",
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
			compact: false,
			variant: ["bordered", "faded"],
			color: "default",
			class: {
				item: "aria-selected:border-default-300",
			},
		},
		{
			compact: false,
			variant: ["bordered", "faded"],
			color: "primary",
			class: {
				item: "aria-selected:border-primary",
			},
		},
		{
			compact: false,
			variant: ["bordered", "faded"],
			color: "secondary",
			class: {
				item: "aria-selected:border-secondary",
			},
		},
		{
			compact: false,
			variant: ["bordered", "faded"],
			color: "success",
			class: {
				item: "aria-selected:border-success",
			},
		},
		{
			compact: false,
			variant: ["bordered", "faded"],
			color: "warning",
			class: {
				item: "aria-selected:border-warning",
			},
		},
		{
			compact: false,
			variant: ["bordered", "faded"],
			color: "danger",
			class: {
				item: "aria-selected:border-danger",
			},
		},
		{
			showShadow: true,
			color: "default",
			className: {
				item: "aria-selected:shadow-md aria-selected:shadow-default/50",
			},
		},
		{
			showShadow: true,
			color: "primary",
			className: {
				item: "aria-selected:shadow-md aria-selected:shadow-primary/40",
			},
		},
		{
			showShadow: true,
			color: "secondary",
			className: {
				item: "aria-selected:shadow-md aria-selected:shadow-secondary/40",
			},
		},
		{
			showShadow: true,
			color: "success",
			className: {
				item: "aria-selected:shadow-md aria-selected:shadow-success/40",
			},
		},
		{
			showShadow: true,
			color: "warning",
			className: {
				item: "aria-selected:shadow-md aria-selected:shadow-warning/40",
			},
		},
		{
			showShadow: true,
			color: "danger",
			className: {
				item: "aria-selected:shadow-md aria-selected:shadow-danger/40",
			},
		},
	],
	compoundSlots: [
		{
			slots: ["prev", "item"],
			compact: true,
			variant: ["bordered", "faded"],
			className: "me-[calc(theme(borderWidth.2)*-1)]",
		},
		{
			slots: ["prev", "next"],
			className: "aria-disabled:opacity-70 aria-disabled:pointer-events-none",
		},
		{
			slots: ["item", "prev", "next"],
			className: [
				"flex flex-wrap items-center justify-center",
				"box-border text-default-foreground",
				"outline-none",
				"select-none touch-none active:scale-[0.97] transition duration-300",
				"hover:bg-default-100 focus-visible:z-10",
			],
		},
		{
			slots: ["item", "prev", "next"],
			variant: ["bordered", "faded"],
			className: "border-2 border-default",
		},
		{
			slots: ["item", "prev", "next"],
			color: "default",
			className: "outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
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
			variant: ["flat", "bordered", "faded"],
			className: "shadow-sm",
		},
		{
			slots: ["item", "prev", "next"],
			variant: "flat",
			className: "bg-default-100 hover:bg-default-200 active:bg-default-300",
		},
		{
			slots: ["item", "prev", "next"],
			variant: "faded",
			className: "bg-default-50 hover:bg-default-100 active:bg-default-200",
		},
		{
			slots: ["item", "prev", "next"],
			variant: "light",
			className: "hover:bg-default-100 active:bg-default-200",
		},
		{
			slots: ["item", "prev", "next"],
			size: "sm",
			className: "min-w-8 w-8 h-8 text-xs",
		},
		{
			slots: ["item", "prev", "next"],
			size: "md",
			className: "min-w-9 w-9 h-9 text-sm",
		},
		{
			slots: ["item", "prev", "next"],
			size: "lg",
			className: "min-w-10 w-10 h-10 text-md",
		},
		{
			slots: ["wrapper", "item", "prev", "next"],
			rounded: "none",
			className: "rounded-none",
		},
		{
			slots: ["wrapper", "item", "prev", "next"],
			rounded: "sm",
			className: "rounded-small",
		},
		{
			slots: ["wrapper", "item", "prev", "next"],
			rounded: "md",
			className: "rounded-medium",
		},
		{
			slots: ["wrapper", "item", "prev", "next"],
			rounded: "lg",
			className: "rounded-large",
		},
		{
			slots: ["wrapper", "item", "prev", "next"],
			rounded: "full",
			className: "rounded-full",
		},
	],
})