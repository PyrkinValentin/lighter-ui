import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type PaginationVariantsProps = VariantProps<typeof paginationVariants> & VariantSlots<typeof paginationVariants>

export const paginationVariants = tv({
	slots: {
		base: "p-2.5 -m-2.5",
		wrapper: "overflow-visible relative h-fit max-w-fit flex flex-nowrap gap-1 items-center",
		item: "select-none touch-none active:scale-[0.97] transition-transform",
		prev: "",
		next: "",
		cursor: "",
		forwardIcon: "hidden group-hover:block group-focus-visible:block",
		ellipsis: "group-hover:hidden group-focus-visible:hidden",
	},
	variants: {
		variant: {
			bordered: {
				item: "border-2 border-default bg-transparent hover:bg-default-100",
			},
			light: {
				item: "bg-transparent",
			},
			flat: "",
			faded: {
				item: "border-2 border-default",
			},
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
	compoundVariants: [],
	compoundSlots: [
		{
			slots: ["item", "cursor", "prev", "next"],
			class: [
				"flex",
				"flex-wrap",
				"truncate",
				"box-border",
				"outline-none",
				"items-center",
				"justify-center",
				"text-default-foreground",
				"focus-visible:z-10",
				"focus-visible:outline-2",
				"focus-visible:outline-primary",
				"focus-visible:outline-offset-2",
				"data-[disabled=true]:text-default-300",
				"data-[disabled=true]:pointer-events-none",
			],
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