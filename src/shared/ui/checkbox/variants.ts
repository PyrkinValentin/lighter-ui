import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type CheckboxVariantsProps = VariantProps<typeof checkboxVariants> & VariantSlots<typeof checkboxVariants>

export const checkboxVariants = tv({
	slots: {
		base: [
			"group relative p-2 -m-2 max-w-fit",
			"inline-flex items-center justify-start",
			"cursor-pointer select-none",
		],
		wrapper: [
			"overflow-hidden relative [&:has(input:focus-visible)]:z-10 mr-2",
			"inline-flex items-center justify-center flex-shrink-0",
			"outline-none",
			"before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border before:border-default",
			"after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center",
			"[&:has(input:checked)]:after:scale-100 [&:has(input:checked)]:after:opacity-100",
			"[&:has(input:hover)]:before:bg-default-100",
			"[&:has(input:focus-visible)]:ring-2 [&:has(input:focus-visible)]:ring-offset-2 [&:has(input:focus-visible)]:ring-offset-background",
			"before:transition-colors [&:has(input:active)]:scale-95 transition-transform after:transition-transform-opacity",
			"after:!ease-linear after:!duration-200 motion-reduce:transition-none",
		],
		input: "peer",
		icon: [
			"z-10",
			"opacity-0 peer-checked:opacity-100",
			"peer-checked:transition-opacity peer-checked:duration-200",
			"motion-reduce:transition-none",
		],
		label: [
			"relative select-none",
			"text-foreground transition-[colors,opacity] before:transition-width motion-reduce:transition-none",
		],
	},
	variants: {
		color: {
			default: {
				wrapper: [
					"[&:has(input:focus-visible)]:ring-default text-default-foreground",
					"after:bg-default after:text-default-foreground text-default-foreground",
				],
			},
			primary: {
				wrapper: [
					"[&:has(input:focus-visible)]:ring-primary text-primary-foreground",
					"after:bg-primary after:text-primary-foreground text-primary-foreground",
				],
			},
			secondary: {
				wrapper: [
					"[&:has(input:focus-visible)]:ring-secondary text-secondary-foreground",
					"after:bg-secondary after:text-secondary-foreground text-secondary-foreground",
				],
			},
			success: {
				wrapper: [
					"[&:has(input:focus-visible)]:ring-success text-success-foreground",
					"after:bg-success after:text-success-foreground text-success-foreground",
				],
			},
			warning: {
				wrapper: [
					"[&:has(input:focus-visible)]:ring-warning text-warning-foreground",
					"after:bg-warning after:text-warning-foreground text-warning-foreground",
				],
			},
			danger: {
				wrapper: [
					"[&:has(input:focus-visible)]:ring-danger text-danger-foreground",
					"after:bg-danger after:text-danger-foreground text-danger-foreground",
				],
			},
		},
		size: {
			sm: {
				wrapper: [
					"w-4 h-4",
					"rounded-[calc(theme(borderRadius.medium)*0.5)]",
					"before:rounded-[calc(theme(borderRadius.medium)*0.5)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.5)]",
				],
				icon: "w-3 h-2",
				label: "text-sm",
			},
			md: {
				wrapper: [
					"w-5 h-5",
					"rounded-[calc(theme(borderRadius.medium)*0.6)]",
					"before:rounded-[calc(theme(borderRadius.medium)*0.6)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.6)]",
				],
				icon: "w-4 h-3",
				label: "text-md",
			},
			lg: {
				wrapper: [
					"w-6 h-6",
					"rounded-[calc(theme(borderRadius.medium)*0.7)]",
					"before:rounded-[calc(theme(borderRadius.medium)*0.7)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.7)]",
				],
				icon: "w-5 h-4",
				label: "text-lg",
			},
		},
		rounded: {
			none: {
				wrapper: "rounded-none before:rounded-none after:rounded-none",
			},
			sm: {
				wrapper: [
					"rounded-[calc(theme(borderRadius.medium)*0.5)]",
					"before:rounded-[calc(theme(borderRadius.medium)*0.5)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.5)]",
				],
			},
			md: {
				wrapper: [
					"rounded-[calc(theme(borderRadius.medium)*0.6)]",
					"before:rounded-[calc(theme(borderRadius.medium)*0.6)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.6)]",
				],
			},
			lg: {
				wrapper: [
					"rounded-[calc(theme(borderRadius.medium)*0.7)]",
					"before:rounded-[calc(theme(borderRadius.medium)*0.7)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.7)]",
				],
			},
			full: {
				wrapper: "rounded-full before:rounded-full after:rounded-full",
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
		error: {
			true: {
				wrapper: "before:border-danger",
				label: "text-danger",
			},
		},
		hasIcon: {
			false: {
				icon: [
					"[stroke-dashoffset:66] peer-checked:transition-[stroke-dashoffset] peer-checked:[stroke-dashoffset:44]",
					" peer-checked:duration-200 peer-checked:delay-200",
				],
			},
		},
	},
	defaultVariants: {
		color: "default",
		size: "md",
		rounded: "md",
	},
})