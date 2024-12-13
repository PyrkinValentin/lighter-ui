import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type DialogVariantsProps = VariantProps<typeof dialogVariants> & VariantSlots<typeof dialogVariants>

export const dialogVariants = tv({
	slots: {
		wrapper: "fixed h-dvh inset-0 flex justify-center overflow-y-auto",
		base: [
			"box-border relative max-h-[calc(100%_-_8rem)] mx-1 my-1 sm:mx-4 sm:my-16 p-4 w-full flex flex-col gap-4",
			"bg-content1 outline-none",
		],
		header: "text-lg font-semibold",
		body: "overflow-y-auto flex-1",
		footer: "flex gap-2 justify-end",
	},
	variants: {
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
		},
		size: {
			xs: {
				base: "max-w-xs",
			},
			sm: {
				base: "max-w-sm",
			},
			md: {
				base: "max-w-md",
			},
			lg: {
				base: "max-w-lg",
			},
			xl: {
				base: "max-w-xl",
			},
			full: {
				base: "my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-dvh min-h-dvh !rounded-none",
			},
		},
		placement: {
			auto: {
				wrapper: "items-end sm:items-center",
			},
			center: {
				wrapper: "items-center sm:items-center",
			},
			top: {
				wrapper: "items-start sm:items-start",
			},
			"top-center": {
				wrapper: "items-start sm:items-center",
			},
			bottom: {
				wrapper: "items-end sm:items-end",
			},
			"bottom-center": {
				wrapper: "items-end sm:items-center",
			},
		},
		shadow: {
			sm: {
				base: "shadow-small",
			},
			md: {
				base: "shadow-medium",
			},
			lg: {
				base: "shadow-large",
			},
		},
	},
	defaultVariants: {
		rounded: "lg",
		size: "md",
		placement: "auto",
		shadow: "sm",
	},
})