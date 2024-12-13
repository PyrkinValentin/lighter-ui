import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type TextareaVariantsProps = VariantProps<typeof textareaVariants> & VariantSlots<typeof textareaVariants>

export const textareaVariants = tv({
	slots: {
		base: "flex",
		wrapper: "flex flex-col",
		label: "",
		textareaWrapper: [
			"relative w-full inline-flex flex-row items-center shadow-sm",
			"transition-colors motion-reduce:transition-none cursor-text",
		],
		textarea: [
			"w-full font-normal bg-transparent !outline-none focus-visible:outline-none",
			"file:cursor-pointer file:bg-transparent file:border-0 autofill:bg-transparent bg-clip-text",
		],
		helperText: "pt-1 px-1",
	},
	variants: {
		variant: {
			flat: "",
			faded: {
				textareaWrapper: "bg-default-100 border-2 border-default-200",
				textarea: "placeholder:text-default-500",
			},
			bordered: {
				textareaWrapper: "border-2 border-default-200 hover:border-default-400",
				textarea: "placeholder:text-default-500",
			},
			underlined: {
				label: "text-foreground",
				textareaWrapper: [
					"box-border border-b-2 border-default-200",
					"shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
					"!rounded-none",
					"hover:border-default-300",
					"after:content-[''] after:w-0 after:origin-center after:absolute",
					"after:left-1/2 after:-translate-x-1/2 after:-bottom-[2px] after:h-[2px]",
					"[&:has(textarea:focus)]:after:w-full after:transition-[width]",
				],
				textarea: "placeholder:text-default-500",
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
				textareaWrapper: "min-h-12 p-2 gap-2 rounded-small text-sm",
			},
			md: {
				label: "text-sm",
				textareaWrapper: "min-h-14 p-3 gap-3 rounded-medium text-sm",
			},
			lg: {
				label: "text-md",
				textareaWrapper: "min-h-16 p-4 gap-3 rounded-large text-md",
			},
		},
		rounded: {
			none: {
				textareaWrapper: "rounded-none",
			},
			sm: {
				textareaWrapper: "rounded-small",
			},
			md: {
				textareaWrapper: "rounded-medium",
			},
			lg: {
				textareaWrapper: "rounded-large",
			},
			full: {
				textareaWrapper: "rounded-full",
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
				textareaWrapper: "pointer-events-none",
			},
		},
		error: {
			true: {
				label: "!text-danger",
				textareaWrapper: "!text-danger",
				textarea: "placeholder:!text-default-500",
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
				textareaWrapper: "bg-default-100 hover:bg-default-200 text-foreground [&:has(textarea:focus)]:bg-default-100",
				textarea: "placeholder:text-default-500",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				label: "text-primary",
				textareaWrapper: "bg-primary-50 hover:bg-primary-100 text-primary [&:has(textarea:focus)]:bg-primary-50",
				textarea: "placeholder:text-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				label: "text-secondary",
				textareaWrapper: "bg-secondary-50 hover:bg-secondary-100 text-secondary [&:has(textarea:focus)]:bg-secondary-50",
				textarea: "placeholder:text-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				label: "text-success-600 dark:text-success",
				textareaWrapper: "bg-success-50 hover:bg-success-100 text-success-600 dark:text-success [&:has(textarea:focus)]:bg-success-50",
				textarea: "placeholder:text-success-600 dark:placeholder:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				label: "text-warning-600 dark:text-warning",
				textareaWrapper: "bg-warning-50 hover:bg-warning-100 text-warning-600 dark:text-warning [&:has(textarea:focus)]:bg-warning-50",
				textarea: "placeholder:text-warning-600 dark:placeholder:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				label: "text-danger dark:text-danger-500",
				textareaWrapper: "bg-danger-50 hover:bg-danger-100 text-danger dark:text-danger-500 [&:has(textarea:focus)]:bg-danger-50",
				textarea: "placeholder:text-danger dark:placeholder:text-danger-500",
			},
		},
		{
			variant: "faded",
			color: "default",
			className: {
				label: "text-foreground",
				textareaWrapper: "hover:border-default-400 focus-within:border-default-400",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				label: "text-primary",
				textareaWrapper: "hover:border-primary focus-within:border-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				label: "text-secondary",
				textareaWrapper: "hover:border-secondary focus-within:border-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				label: "text-success",
				textareaWrapper: "hover:border-success focus-within:border-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				label: "text-warning",
				textareaWrapper: "hover:border-warning focus-within:border-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				label: "text-danger",
				textareaWrapper: "hover:border-danger focus-within:border-danger",
			},
		},
		{
			variant: "bordered",
			color: "default",
			className: {
				label: "text-foreground",
				textareaWrapper: "[&:has(textarea:focus)]:border-default-foreground",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				label: "text-primary",
				textareaWrapper: "[&:has(textarea:focus)]:border-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				label: "text-secondary",
				textareaWrapper: "[&:has(textarea:focus)]:border-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				label: "text-success",
				textareaWrapper: "[&:has(textarea:focus)]:border-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				label: "text-warning",
				textareaWrapper: "[&:has(textarea:focus)]:border-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				label: "text-danger",
				textareaWrapper: "[&:has(textarea:focus)]:border-danger",
			},
		},
		{
			variant: "underlined",
			className: {
				label: "pb-0",
				textareaWrapper: "px-0",
				helperText: "px-0"
			},
		},
		{
			variant: "underlined",
			color: "default",
			className: {
				label: "text-foreground",
				textareaWrapper: "after:bg-default-foreground",
			},
		},
		{
			variant: "underlined",
			color: "primary",
			className: {
				label: "text-primary",
				textareaWrapper: "after:bg-primary",
			},
		},
		{
			variant: "underlined",
			color: "secondary",
			className: {
				textareaWrapper: "after:bg-secondary",
				label: "text-secondary",
			},
		},
		{
			variant: "underlined",
			color: "success",
			className: {
				textareaWrapper: "after:bg-success",
				label: "text-success",
			},
		},
		{
			variant: "underlined",
			color: "warning",
			className: {
				textareaWrapper: "after:bg-warning",
				label: "text-warning",
			},
		},
		{
			variant: "underlined",
			color: "danger",
			className: {
				textareaWrapper: "after:bg-danger",
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
				textareaWrapper: "px-3",
			},
		},
		{
			rounded: "full",
			size: "md",
			className: {
				textareaWrapper: "px-4",
			},
		},
		{
			rounded: "full",
			size: "lg",
			className: {
				textareaWrapper: "px-5",
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
				textareaWrapper: "bg-danger-50 hover:bg-danger-100 [&:has(textarea:focus)]:bg-danger-50",
			},
		},
		{
			error: true,
			variant: "faded",
			className: {
				textareaWrapper: "hover:border-danger focus-within:border-danger",
			},
		},
		{
			error: true,
			variant: "bordered",
			className: {
				textareaWrapper: "border-danger hover:border-danger [&:has(textarea:focus)]:border-danger",
			},
		},
		{
			error: true,
			variant: "underlined",
			className: {
				textareaWrapper: "after:bg-danger",
			},
		},
	],
})