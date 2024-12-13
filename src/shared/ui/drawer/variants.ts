import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type DrawerVariantsProps = VariantProps<typeof drawerVariants> & VariantSlots<typeof drawerVariants>

export const drawerVariants = tv({
	slots: {
		base: "z-50 box-border fixed p-4 flex flex-col gap-4 bg-content1 outline-none",
		header: "text-lg font-semibold",
		body: "overflow-auto flex-1",
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
				base: "max-w-xs max-h-[20rem]",
			},
			sm: {
				base: "max-w-sm max-h-[24rem]",
			},
			md: {
				base: "max-w-md max-h-[28rem]",
			},
			lg: {
				base: "max-w-lg max-h-[32rem]",
			},
			xl: {
				base: "max-w-xl max-h-[36rem]",
			},
			full: {
				base: "max-w-full max-h-full h-dvh !rounded-none",
			},
		},
		placement: {
			top: {
				base: "inset-x-0 top-0 max-w-none rounded-t-none",
			},
			right: {
				base: "inset-y-0 right-0 max-h-none rounded-r-none",
			},
			bottom: {
				base: "inset-x-0 bottom-0 max-w-none rounded-b-none",
			},
			left: {
				base: "inset-y-0 left-0 max-h-none rounded-l-none",
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
		size: "xs",
		placement: "right",
		shadow: "sm",
	},
})