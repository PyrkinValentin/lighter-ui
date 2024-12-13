import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type SwitchVariantsProps = VariantProps<typeof switchVariants> & VariantSlots<typeof switchVariants>

export const switchVariants = tv({
	slots: {
		base: [
			"relative max-w-fit",
			"cursor-pointer touch-none select-none",
			"inline-flex items-center justify-start",
		],
		input: "peer",
		wrapper: [
			"[&:has(input:focus-visible)]:z-10 relative px-1 mr-2 overflow-hidden",
			"inline-flex items-center justify-start flex-shrink-0",
			"bg-default-200 transition-[color,background] duration-300",
			"outline-none rounded-full",
			"[&:has(input:focus-visible)]:ring-2 [&:has(input:focus-visible)]:ring-offset-2 [&:has(input:focus-visible)]:ring-offset-background",
		],
		thumb: [
			"z-10",
			"flex items-center justify-center",
			"text-black bg-white shadow-box-sm rounded-full",
			"origin-right transition-[margin] duration-300",
		],
		startContent: [
			"z-0 absolute left-1.5",
			"opacity-100 peer-[:not(:checked)]:opacity-0",
			"peer-[:not(:checked)]:-translate-x-3",
			"transition-[transform,opacity] duration-300",
		],
		endContent: [
			"z-0 absolute right-1.5",
			"text-default-600",
			"opacity-100 peer-checked:opacity-0",
			"peer-checked:translate-x-3",
			"transition-[transform,opacity] duration-300",
		],
		label: "relative text-foreground select-none",
	},
	variants: {
		color: {
			default: {
				wrapper: [
					"[&:has(input:checked)]:bg-default-400 [&:has(input:checked)]:text-default-foreground",
					"[&:has(input:focus-visible)]:ring-default-400",
				],
			},
			primary: {
				wrapper: [
					"[&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-primary-foreground",
					"[&:has(input:focus-visible)]:ring-primary",
				],
			},
			secondary: {
				wrapper: [
					"[&:has(input:checked)]:bg-secondary [&:has(input:checked)]:text-secondary-foreground",
					"[&:has(input:focus-visible)]:ring-secondary",
				],
			},
			success: {
				wrapper: [
					"[&:has(input:checked)]:bg-success [&:has(input:checked)]:text-success-foreground",
					"[&:has(input:focus-visible)]:ring-success",
				],
			},
			warning: {
				wrapper: [
					"[&:has(input:checked)]:bg-warning [&:has(input:checked)]:text-warning-foreground",
					"[&:has(input:focus-visible)]:ring-warning",
				],
			},
			danger: {
				wrapper: [
					"[&:has(input:checked)]:bg-danger [&:has(input:checked)]:text-danger-foreground",
					"[&:has(input:focus-visible)]:ring-danger",
				],
			},
		},
		size: {
			sm: {
				wrapper: "w-10 h-6 text-xs",
				thumb: "w-4 h-4 peer-checked:ml-4",
				label: "text-sm",
			},
			md: {
				wrapper: "w-12 h-7 text-sm",
				thumb: "w-5 h-5 peer-checked:ml-5",
				label: "text-md",
			},
			lg: {
				wrapper: "w-14 h-8 text-lg",
				thumb: "w-6 h-6 peer-checked:ml-6",
				label: "text-lg",
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