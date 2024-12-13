import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type InputVariantsProps = VariantProps<typeof inputVariants> & VariantSlots<typeof inputVariants>

export const inputVariants = tv({
	slots: {
		base: "flex",
		wrapper: "flex flex-col",
		label: "",
		inputWrapper: [
			"relative w-full inline-flex flex-row items-center shadow-sm",
			"transition-colors motion-reduce:transition-none cursor-text",
		],
		input: [
			"w-full h-full font-normal bg-transparent !outline-none focus-visible:outline-none",
			"file:cursor-pointer file:bg-transparent file:border-0 autofill:bg-transparent bg-clip-text",
		],
		helperText: "pt-1 px-1",
	},
	variants: {
		variant: {
			flat: "",
			faded: {
				inputWrapper: "bg-default-100 border-2 border-default-200",
				input: "placeholder:text-default-500",
			},
			bordered: {
				inputWrapper: "border-2 border-default-200 hover:border-default-400",
				input: "placeholder:text-default-500",
			},
			underlined: {
				label: "text-foreground",
				inputWrapper: [
					"box-border border-b-2 border-default-200",
					"shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
					"!rounded-none",
					"hover:border-default-300",
					"after:content-[''] after:w-0 after:origin-center after:absolute",
					"after:left-1/2 after:-translate-x-1/2 after:-bottom-[2px] after:h-[2px]",
					"[&:has(input:focus)]:after:w-full after:transition-[width]",
				],
				input: "placeholder:text-default-500",
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
		size: {
			sm: {
				label: "text-xs",
				inputWrapper: "h-8 min-h-8 px-2 gap-2 rounded-small text-sm",
			},
			md: {
				label: "text-sm",
				inputWrapper: "h-10 min-h-10 px-3 gap-3 rounded-medium text-sm",
			},
			lg: {
				label: "text-md",
				inputWrapper: "h-12 min-h-12 px-4 gap-3 rounded-large text-md",
			},
		},
		rounded: {
			none: {
				inputWrapper: "rounded-none",
			},
			sm: {
				inputWrapper: "rounded-small",
			},
			md: {
				inputWrapper: "rounded-medium",
			},
			lg: {
				inputWrapper: "rounded-large",
			},
			full: {
				inputWrapper: "rounded-full",
			},
		},
		fullWidth: {
			true: {
				base: "w-full",
			},
		},
		disabled: {
			true: {
				base: "opacity-70 pointer-events-none",
				label: "pointer-events-none",
				inputWrapper: "pointer-events-none",
			},
		},
		error: {
			true: {
				label: "!text-danger",
				inputWrapper: "!text-danger",
				input: "placeholder:!text-default-500",
			},
		},
		required: {
			true: {
				label: "after:content-['*'] after:text-danger after:ml-0.5",
			},
		},
		labelPlacement: {
			start: {
				label: "shrink-0",
			},
			top: {
				base: "flex-col",
				label: "pb-2",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		color: "default",
		size: "md",
		fullWidth: true,
		labelPlacement: "top",
	},
	compoundVariants: [
		{
			variant: "flat",
			color: "default",
			className: {
				label: "text-foreground",
				inputWrapper: "bg-default-100 hover:bg-default-200 text-foreground [&:has(input:focus)]:bg-default-100",
				input: "placeholder:text-default-500",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				label: "text-primary",
				inputWrapper: "bg-primary-50 hover:bg-primary-100 text-primary [&:has(input:focus)]:bg-primary-50",
				input: "placeholder:text-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				label: "text-secondary",
				inputWrapper: "bg-secondary-50 hover:bg-secondary-100 text-secondary [&:has(input:focus)]:bg-secondary-50",
				input: "placeholder:text-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				label: "text-success-600 dark:text-success",
				inputWrapper: "bg-success-50 hover:bg-success-100 text-success-600 dark:text-success [&:has(input:focus)]:bg-success-50",
				input: "placeholder:text-success-600 dark:placeholder:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				label: "text-warning-600 dark:text-warning",
				inputWrapper: "bg-warning-50 hover:bg-warning-100 text-warning-600 dark:text-warning [&:has(input:focus)]:bg-warning-50",
				input: "placeholder:text-warning-600 dark:placeholder:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				label: "text-danger dark:text-danger-500",
				inputWrapper: "bg-danger-50 hover:bg-danger-100 text-danger dark:text-danger-500 [&:has(input:focus)]:bg-danger-50",
				input: "placeholder:text-danger dark:placeholder:text-danger-500",
			},
		},
		{
			variant: "faded",
			color: "default",
			className: {
				label: "text-foreground",
				inputWrapper: "hover:border-default-400 focus-within:border-default-400",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				label: "text-primary",
				inputWrapper: "hover:border-primary focus-within:border-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				label: "text-secondary",
				inputWrapper: "hover:border-secondary focus-within:border-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				label: "text-success",
				inputWrapper: "hover:border-success focus-within:border-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				label: "text-warning",
				inputWrapper: "hover:border-warning focus-within:border-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				label: "text-danger",
				inputWrapper: "hover:border-danger focus-within:border-danger",
			},
		},
		{
			variant: "bordered",
			color: "default",
			className: {
				label: "text-foreground",
				inputWrapper: "[&:has(input:focus)]:border-default-foreground",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				label: "text-primary",
				inputWrapper: "[&:has(input:focus)]:border-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				label: "text-secondary",
				inputWrapper: "[&:has(input:focus)]:border-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				label: "text-success",
				inputWrapper: "[&:has(input:focus)]:border-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				label: "text-warning",
				inputWrapper: "[&:has(input:focus)]:border-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				label: "text-danger",
				inputWrapper: "[&:has(input:focus)]:border-danger",
			},
		},
		{
			variant: "underlined",
			className: {
				label: "pb-0",
				inputWrapper: "px-0",
				helperText: "px-0"
			},
		},
		{
			variant: "underlined",
			color: "default",
			className: {
				label: "text-foreground",
				inputWrapper: "after:bg-default-foreground",
			},
		},
		{
			variant: "underlined",
			color: "primary",
			className: {
				label: "text-primary",
				inputWrapper: "after:bg-primary",
			},
		},
		{
			variant: "underlined",
			color: "secondary",
			className: {
				inputWrapper: "after:bg-secondary",
				label: "text-secondary",
			},
		},
		{
			variant: "underlined",
			color: "success",
			className: {
				inputWrapper: "after:bg-success",
				label: "text-success",
			},
		},
		{
			variant: "underlined",
			color: "warning",
			className: {
				inputWrapper: "after:bg-warning",
				label: "text-warning",
			},
		},
		{
			variant: "underlined",
			color: "danger",
			className: {
				inputWrapper: "after:bg-danger",
				label: "text-danger",
			},
		},
		{
			labelPlacement: "start",
			size: "sm",
			className: {
				label: "px-2 pt-[calc(theme(fontSize.xs)/2_+_2px)]",
			},
		},
		{
			labelPlacement: "start",
			size: "md",
			className: {
				label: "px-3 pt-[calc(theme(fontSize.sm)/2_+_2px)]",
			},
		},
		{
			labelPlacement: "start",
			size: "lg",
			className: {
				label: "px-3 pt-[calc(theme(fontSize.sm)/2_+_4px)]",
			},
		},
		{
			rounded: "full",
			size: "sm",
			className: {
				inputWrapper: "px-3",
			},
		},
		{
			rounded: "full",
			size: "md",
			className: {
				inputWrapper: "px-4",
			},
		},
		{
			rounded: "full",
			size: "lg",
			className: {
				inputWrapper: "px-5",
			},
		},
		{
			variant: "underlined",
			size: "sm",
			className: {
				helperText: "pt-1",
			},
		},
		{
			variant: "underlined",
			size: ["md", "lg"],
			className: {
				helperText: "pt-2",
			},
		},
		{
			labelPlacement: "start",
			className: {
				label: "max-w-full truncate",
			},
		},
		{
			error: true,
			variant: "flat",
			className: {
				inputWrapper: "bg-danger-50 hover:bg-danger-100 [&:has(input:focus)]:bg-danger-50",
			},
		},
		{
			error: true,
			variant: "faded",
			className: {
				inputWrapper: "hover:border-danger focus-within:border-danger",
			},
		},
		{
			error: true,
			variant: "bordered",
			className: {
				inputWrapper: "border-danger hover:border-danger [&:has(input:focus)]:border-danger",
			},
		},
		{
			error: true,
			variant: "underlined",
			className: {
				inputWrapper: "after:bg-danger",
			},
		},
	],
})