import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type TabsVariantsProps = VariantProps<typeof tabsVariants> & VariantSlots<typeof tabsVariants>

export const tabsVariants = tv({
	slots: {
		base: "inline-flex gap-3",
		tabList: "p-1 h-fit flex gap-2 items-center flex-nowrap bg-default-100",
		tab: [
			"relative px-3 py-1 w-full flex justify-center items-center",
			"outline-none cursor-pointer transition duration-300",
			"whitespace-nowrap text-default-500",
			"hover:opacity-70 aria-selected:opacity-100 aria-selected:text-foreground",
			"disabled:cursor-not-allowed disabled:!opacity-30",
			"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
		],
		tabPanel: "outline-none hidden aria-selected:block",
	},
	variants: {
		variant: {
			solid: "",
			light: {
				tabList: "bg-transparent dark:bg-transparent",
			},
			underlined: {
				tabList: "bg-transparent dark:bg-transparent",
				tab: "border-b-2 border-transparent shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
			},
			bordered: {
				tabList: "bg-transparent dark:bg-transparent border-2 border-default-200 shadow-sm",
			},
		},
		color: {
			default: {
				tab: "focus-visible:outline-default",
			},
			primary: {
				tab: "focus-visible:outline-primary",
			},
			secondary: {
				tab: "focus-visible:outline-secondary",
			},
			success: {
				tab: "focus-visible:outline-success",
			},
			warning: {
				tab: "focus-visible:outline-warning",
			},
			danger: {
				tab: "focus-visible:outline-danger",
			},
		},
		size: {
			sm: {
				tabList: "rounded-medium",
				tab: "h-7 text-xs rounded-small",
			},
			md: {
				tabList: "rounded-medium",
				tab: "h-8 text-sm rounded-small",
			},
			lg: {
				tabList: "rounded-large",
				tab: "h-9 text-md rounded-medium",
			},
		},
		rounded: {
			none: {
				tabList: "rounded-none",
				tab: "rounded-none",
			},
			sm: {
				tabList: "rounded-medium",
				tab: "rounded-small",
			},
			md: {
				tabList: "rounded-medium",
				tab: "rounded-small",
			},
			lg: {
				tabList: "rounded-large",
				tab: "rounded-medium",
			},
			full: {
				tabList: "rounded-full",
				tab: "rounded-full",
			},
		},
		placement: {
			top: {
				base: "flex-col items-start",
			},
			start: {
				tabList: "flex-col shrink-0",
			},
			end: {
				base: "flex-row-reverse",
				tabList: "flex-col shrink-0",
			},
			bottom: {
				base: "flex-col-reverse items-start",
			},
		},
		fullWidth: {
			true: {
				base: "w-full",
				tabList: "w-full",
			},
		},
		disabled: {
			true: {
				tabList: "opacity-70 pointer-events-none",
			},
		},
	},
	defaultVariants: {
		variant: "solid",
		color: "default",
		size: "md",
		placement: "top",
	},
	compoundVariants: [
		{
			variant: ["solid", "bordered", "light"],
			color: "default",
			className: {
				tab: [
					"aria-selected:bg-background aria-selected:dark:bg-default aria-selected:shadow-small",
					"aria-selected:text-default-foreground",
				],
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "primary",
			className: {
				tab: "aria-selected:bg-primary aria-selected:text-primary-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "secondary",
			className: {
				tab: "aria-selected:bg-secondary aria-selected:text-secondary-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "success",
			className: {
				tab: "aria-selected:bg-success aria-selected:text-success-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "warning",
			className: {
				tab: "aria-selected:bg-warning aria-selected:text-warning-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "danger",
			className: {
				tab: "aria-selected:bg-danger aria-selected:text-danger-foreground",
			},
		},
		{
			variant: "underlined",
			color: "default",
			className: {
				tab: "aria-selected:border-b-foreground aria-selected:text-foreground",
			},
		},
		{
			variant: "underlined",
			color: "primary",
			className: {
				tab: "aria-selected:border-b-primary aria-selected:text-primary",
			},
		},
		{
			variant: "underlined",
			color: "secondary",
			className: {
				tab: "aria-selected:border-b-secondary aria-selected:text-secondary",
			},
		},
		{
			variant: "underlined",
			color: "success",
			className: {
				tab: "aria-selected:border-b-success aria-selected:text-success",
			},
		},
		{
			variant: "underlined",
			color: "warning",
			className: {
				tab: "aria-selected:border-b-warning aria-selected:text-warning",
			},
		},
		{
			variant: "underlined",
			color: "danger",
			className: {
				tab: "aria-selected:border-b-danger aria-selected:text-danger",
			},
		},
	],
	compoundSlots: [
		{
			variant: "underlined",
			slots: ["tabList", "tab"],
			className: "rounded-none",
		},
	],
})