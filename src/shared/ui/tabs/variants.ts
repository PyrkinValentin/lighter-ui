import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type TabsVariantsProps = VariantProps<typeof tabsVariants> & VariantSlots<typeof tabsVariants>

export const tabsVariants = tv({
	slots: {
		base: "inline-flex gap-3",
		tabList: "p-1 h-fit flex gap-2 items-center flex-nowrap overflow-hidden bg-default-100",
		tab: [
			"group relative z-0 px-3 py-1 w-full",
			"flex justify-center items-center",
			"outline-none cursor-pointer transition-opacity",
			"aria-[disabled=true]:cursor-not-allowed",
			"aria-[selected=false]:hover:opacity-70",
			"aria-[disabled=true]:!opacity-30",
			"focus-visible:z-10",
			"focus-visible:outline-2",
			"focus-visible:outline-primary",
			"focus-visible:outline-offset-2",
		],
		tabContent: [
			"z-10 relative",
			"text-inherit whitespace-nowrap transition-colors text-default-500",
			"group-aria-[selected=true]:text-foreground",
		],
		cursor: "absolute z-0 bg-white",
		tabPanel: [
			"outline-none",
			"focus-visible:z-10",
			"focus-visible:outline-2",
			"focus-visible:outline-primary",
			"focus-visible:outline-offset-2",
		],
	},
	variants: {
		variant: {
			solid: {
				cursor: "inset-0",
			},
			light: {
				tabList: "bg-transparent dark:bg-transparent",
				cursor: "inset-0",
			},
			underlined: {
				tabList: "bg-transparent dark:bg-transparent",
				cursor: "h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
			},
			bordered: {
				tabList: "bg-transparent dark:bg-transparent border-2 border-default-200 shadow-sm",
				cursor: "inset-0",
			},
		},
		color: {
			default: "",
			primary: "",
			secondary: "",
			success: "",
			warning: "",
			danger: "",
		},
		size: {
			sm: {
				tabList: "rounded-medium",
				tab: "h-7 text-xs rounded-small",
				cursor: "rounded-small",
			},
			md: {
				tabList: "rounded-medium",
				tab: "h-8 text-sm rounded-small",
				cursor: "rounded-small",
			},
			lg: {
				tabList: "rounded-large",
				tab: "h-9 text-md rounded-medium",
				cursor: "rounded-medium",
			},
		},
		rounded: {
			none: {
				tabList: "rounded-none",
				tab: "rounded-none",
				cursor: "rounded-none",
			},
			sm: {
				tabList: "rounded-medium",
				tab: "rounded-small",
				cursor: "rounded-small",
			},
			md: {
				tabList: "rounded-medium",
				tab: "rounded-small",
				cursor: "rounded-small",
			},
			lg: {
				tabList: "rounded-large",
				tab: "rounded-medium",
				cursor: "rounded-medium",
			},
			full: {
				tabList: "rounded-full",
				tab: "rounded-full",
				cursor: "rounded-full",
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
		rounded: "md",
		placement: "top",
	},
	compoundVariants: [
		{
			variant: ["solid", "bordered", "light"],
			color: "default",
			className: {
				cursor: "bg-background dark:bg-default shadow-small",
				tabContent: "group-aria-[selected=true]:text-default-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "primary",
			className: {
				cursor: "bg-primary text-primary-foreground",
				tabContent: "group-aria-[selected=true]:text-primary-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "secondary",
			className: {
				cursor: "bg-secondary text-secondary-foreground",
				tabContent: "group-aria-[selected=true]:text-secondary-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "success",
			className: {
				cursor: "bg-success text-success-foreground",
				tabContent: "group-aria-[selected=true]:text-success-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "warning",
			className: {
				cursor: "bg-warning text-warning-foreground",
				tabContent: "group-aria-[selected=true]:text-warning-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "danger",
			className: {
				cursor: "bg-danger text-danger-foreground",
				tabContent: "group-aria-[selected=true]:text-danger-foreground",
			},
		},
		{
			variant: "underlined",
			color: "default",
			className: {
				cursor: "bg-foreground",
				tabContent: "group-aria-[selected=true]:text-foreground",
			},
		},
		{
			variant: "underlined",
			color: "primary",
			className: {
				cursor: "bg-primary",
				tabContent: "group-aria-[selected=true]:text-primary",
			},
		},
		{
			variant: "underlined",
			color: "secondary",
			className: {
				cursor: "bg-secondary",
				tabContent: "group-aria-[selected=true]:text-secondary",
			},
		},
		{
			variant: "underlined",
			color: "success",
			className: {
				cursor: "bg-success",
				tabContent: "group-aria-[selected=true]:text-success",
			},
		},
		{
			variant: "underlined",
			color: "warning",
			className: {
				cursor: "bg-warning",
				tabContent: "group-aria-[selected=true]:text-warning",
			},
		},
		{
			variant: "underlined",
			color: "danger",
			className: {
				cursor: "bg-danger",
				tabContent: "group-aria-[selected=true]:text-danger",
			},
		},
	],
	compoundSlots: [
		{
			variant: "underlined",
			slots: ["tab", "tabList", "cursor"],
			className: ["rounded-none"],
		},
	],
})