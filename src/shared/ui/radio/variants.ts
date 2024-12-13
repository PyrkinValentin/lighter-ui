import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type RadioVariantsProps = VariantProps<typeof radioVariants> & VariantSlots<typeof radioVariants>

export const radioVariants = tv({
	slots: {
		base: [
			"relative p-2 -m-2 max-w-fit",
			"inline-flex items-center justify-start",
			"cursor-pointer select-none",
		],
		wrapper: [
			"overflow-hidden relative [&:has(input:focus-visible)]:z-10",
			"inline-flex items-center justify-center flex-shrink-0",
			"border-solid border-2 box-border border-default rounded-full",
			"outline-none",
			"[&:has(input:focus-visible)]:ring-offset-background [&:has(input:focus-visible)]:ring-2 [&:has(input:focus-visible)]:ring-offset-2",
			"transition-[background-color,border,color,transform] duration-300 motion-reduce:transition-none",
			"[&:has(input:hover)]:bg-default-100 [&:has(input:active)]:scale-[0.97]",
		],
		input: "peer",
		thumb: [
			"z-10",
			"origin-center rounded-full",
			"opacity-0 scale-0 transition-[transform,opacity,background-color] duration-300 motion-reduce:transition-none",
			"peer-checked:opacity-100 peer-checked:scale-100",
		],
		label: "ml-2 relative text-foreground select-none transition-colors duration-300 motion-reduce:transition-none",
	},
	variants: {
		color: {
			default: {
				wrapper: "[&:has(input:focus-visible)]:ring-default-400 [&:has(input:checked)]:border-default-400",
				thumb: "bg-default-400",
			},
			primary: {
				wrapper: "[&:has(input:focus-visible)]:ring-primary [&:has(input:checked)]:border-primary",
				thumb: "bg-primary",
			},
			secondary: {
				wrapper: "[&:has(input:focus-visible)]:ring-secondary [&:has(input:checked)]:border-secondary",
				thumb: "bg-secondary",
			},
			success: {
				wrapper: "[&:has(input:focus-visible)]:ring-success [&:has(input:checked)]:border-success",
				thumb: "bg-success",
			},
			warning: {
				wrapper: "[&:has(input:focus-visible)]:ring-warning [&:has(input:checked)]:border-warning",
				thumb: "bg-warning",
			},
			danger: {
				wrapper: "[&:has(input:focus-visible)]:ring-danger [&:has(input:checked)]:border-danger",
				thumb: "bg-danger",
			},
		},
		size: {
			sm: {
				wrapper: "w-4 h-4",
				thumb: "w-1.5 h-1.5",
				label: "text-sm",
			},
			md: {
				wrapper: "w-5 h-5",
				thumb: "w-2 h-2",
				label: "text-md",
			},
			lg: {
				wrapper: "w-6 h-6",
				thumb: "w-2.5 h-2.5",
				label: "text-lg",
			},
		},
		error: {
			true: {
				wrapper: "border-danger [&:has(input:checked)]:border-danger",
				thumb: "bg-danger",
				label: "text-danger",
			},
		},
		readOnly: {
			true: {
				base: "pointer-events-none",
			},
		},
		disabled: {
			true: {
				base: "opacity-70 pointer-events-none",
			},
		},
	},
	defaultVariants: {
		color: "default",
		size: "md",
	},
})