import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type LinearProgressVariantsProps = VariantProps<typeof linearProgressVariants>
	& VariantSlots<typeof linearProgressVariants>

export const linearProgressVariants = tv({
	slots: {
		base: "flex flex-col gap-2 w-full",
		labelWrapper: "flex justify-between",
		label: "",
		value: "",
		track: "z-0 relative bg-default-300/50 overflow-hidden",
		indicator: "h-full",
	},
	variants: {
		color: {
			default: {
				indicator: "bg-default-400",
			},
			primary: {
				indicator: "bg-primary",
			},
			secondary: {
				indicator: "bg-secondary",
			},
			success: {
				indicator: "bg-success",
			},
			warning: {
				indicator: "bg-warning",
			},
			danger: {
				indicator: "bg-danger",
			},
		},
		size: {
			sm: {
				label: "text-sm",
				value: "text-sm",
				track: "h-1",
			},
			md: {
				label: "text-md",
				value: "text-md",
				track: "h-3",
			},
			lg: {
				label: "text-lg",
				value: "text-lg",
				track: "h-5",
			},
		},
		rounded: {
			none: {
				track: "rounded-none",
				indicator: "rounded-none",
			},
			sm: {
				track: "rounded-small",
				indicator: "rounded-small",
			},
			md: {
				track: "rounded-medium",
				indicator: "rounded-medium",
			},
			lg: {
				track: "rounded-large",
				indicator: "rounded-large",
			},
			full: {
				track: "rounded-full",
				indicator: "rounded-full",
			},
		},
		indeterminate: {
			true: {
				indicator: "absolute w-full origin-left animate-indeterminate-track",
			},
			false: {
				indicator: "transition-transform duration-500",
			},
		},
		striped: {
			true: {
				indicator: "bg-[length:1.25rem_1.25rem]",
			},
		},
		disabled: {
			true: {
				base: "opacity-70 cursor-not-allowed",
			},
		},
	},
	defaultVariants: {
		color: "default",
		size: "md",
		rounded: "full",
		indeterminate: false,
	},
	compoundVariants: [
		{
			striped: true,
			color: "default",
			className: {
				indicator: "bg-stripe-gradient-default",
			},
		},
		{
			striped: true,
			color: "primary",
			className: {
				indicator: "bg-stripe-gradient-primary",
			},
		},
		{
			striped: true,
			color: "secondary",
			className: {
				indicator: "bg-stripe-gradient-secondary",
			},
		},
		{
			striped: true,
			color: "success",
			className: {
				indicator: "bg-stripe-gradient-success",
			},
		},
		{
			striped: true,
			color: "warning",
			className: {
				indicator: "bg-stripe-gradient-warning",
			},
		},
		{
			striped: true,
			color: "danger",
			className: {
				indicator: "bg-stripe-gradient-danger",
			},
		},
	],
})