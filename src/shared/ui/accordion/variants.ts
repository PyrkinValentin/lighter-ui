import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type AccordionVariantsProps = VariantProps<typeof accordionVariants>

export const accordionVariants = tv({
	base: "",
	variants: {
		variant: {
			light: "",
			shadow: "px-4 shadow-box-md rounded-medium bg-content1",
			bordered: "px-4 border-2 border-divider rounded-medium",
			splitted: "flex flex-col gap-2",
		},
		fullWidth: {
			true: "w-full",
		},
	},
	defaultVariants: {
		variant: "light",
		fullWidth: true,
	},
	compoundVariants: [
		{
			variant: ["light", "shadow", "bordered"],
			className: "[&>:not(:last-child)]:border-b [&>:not(:last-child)]:border-divider",
		},
	],
})

export type AccordionItemVariantsProps = VariantProps<typeof accordionItemVariants>
	& VariantSlots<typeof accordionItemVariants>


export const accordionItemVariants = tv({
	slots: {
		base: "",
		heading: "",
		trigger: [
			"group focus-visible:z-10 py-4 w-full h-full",
			"flex gap-3 items-center",
			"outline-none transition-opacity",
			"focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
		],
		startContent: "flex-shrink-0",
		indicator: "text-default-400",
		titleWrapper: "flex-1 flex flex-col text-start",
		title: "text-foreground text-lg",
		subtitle: "text-sm text-default-500 font-normal",
		content: "pb-4",
	},
	variants: {
		variant: {
			light: "",
			shadow: "",
			bordered: "",
			splitted: {
				base: "px-4 bg-content1 shadow-medium rounded-medium",
			},
		},
		compact: {
			true: {
				trigger: "py-2",
				title: "text-md",
				subtitle: "text-sm",
				indicator: "text-md",
				content: "py-1",
			},
		},
		disabled: {
			true: {
				base: "opacity-70 pointer-events-none",
			},
		},
		hideIndicator: {
			true: {
				indicator: "hidden",
			},
		},
		disableIndicatorAnimation: {
			true: {
				indicator: "transition-none",
			},
			false: {
				indicator: "transition-transform rotate-0 group-aria-[expanded=true]:-rotate-90",
			},
		},
	},
	defaultVariants: {
		variant: "light",
		disableIndicatorAnimation: false,
	},
})