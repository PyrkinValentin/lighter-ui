import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type AvatarVariantsProps = VariantProps<typeof avatarVariants> & VariantSlots<typeof avatarVariants>

export const avatarVariants = tv({
	slots: {
		base: [
			"z-0 relative overflow-hidden box-border flex justify-center items-center align-middle text-white",
			"outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
		],
		img: "w-full h-full flex object-cover transition-opacity duration-500",
		fallback: "flex items-center justify-center",
		name: "text-center",
		icon: "w-full h-full flex items-center justify-center",
	},
	variants: {
		size: {
			sm: {
				base: "w-8 h-8 text-xs",
				icon: "text-lg",
			},
			md: {
				base: "w-10 h-10 text-xs",
				icon: "text-xl",
			},
			lg: {
				base: "w-14 h-14 text-sm",
				icon: "text-2xl",
			},
		},
		color: {
			default: {
				base: "bg-default text-default-foreground focus-visible:outline-default",
			},
			primary: {
				base: "bg-primary text-primary-foreground focus-visible:outline-primary",
			},
			secondary: {
				base: "bg-secondary text-secondary-foreground focus-visible:outline-secondary",
			},
			success: {
				base: "bg-success text-success-foreground focus-visible:outline-success",
			},
			warning: {
				base: "bg-warning text-warning-foreground focus-visible:outline-warning",
			},
			danger: {
				base: "bg-danger text-danger-foreground focus-visible:outline-danger",
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
		loading: {
			true: {
				img: "opacity-0",
			},
			false: {
				img: "opacity-100",
			},
		},
		bordered: {
			true: {
				base: "ring-2 ring-offset-2 ring-offset-background",
			},
		},
		disabled: {
			true: {
				base: "opacity-70 pointer-events-none",
			},
		},
		inGroup: {
			true: {
				base: "-ms-2",
			},
		},
		inGroupGrid: {
			true: {
				base: "m-0",
			},
		},
	},
	defaultVariants: {
		size: "md",
		color: "default",
		rounded: "full",
	},
	compoundVariants: [
		{
			inGroup: true,
			inGroupGrid: false,
			className: "hover:-translate-x-3 transition-transform duration-300 focus-visible:-translate-x-3",
		},
		{
			color: "default",
			bordered: true,
			className: {
				base: "ring-default",
			},
		},
		{
			color: "primary",
			bordered: true,
			className: {
				base: "ring-primary",
			},
		},
		{
			color: "secondary",
			bordered: true,
			className: {
				base: "ring-secondary",
			},
		},
		{
			color: "success",
			bordered: true,
			className: {
				base: "ring-success",
			},
		},
		{
			color: "warning",
			bordered: true,
			className: {
				base: "ring-warning",
			},
		},
		{
			color: "danger",
			bordered: true,
			className: {
				base: "ring-danger",
			},
		},
	],
	compoundSlots: [
		{
			slots: ["fallback", "name", "icon"],
			className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
		},
	],
})