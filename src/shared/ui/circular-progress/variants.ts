import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type CircularProgressVariantsProps = & VariantProps<typeof circularProgressVariants>
	& VariantSlots<typeof circularProgressVariants>

export const circularProgressVariants = tv({
	slots: {
		base: "flex flex-col justify-center gap-1 max-w-fit items-center",
		svgWrapper: "relative block",
		svg: "z-0 relative overflow-hidden",
		track: "h-full stroke-default-300/50",
		indicator: "h-full stroke-current transition-[stroke-dashoffset] duration-300",
		value: "absolute font-normal inset-0 flex items-center justify-center",
		label: "",
	},
	variants: {
		color: {
			default: {
				svg: "text-default-400",
			},
			primary: {
				svg: "text-primary",
			},
			secondary: {
				svg: "text-secondary",
			},
			success: {
				svg: "text-success",
			},
			warning: {
				svg: "text-warning",
			},
			danger: {
				svg: "text-danger",
			},
		},
		size: {
			sm: {
				svg: "w-8 h-8",
				label: "text-sm",
				value: "text-[0.5rem]",
			},
			md: {
				svg: "w-10 h-10",
				label: "text-sm",
				value: "text-[0.55rem]",
			},
			lg: {
				svg: "w-12 h-12",
				label: "text-md",
				value: "text-[0.6rem]",
			},
		},
		indeterminate: {
			true: {
				svg: "animate-spin-fast",
			},
		},
		disabled: {
			true: {
				base: "opacity-70",
			},
		},
	},
	defaultVariants: {
		color: "default",
		size: "md",
	},
})