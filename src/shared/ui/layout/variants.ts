import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type ContainerVariantsProps = VariantProps<typeof containerVariants>

export const containerVariants = tv({
	base: "container",
	variants: {
		size: {
			xs: "max-w-sm",
			sm: "max-w-screen-sm",
			md: "max-w-screen-md",
			lg: "max-w-screen-lg",
		},
	},
})

export type BoxVariantsProps = VariantProps<typeof boxVariants>

export const boxVariants = tv({
	base: "",
	variants: {
		display: {
			none: "hidden",
			inline: "inline",
			"inline-block": "inline-block",
			block: "block",
		}
	},
}, {
	responsiveVariants: ["sm", "md", "lg"],
})

export type FlexVariantsProps = VariantProps<typeof flexVariants>

export const flexVariants = tv({
	base: "",
	variants: {
		display: {
			none: "hidden",
			"inline-flex": "inline-flex",
			flex: "flex",
		},
		direction: {
			row: "flex-row",
			"row-reverse": "flex-row-reverse",
			column: "flex-col",
			"column-reverse": "flex-col-reverse",
		},
		wrap: {
			nowrap: "flex-nowrap",
			wrap: "flex-wrap",
			"wrap-reverse": "flex-wrap-reverse",
		},
		align: {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			baseline: "items-baseline",
			stretch: "items-stretch",
		},
		justify: {
			start: "justify-start",
			center: "justify-center",
			end: "justify-end",
			between: "justify-between",
		},
		gap: {
			px: "gap-px",
			"0": "gap-0",
			"1": "gap-1",
			"2": "gap-2",
			"3": "gap-3",
			"4": "gap-4",
			"5": "gap-5",
		},
		gapX: {
			px: "gap-x-px",
			"0": "gap-x-0",
			"1": "gap-x-1",
			"2": "gap-x-2",
			"3": "gap-x-3",
			"4": "gap-x-4",
			"5": "gap-x-5",
		},
		gapY: {
			px: "gap-y-px",
			"0": "gap-y-0",
			"1": "gap-y-1",
			"2": "gap-y-2",
			"3": "gap-y-3",
			"4": "gap-y-4",
			"5": "gap-y-5",
		},
	},
	defaultVariants: {
		display: "flex",
	},
}, {
	responsiveVariants: ["sm", "md", "lg"],
})

export type GridVariantsProps = VariantProps<typeof gridVariants>

export const gridVariants = tv({
	base: "",
	variants: {
		display: {
			none: "hidden",
			"inline-grid": "inline-grid",
			grid: "grid",
		},
		size: {
			"1": "col-span-1",
			"2": "col-span-2",
			"3": "col-span-3",
			"4": "col-span-4",
			"5": "col-span-5",
			"6": "col-span-6",
			"7": "col-span-7",
			"8": "col-span-8",
			"9": "col-span-9",
			"10": "col-span-10",
			"11": "col-span-11",
			"12": "col-span-12",
		},
		gap: {
			px: "gap-px",
			"0": "gap-0",
			"1": "gap-1",
			"2": "gap-2",
			"3": "gap-3",
			"4": "gap-4",
			"5": "gap-5",
		},
		gapX: {
			px: "gap-x-px",
			"0": "gap-x-0",
			"1": "gap-x-1",
			"2": "gap-x-2",
			"3": "gap-x-3",
			"4": "gap-x-4",
			"5": "gap-x-5",
		},
		gapY: {
			px: "gap-y-px",
			"0": "gap-y-0",
			"1": "gap-y-1",
			"2": "gap-y-2",
			"3": "gap-y-3",
			"4": "gap-y-4",
			"5": "gap-y-5",
		},
		container: {
			true: "grid grid-cols-12",
		},
	},
}, {
	responsiveVariants: ["sm", "md", "lg"],
})