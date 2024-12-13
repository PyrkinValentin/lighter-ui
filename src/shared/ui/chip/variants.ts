import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type ChipVariantsProps = VariantProps<typeof chipVariants> & VariantSlots<typeof chipVariants>

export const chipVariants = tv({
	slots: {
		base: [
			"relative max-w-fit min-w-min box-border",
			"inline-flex items-center justify-between",
			"whitespace-nowrap",
		],
		content: "flex-1 text-inherit font-normal",
		dot: "w-2 h-2 ml-1 rounded-full",
		avatar: "flex-shrink-0",
		closeButton: [
			"z-10",
			"transition-opacity opacity-70 hover:opacity-100 active:opacity-70",
			"outline-none select-none cursor-pointer appearance-none",
			"rounded-full focus-visible:ring-1 focus-visible:ring-primary ring-offset-2 ring-offset-background",
		],
	},
	variants: {
		variant: {
			solid: "",
			bordered: {
				base: "border-2 bg-transparent",
			},
			light: {
				base: "bg-transparent",
			},
			flat: "",
			faded: {
				base: "border-2 border-default bg-default-100",
			},
			shadow: {
				base: "shadow-lg",
			},
			dot: {
				base: "border-2 border-default text-foreground bg-transparent",
			},
		},
		color: {
			default: {
				dot: "bg-default-400",
			},
			primary: {
				dot: "bg-primary",
			},
			secondary: {
				dot: "bg-secondary",
			},
			success: {
				dot: "bg-success",
			},
			warning: {
				dot: "bg-warning",
			},
			danger: {
				dot: "bg-danger",
			},
		},
		size: {
			sm: {
				base: "px-1 h-6 text-xs",
				content: "px-1",
				closeButton: "text-md",
				avatar: "w-4 h-4",
			},
			md: {
				base: "px-1 h-7 text-sm",
				content: "px-2",
				closeButton: "text-lg",
				avatar: "w-5 h-5",
			},
			lg: {
				base: "px-2 h-8 text-md",
				content: "px-2",
				closeButton: "text-xl",
				avatar: "w-6 h-6",
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
		hasStartContent: {
			true: "",
		},
		hasEndContent: {
			true: "",
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
		size: "md",
		rounded: "full",
	},
	compoundVariants: [
		{
			variant: "solid",
			color: "default",
			className: {
				base: "bg-default text-default-foreground",
			},
		},
		{
			variant: "solid",
			color: "primary",
			className: {
				base: "bg-primary text-primary-foreground",
			},
		},
		{
			variant: "solid",
			color: "secondary",
			className: {
				base: "bg-secondary text-secondary-foreground",
			},
		},
		{
			variant: "solid",
			color: "success",
			className: {
				base: "bg-success text-success-foreground",
			},
		},
		{
			variant: "solid",
			color: "warning",
			className: {
				base: "bg-warning text-warning-foreground",
			},
		},
		{
			variant: "solid",
			color: "danger",
			className: {
				base: "bg-danger text-danger-foreground",
			},
		},
		{
			variant: "shadow",
			color: "default",
			className: {
				base: "shadow-default/50 bg-default text-default-foreground",
			},
		},
		{
			variant: "shadow",
			color: "primary",
			className: {
				base: "shadow-primary/40 bg-primary text-primary-foreground",
			},
		},
		{
			variant: "shadow",
			color: "secondary",
			className: {
				base: "shadow-secondary/40 bg-secondary text-secondary-foreground",
			},
		},
		{
			variant: "shadow",
			color: "success",
			className: {
				base: "shadow-success/40 bg-success text-success-foreground",
			},
		},
		{
			variant: "shadow",
			color: "warning",
			className: {
				base: "shadow-warning/40 bg-warning text-warning-foreground",
			},
		},
		{
			variant: "shadow",
			color: "danger",
			className: {
				base: "shadow-danger/40 bg-danger text-danger-foreground",
			},
		},
		{
			variant: "bordered",
			color: "default",
			className: {
				base: "border-default text-foreground",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				base: "border-primary text-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				base: "border-secondary text-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				base: "border-success text-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				base: "border-warning text-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				base: "border-danger text-danger",
			},
		},
		{
			variant: "flat",
			color: "default",
			className: {
				base: "bg-default/40 text-default-700",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				base: "bg-primary/20 text-primary-700",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				base: "bg-secondary/20 text-secondary-700",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				base: "bg-success/20 text-success-800 dark:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				base: "bg-warning/20 text-warning-800 dark:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				base: "bg-danger/20 text-danger-800 dark:text-danger-500",
			},
		},
		{
			variant: "faded",
			color: "default",
			className: {
				base: "text-default-foreground",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				base: "text-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				base: "text-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				base: "text-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				base: "text-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				base: "text-danger",
			},
		},
		{
			variant: "light",
			color: "default",
			className: {
				base: "text-default-foreground",
			},
		},
		{
			variant: "light",
			color: "primary",
			className: {
				base: "text-primary",
			},
		},
		{
			variant: "light",
			color: "secondary",
			className: {
				base: "text-secondary",
			},
		},
		{
			variant: "light",
			color: "success",
			className: {
				base: "text-success",
			},
		},
		{
			variant: "light",
			color: "warning",
			className: {
				base: "text-warning",
			},
		},
		{
			variant: "light",
			color: "danger",
			className: {
				base: "text-danger",
			},
		},
		{
			hasStartContent: true,
			size: "sm",
			className: {
				content: "pl-0.5",
			},
		},
		{
			hasStartContent: true,
			size: ["md", "lg"],
			className: {
				content: "pl-1",
			},
		},
		{
			hasEndContent: true,
			size: "sm",
			className: {
				content: "pr-0.5",
			},
		},
		{
			hasEndContent: true,
			size: ["md", "lg"],
			className: {
				content: "pr-1",
			},
		},
	],
})