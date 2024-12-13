import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type ButtonVariantsProps = VariantProps<typeof buttonVariants> & VariantSlots<typeof buttonVariants>

export const buttonVariants = tv({
	slots: {
		base: [
			"z-0 relative box-border min-w-max overflow-hidden inline-flex items-center justify-center",
			"appearance-none outline-none select-none",
			"active:scale-[0.97]",
			"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
			"transition motion-reduce:transition-none",
		],
		wrapper: "flex items-center justify-center whitespace-nowrap font-normal subpixel-antialiased",
		spinnerBase: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
		spinner: "border-current",
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
			ghost: {
				base: "border-2 bg-transparent",
			},
		},
		size: {
			sm: {
				base: "px-3 min-w-16 h-8 text-sm rounded-small",
				wrapper: "gap-2",
			},
			md: {
				base: "px-4 min-w-20 h-10 text-md rounded-medium",
				wrapper: "gap-2",
			},
			lg: {
				base: "px-6 min-w-24 h-12 text-lg rounded-large",
				wrapper: "gap-3",
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
		fullWidth: {
			true: {
				base: "w-full",
			},
		},
		loading: {
			true: {
				base: "opacity-70 pointer-events-none",
				wrapper: "invisible",
			},
		},
		disabled: {
			true: {
				base: "opacity-70 pointer-events-none",
			},
		},
		inGroup: {
			true: {
				base: "[&:not(:first-child):not(:last-child)]:rounded-none",
			},
		},
		iconOnly: {
			true: {
				base: "px-0",
				wrapper: "gap-0",
			},
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
		color: "default",
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
			}
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
				base: "text-default-foreground hover:bg-default/40",
			},
		},
		{
			variant: "light",
			color: "primary",
			className: {
				base: "text-primary hover:bg-primary/20",
			},
		},
		{
			variant: "light",
			color: "secondary",
			className: {
				base: "text-secondary hover:bg-secondary/20",
			},
		},
		{
			variant: "light",
			color: "success",
			className: {
				base: "text-success hover:bg-success/20",
			},
		},
		{
			variant: "light",
			color: "warning",
			className: {
				base: "text-warning hover:bg-warning/20",
			},
		},
		{
			variant: "light",
			color: "danger",
			className: {
				base: "text-danger hover:bg-danger/20",
			},
		},
		{
			variant: "ghost",
			color: "default",
			className: {
				base: "border-default text-default-foreground hover:!bg-default",
			},
		},
		{
			variant: "ghost",
			color: "primary",
			className: {
				base: "border-primary text-primary hover:!bg-primary hover:!text-primary-foreground",
			},
		},
		{
			variant: "ghost",
			color: "secondary",
			className: {
				base: "border-secondary text-secondary hover:!bg-secondary hover:!text-secondary-foreground",
			},
		},
		{
			variant: "ghost",
			color: "success",
			className: {
				base: "border-success text-success hover:!bg-success hover:!text-success-foreground",
			},
		},
		{
			variant: "ghost",
			color: "warning",
			className: {
				base: "border-warning text-warning hover:!bg-warning hover:!text-warning-foreground",
			},
		},
		{
			variant: "ghost",
			color: "danger",
			className: {
				base: "border-danger text-danger hover:!bg-danger hover:!text-danger-foreground",
			},
		},
		{
			inGroup: true,
			className: {
				base: "rounded-none first:rounded-s-medium last:rounded-e-medium",
			},
		},
		{
			inGroup: true,
			size: "sm",
			className: {
				base: "rounded-none first:rounded-s-small last:rounded-e-small",
			},
		},
		{
			inGroup: true,
			size: "md",
			className: {
				base: "rounded-none first:rounded-s-medium last:rounded-e-medium",
			},
		},
		{
			inGroup: true,
			size: "lg",
			className: {
				base: "rounded-none first:rounded-s-large last:rounded-e-large",
			},
		},
		{
			inGroup: true,
			rounded: "none",
			className: {
				base: "rounded-none first:rounded-s-none last:rounded-e-none",
			},
		},
		{
			inGroup: true,
			rounded: "sm",
			className: {
				base: "rounded-none first:rounded-s-small last:rounded-e-small",
			},
		},
		{
			inGroup: true,
			rounded: "md",
			className: {
				base: "rounded-none first:rounded-s-medium last:rounded-e-medium",
			},
		},
		{
			inGroup: true,
			rounded: "lg",
			className: {
				base: "rounded-none first:rounded-s-large last:rounded-e-large",
			},
		},
		{
			inGroup: true,
			rounded: "full",
			className: {
				base: "rounded-none first:rounded-s-full last:rounded-e-full",
			},
		},
		{
			inGroup: true,
			variant: ["ghost", "bordered"],
			color: "default",
			className: {
				base: "[&+.border-2.border-default]:ms-[calc(theme(borderWidth.2)*-1)]",
			},
		},
		{
			inGroup: true,
			variant: ["ghost", "bordered"],
			color: "primary",
			className: {
				base: "[&+.border-2.border-primary]:ms-[calc(theme(borderWidth.2)*-1)]",
			},
		},
		{
			inGroup: true,
			variant: ["ghost", "bordered"],
			color: "secondary",
			className: {
				base: "[&+.border-2.border-secondary]:ms-[calc(theme(borderWidth.2)*-1)]",
			},
		},
		{
			inGroup: true,
			variant: ["ghost", "bordered"],
			color: "success",
			className: {
				base: "[&+.border-2.border-success]:ms-[calc(theme(borderWidth.2)*-1)]",
			},
		},
		{
			inGroup: true,
			variant: ["ghost", "bordered"],
			color: "warning",
			className: {
				base: "[&+.border-2.border-warning]:ms-[calc(theme(borderWidth.2)*-1)]",
			},
		},
		{
			inGroup: true,
			variant: ["ghost", "bordered"],
			color: "danger",
			className: {
				base: "[&+.border-2.border-danger]:ms-[calc(theme(borderWidth.2)*-1)]",
			},
		},
		{
			iconOnly: true,
			size: "sm",
			className: {
				base: "min-w-8 w-8 h-8",
			},
		},
		{
			iconOnly: true,
			size: "md",
			className: {
				base: "min-w-10 w-10 h-10",
			},
		},
		{
			iconOnly: true,
			size: "lg",
			className: {
				base: "min-w-12 w-12 h-12",
			},
		},
		{
			variant: ["solid", "faded", "flat", "bordered", "shadow"],
			className: {
				base: "hover:opacity-90",
			},
		},
	],
})