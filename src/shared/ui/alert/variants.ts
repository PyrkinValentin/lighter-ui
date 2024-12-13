import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type AlertVariantsProps = VariantProps<typeof alertVariants> & VariantSlots<typeof alertVariants>

export const alertVariants = tv({
	slots: {
		base: "flex flex-grow flex-row w-full items-start py-3 px-4 gap-x-3",
		wrapper: "h-full min-h-9 flex-grow flex flex-col gap-y-1 items-start justify-center box-border",
		title: "text-sm w-full font-medium block",
		message: "text-sm font-normal",
		iconWrapper: "flex-none relative w-9 h-9 rounded-full",
		icon: "absolute w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
	},
	variants: {
		variant: {
			solid: "",
			flat: {
				iconWrapper: "border",
			},
			faded: {
				base: "border",
				iconWrapper: "border",
			},
			bordered: {
				base: "border",
				iconWrapper: "border",
			},
		},
		color: {
			default: "",
			primary: "",
			secondary: "",
			success: "",
			warning: "",
			danger: "",
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
	},
	defaultVariants: {
		variant: "solid",
		color: "default",
		rounded: "md",
	},
	compoundVariants: [
		{
			variant: "solid",
			color: "default",
			className: {
				base: "bg-default text-default-foreground",
				message: "text-default-500",
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
			variant: ["flat", "faded"],
			color: "default",
			className: {
				base: "bg-default-100 dark:bg-default-50/50 text-default-700",
				iconWrapper: "bg-default-50 dark:bg-default-100 border-default-200",
				message: "text-default-500",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "primary",
			className: {
				base: "bg-primary-50 dark:bg-primary-50/50 text-primary-700",
				iconWrapper: "bg-primary-50 dark:bg-primary-100 border-primary-100",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "secondary",
			className: {
				base: "bg-secondary-50 dark:bg-secondary-50/50 text-secondary-600",
				iconWrapper: "bg-secondary-50 dark:bg-secondary-100 border-secondary-100",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "success",
			className: {
				base: "bg-success-50 dark:bg-success-50/50 text-success-700 dark:text-success",
				iconWrapper: "bg-success-50 dark:bg-success-100 border-success-100",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "warning",
			className: {
				base: "bg-warning-50 dark:bg-warning-50/50 text-warning-700 dark:text-warning",
				iconWrapper: "bg-warning-50 dark:bg-warning-100 border-warning-100",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "danger",
			className: {
				base: "bg-danger-50 dark:bg-danger-50/50 text-danger-600 dark:text-danger-500",
				iconWrapper: "bg-danger-50 dark:bg-danger-100 border-danger-100",
			},
		},
		{
			variant: "faded",
			color: "default",
			className: {
				base: "border-default-300 dark:border-default-200",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				base: "border-primary-200 dark:border-primary-100",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				base: "border-secondary-200",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				base: "border-success-300 dark:border-success-100",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				base: "border-warning-300 dark:border-warning-100",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				base: "border-danger-200 dark:border-danger-100",
			},
		},
		{
			variant: "bordered",
			color: "default",
			className: {
				base: "border-default text-foreground",
				iconWrapper: "bg-default-200 dark:bg-default-100 border-default-200",
				message: "text-default-500",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				base: "border-primary text-primary",
				iconWrapper: "bg-primary-100 dark:bg-primary-50 border-primary-100",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				base: "border-secondary text-secondary",
				iconWrapper: "bg-secondary-100 dark:bg-secondary-50 border-secondary-100",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				base: "border-success text-success",
				iconWrapper: "bg-success-100 dark:bg-success-50 border-success-100",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				base: "border-warning text-warning",
				iconWrapper: "bg-warning-100 dark:bg-warning-50 border-warning-100",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				base: "border-danger text-danger",
				iconWrapper: "bg-danger-100 dark:bg-danger-50 border-danger-100",
			},
		},
		{
			variant: ["flat", "bordered", "faded"],
			className: {
				iconWrapper: "shadow-small",
			},
		},
	],
})