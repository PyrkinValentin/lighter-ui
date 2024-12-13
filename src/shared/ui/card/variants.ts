import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type CardVariantsProps = VariantProps<typeof cardVariants> & VariantSlots<typeof cardVariants>

export const cardVariants = tv(
	{
		slots: {
			base: [
				"relative overflow-hidden h-auto",
				"flex flex-col",
				"bg-content1 text-foreground",
				"transition-[background] motion-reduce:transition-none",
			],
			header: [
				"z-10 overflow-inherit p-3 w-full",
				"flex justify-start items-center shrink-0",
				"color-inherit subpixel-antialiased",
			],
			body: [
				"overflow-y-auto relative w-full p-3 h-auto",
				"flex flex-1 flex-auto flex-col",
				"break-words text-left",
				"subpixel-antialiased",
			],
			footer: [
				"overflow-hidden p-3 w-full h-auto",
				"flex items-center",
				"color-inherit subpixel-antialiased",
			],
		},
		variants: {
			shadow: {
				none: {
					base: "shadow-none",
				},
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
			rounded: {
				none: {
					base: "rounded-none",
					header: "rounded-none",
					footer: "rounded-none",
				},
				sm: {
					base: "rounded-small",
					header: "rounded-t-small",
					footer: "rounded-b-small",
				},
				md: {
					base: "rounded-medium",
					header: "rounded-t-medium",
					footer: "rounded-b-medium",
				},
				lg: {
					base: "rounded-large",
					header: "rounded-t-large",
					footer: "rounded-b-large",
				},
			},
			hoverable: {
				true: {
					base: "hover:bg-default-100",
				},
			},
			blurred: {
				true: {
					base: "bg-background/80 dark:bg-background/20 backdrop-blur-md backdrop-saturate-150",
				},
			},
			footerBlurred: {
				true: {
					footer: "bg-background/10 backdrop-blur backdrop-saturate-150",
				},
			},
		},
		defaultVariants: {
			shadow: "md",
			rounded: "lg",
		},
	},
)