import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export const listBoxVariants = tv({
	base: "w-full relative flex flex-col gap-1",
})

export type ListBoxItemVariantsProps = VariantProps<typeof listBoxItemVariants> &
	VariantSlots<typeof listBoxItemVariants>

export const listBoxItemVariants = tv({
	slots: {
		base: [
			"group relative px-2 py-1.5 w-full h-full box-border",
			"flex gap-2 items-center justify-between",
			"rounded-small subpixel-antialiased cursor-pointer",
			"outline-none transition",
			"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
		],
		wrapper: "w-full flex flex-col items-start justify-center",
		title: "flex-1 text-sm font-normal",
		description: "w-full text-xs text-default-500 group-hover:text-current transition-colors",
		selectedIcon: [
			"text-inherit w-3 h-3 flex-shrink-0",
			"[stroke-dashoffset:66] transition-[stroke-dashoffset] group-aria-[selected=true]:[stroke-dashoffset:44]",
		],
	},
	variants: {
		variant: {
			solid: "",
			bordered: {
				base: "border-2 border-transparent bg-transparent",
			},
			light: {
				base: "bg-transparent",
			},
			faded: {
				base: [
					"border border-transparent hover:border-default hover:bg-default-100 focus:bg-default-100",
				],
			},
			flat: "",
			shadow: {
				base: "hover:shadow-lg focus:shadow-lg",
			},
		},
		color: {
			default: {
				base: "focus-visible:outline-default",
			},
			primary: {
				base: "focus-visible:outline-primary",
			},
			secondary: {
				base: "focus-visible:outline-secondary",
			},
			success: {
				base: "focus-visible:outline-success",
			},
			warning: {
				base: "focus-visible:outline-warning",
			},
			danger: {
				base: "focus-visible:outline-danger",
			},
		},
		divider: {
			true: {
				base: [
					"mb-1.5",
					"after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-default",
				],
			},
		},
		readOnly: {
			true: {
				base: "cursor-default pointer-events-none"
			},
		},
		disabled: {
			true: {
				base: "opacity-70 pointer-events-none",
			},
		},
	},
	defaultVariants: {
		variant: "solid",
		color: "default",
	},
	compoundVariants: [
		{
			variant: "solid",
			color: "default",
			className: {
				base: "hover:bg-default hover:text-default-foreground focus:bg-default focus:text-default-foreground",
			},
		},
		{
			variant: "solid",
			color: "primary",
			className: {
				base: "hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
			},
		},
		{
			variant: "solid",
			color: "secondary",
			className: {
				base: "hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground",
			},
		},
		{
			variant: "solid",
			color: "success",
			className: {
				base: "hover:bg-success hover:text-success-foreground focus:bg-success focus:text-success-foreground",
			},
		},
		{
			variant: "solid",
			color: "warning",
			className: {
				base: "hover:bg-warning hover:text-warning-foreground focus:bg-warning focus:text-warning-foreground",
			},
		},
		{
			variant: "solid",
			color: "danger",
			className: {
				base: "hover:bg-danger hover:text-danger-foreground focus:bg-danger focus:text-danger-foreground",
			},
		},
		{
			variant: "shadow",
			color: "default",
			className: {
				base: [
					"hover:shadow-default/50 hover:bg-default hover:text-default-foreground",
					"focus:shadow-default/50 focus:bg-default focus:text-default-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "primary",
			className: {
				base: [
					"hover:shadow-primary/30 hover:bg-primary hover:text-primary-foreground",
					"focus:shadow-primary/30 focus:bg-primary focus:text-primary-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "secondary",
			className: {
				base: [
					"hover:shadow-secondary/30 hover:bg-secondary hover:text-secondary-foreground",
					"focus:shadow-secondary/30 focus:bg-secondary focus:text-secondary-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "success",
			className: {
				base: [
					"hover:shadow-success/30 hover:bg-success hover:text-success-foreground",
					"focus:shadow-success/30 focus:bg-success focus:text-success-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "warning",
			className: {
				base: [
					"hover:shadow-warning/30 hover:bg-warning hover:text-warning-foreground",
					"focus:shadow-warning/30 focus:bg-warning focus:text-warning-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "danger",
			className: {
				base: [
					"hover:shadow-danger/30 hover:bg-danger hover:text-danger-foreground",
					"focus:shadow-danger/30 focus:bg-danger focus:text-danger-foreground",
				],
			},
		},
		{
			variant: "bordered",
			color: "default",
			className: {
				base: "hover:border-default focus:border-default",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				base: "hover:border-primary hover:text-primary focus:border-primary focus:text-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				base: "hover:border-secondary hover:text-secondary focus:border-secondary focus:text-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				base: "hover:border-success hover:text-success focus:border-success focus:text-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				base: "hover:border-warning hover:text-warning focus:border-warning focus:text-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				base: "hover:border-danger hover:text-danger focus:border-danger focus:text-danger",
			},
		},
		{
			variant: "flat",
			color: "default",
			className: {
				base: "hover:bg-default/40 hover:text-default-foreground focus:bg-default/40 focus:text-default-foreground",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				base: "hover:bg-primary/20 hover:text-primary focus:bg-primary/20 focus:text-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				base: "hover:bg-secondary/20 hover:text-secondary focus:bg-secondary/20 focus:text-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				base: "hover:bg-success/20 hover:text-success focus:bg-success/20 focus:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				base: "hover:bg-warning/20 hover:text-warning focus:bg-warning/20 focus:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				base: "hover:bg-danger/20 hover:text-danger focus:bg-danger/20 focus:text-danger",
			},
		},
		{
			variant: "faded",
			color: "default",
			className: {
				base: "hover:text-default-foreground focus:text-default-foreground",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				base: "hover:text-primary focus:text-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				base: "hover:text-secondary focus:text-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				base: "hover:text-success focus:text-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				base: "hover:text-warning focus:text-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				base: "hover:text-danger focus:text-danger",
			},
		},
		{
			variant: "light",
			color: "default",
			className: {
				base: "hover:text-default-500 focus:text-default-500",
			},
		},
		{
			variant: "light",
			color: "primary",
			className: {
				base: "hover:text-primary focus:text-primary",
			},
		},
		{
			variant: "light",
			color: "secondary",
			className: {
				base: "hover:text-secondary focus:text-secondary",
			},
		},
		{
			variant: "light",
			color: "success",
			className: {
				base: "hover:text-success focus:text-success",
			},
		},
		{
			variant: "light",
			color: "warning",
			className: {
				base: "hover:text-warning focus:text-warning",
			},
		},
		{
			variant: "light",
			color: "danger",
			className: {
				base: "hover:text-danger focus:text-danger",
			},
		},
	],
})

export type ListBoxSectionVariantsProps = VariantProps<typeof listBoxSectionVariants> &
	VariantSlots<typeof listBoxSectionVariants>

export const listBoxSectionVariants = tv({
	slots: {
		base: "relative mb-3",
		heading: "block pl-1 pb-2 text-xs text-default-500",
		group: "w-full flex flex-col gap-1",
		divider: "mt-2",
	},
})