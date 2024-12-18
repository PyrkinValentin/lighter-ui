import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type InputOTPVariantsProps = VariantProps<typeof inputOTPVariants> & VariantSlots<typeof inputOTPVariants>

export const inputOTPVariants = tv({
	slots: {
		base: "relative flex flex-col w-fit",
		wrapper: "group flex items-center has-[:disabled]:opacity-60",
		segmentWrapper: "py-2 inline-flex gap-x-1",
		segment: [
			"w-10 h-10",
			"flex justify-center items-center",
			"font-semibold border-default-200",
			"data-[active=true]:border-default-400 data-[active=true]:scale-110",
			"shadow-sm hover:bg-danger transition motion-reduce:transition-none",
		],
		passwordChar: "w-1 h-1 bg-default-800 rounded-full",
		caret: [
			"animate-caret-blink",
			"h-full w-full w-px h-[50%]",
			"flex justify-center items-center",
			"text-2xl font-extralight",
			"bg-foreground",
		],
		helperText: "pt-1",
	},
	variants: {
		variant: {
			flat: {
				segment: "border-transparent bg-default-100 data-[active=true]:bg-default-200",
			},
			faded: {
				segment: "bg-default-100 border-2",
			},
			bordered: {
				segment: "border-2",
			},
			underlined: {
				segment: [
					"box-border relative",
					"!rounded-none",
					"shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
					"border-b-2 border-default-200",
					"after:content-[''] after:w-0 after:origin-center after:bg-default-foreground",
					"after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[2px] after:h-[2px]",
					"data-[active=true]:border-default-300",
					"data-[active=true]:after:w-full",
					"data-[active=true]:scale-100",
					"after:transition-[width] motion-reduce:after:transition-none",
				],
			},
		},
		disabled: {
			true: {
				segment: "opacity-70 pointer-events-none",
				input: "pointer-events-none",
			},
		},
		error: {
			true: "",
		},
		readOnly: {
			true: {
				caret: "bg-transparent",
				segment: "transition-none data-[active=true]:scale-100",
			},
		},
		fullWidth: {
			true: {
				base: "w-full",
			},
		},
		rounded: {
			none: {
				segment: "rounded-none",
			},
			sm: {
				segment: "rounded-sm",
			},
			md: {
				segment: "rounded-md",
			},
			lg: {
				segment: "rounded-lg",
			},
			full: {
				segment: "rounded-full",
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
				segment: "h-8 min-h-8 w-8 min-w-8 text-sm",
			},
			md: {
				segment: "h-10 min-h-10 w-10 min-w-10 text-sm",
			},
			lg: {
				segment: "h-12 min-h-12 w-12 min-w-12 text-md",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		color: "default",
		rounded: "md",
		size: "md",
	},
	compoundVariants: [
		{
			variant: "flat",
			color: "default",
			className: {
				segment: "bg-default-100 data-[active=true]:bg-default-200",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				segment: "bg-primary-100 data-[active=true]:bg-primary-200 text-primary",
				caret: "bg-primary",
				passwordChar: "bg-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				segment: "bg-secondary-100 data-[active=true]:bg-secondary-200 text-secondary",
				caret: "bg-secondary",
				passwordChar: "bg-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				segment: "bg-success-100 data-[active=true]:bg-success-200 text-success",
				caret: "bg-success",
				passwordChar: "bg-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				segment: "bg-warning-100 data-[active=true]:bg-warning-200 text-warning",
				caret: "bg-warning",
				passwordChar: "bg-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				segment: "bg-danger-100 data-[active=true]:bg-danger-200 text-danger",
				caret: "bg-danger",
				passwordChar: "bg-danger",
			},
		},
		{
			variant: "faded",
			color: "default",
			className: {
				segment: "",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				segment: "bg-primary-100 text-primary border-primary-200 data-[active=true]:border-primary",
				caret: "bg-primary",
				passwordChar: "bg-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				segment: "bg-secondary-100 text-secondary border-secondary-200 data-[active=true]:border-secondary",
				caret: "bg-secondary",
				passwordChar: "bg-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				segment: "bg-success-100 text-success border-success-200 data-[active=true]:border-success",
				caret: "bg-success",
				passwordChar: "bg-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				segment: "bg-warning-100 text-warning border-warning-200 data-[active=true]:border-warning",
				caret: "bg-warning",
				passwordChar: "bg-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				segment: "bg-danger-100 text-danger border-danger-200 data-[active=true]:border-danger",
				caret: "bg-danger",
				passwordChar: "bg-danger",
			},
		},
		{
			variant: "bordered",
			color: "default",
			className: {
				segment: "text-default-foreground data-[active=true]:border-foreground",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				segment: "border-primary-200 text-primary data-[active=true]:border-primary",
				caret: "bg-primary",
				passwordChar: "bg-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				segment: "border-secondary-200 text-secondary data-[active=true]:border-secondary",
				caret: "bg-secondary",
				passwordChar: "bg-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				segment: "border-success-200 text-success data-[active=true]:border-success",
				caret: "bg-success",
				passwordChar: "bg-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				segment: "border-warning-200 text-warning data-[active=true]:border-warning",
				caret: "bg-warning",
				passwordChar: "bg-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				segment: "border-danger-200 text-danger data-[active=true]:border-danger",
				caret: "bg-danger",
				passwordChar: "bg-danger",
			},
		},
		{
			variant: "underlined",
			color: "default",
			className: {
				segment: "text-default-foreground after:bg-foreground",
			},
		},
		{
			variant: "underlined",
			color: "primary",
			className: {
				segment: "border-primary-200 text-primary after:bg-primary",
				caret: "bg-primary",
				passwordChar: "bg-primary",
			},
		},
		{
			variant: "underlined",
			color: "secondary",
			className: {
				segment: "border-secondary-200 text-secondary after:bg-secondary",
				caret: "bg-secondary",
				passwordChar: "bg-secondary",
			},
		},
		{
			variant: "underlined",
			color: "success",
			className: {
				segment: "border-success-200 text-success after:bg-success",
				caret: "bg-success",
				passwordChar: "bg-success",
			},
		},
		{
			variant: "underlined",
			color: "warning",
			className: {
				segment: "border-warning-200 text-warning after:bg-warning",
				caret: "bg-warning",
				passwordChar: "bg-warning",
			},
		},
		{
			variant: "underlined",
			color: "danger",
			className: {
				segment: "border-danger-200 text-danger after:bg-danger",
				caret: "bg-danger",
				passwordChar: "bg-danger",
			},
		},
		{
			variant: "flat",
			error: true,
			className: {
				segment: "bg-danger-50 data-[active=true]:bg-danger-100 text-danger",
				caret: "bg-danger",
			},
		},
		{
			variant: "faded",
			error: true,
			className: {
				segment: "bg-danger-50 text-danger border-danger-200 data-[active=true]:border-danger-400",
				caret: "bg-danger",
			},
		},
		{
			variant: "bordered",
			error: true,
			className: {
				segment: "border-danger-200 text-danger data-[active=true]:border-danger-400",
				caret: "bg-danger",
			},
		},
		{
			variant: "underlined",
			error: true,
			className: {
				segment: "border-danger-200 text-danger data-[active=true]:after:bg-danger-400",
				caret: "bg-danger",
			},
		},
	],
})