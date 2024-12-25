import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type SliderVariantsProps = VariantProps<typeof sliderVariants> & VariantSlots<typeof sliderVariants>

export const sliderVariants = tv({
	slots: {
		base: "flex flex-col w-full gap-1",
		labelWrapper: "w-full flex justify-between items-center",
		label: "",
		value: "",
		step: "absolute h-1.5 w-1.5 rounded-full bg-default-300/50 data-[in-range=true]:bg-background/50",
		mark: [
			"absolute text-sm cursor-default opacity-50 data-[in-range=true]:opacity-100 transition-opacity",
			"motion-reduce:transition-none",
		],
		trackWrapper: "relative flex gap-2",
		track: "relative w-full flex rounded-full bg-default-300/50 select-none touch-none",
		filler: "h-full absolute",
		thumb: [
			"absolute flex justify-center items-center",
			"before:absolute before:w-11 before:h-11 before:rounded-full",
			"after:shadow-small after:shadow-small after:bg-background",
			"after:transition-all motion-reduce:after:transition-none after:active:scale-75",
			"outline-none",
			"[&:has(input:focus-visible)]:z-10",
			"[&:has(input:focus-visible)]:outline-2",
			"[&:has(input:focus-visible)]:outline-primary",
			"[&:has(input:focus-visible)]:outline-offset-2",
		],
		startContent: "",
		endContent: "",
	},
	variants: {
		size: {
			sm: {
				label: "text-sm",
				value: "text-sm",
				thumb: "w-5 h-5 after:w-4 after:h-4",
				step: "data-[in-range=false]:bg-default-200",
			},
			md: {
				label: "text-sm",
				value: "text-sm",
				thumb: "w-6 h-6 after:w-5 after:h-5",
			},
			lg: {
				label: "text-md",
				value: "text-md",
				thumb: "h-7 w-7 after:w-5 after:h-5",
				step: "w-2 h-2",
				mark: "mt-2",
			},
		},
		rounded: {
			none: {
				thumb: "rounded-none after:rounded-none",
			},
			sm: {
				thumb:
					"rounded-[calc(theme(borderRadius.small)/2)] after:rounded-[calc(theme(borderRadius.small)/3)]",
			},
			md: {
				thumb:
					"rounded-[calc(theme(borderRadius.medium)/2)] after:rounded-[calc(theme(borderRadius.medium)/3)]",
			},
			lg: {
				thumb:
					"rounded-[calc(theme(borderRadius.large)/1.5)] after:rounded-[calc(theme(borderRadius.large)/2)]",
			},
			full: {
				thumb: "rounded-full after:rounded-full",
			},
		},
		color: {
			foreground: {
				filler: "bg-foreground",
				thumb: "bg-foreground",
			},
			primary: {
				filler: "bg-primary",
				thumb: "bg-primary",
			},
			secondary: {
				filler: "bg-secondary",
				thumb: "bg-secondary",
			},
			success: {
				filler: "bg-success",
				thumb: "bg-success",
			},
			warning: {
				filler: "bg-warning",
				thumb: "bg-warning",
			},
			danger: {
				filler: "bg-danger",
				thumb: "bg-danger",
			},
		},
		orientation: {
			vertical: {
				base: "w-auto h-full flex-col-reverse items-center",
				labelWrapper: "flex-col justify-center items-center",
				trackWrapper: "flex-col h-full justify-center items-center",
				filler: "w-full h-auto",
				track: "h-full border-y-transparent",
				thumb: "left-1/2 -translate-x-1/2 translate-y-1/2",
				step: "left-1/2 -translate-x-1/2 translate-y-1/2",
				mark: "left-1/2 ml-1 translate-x-1/2 translate-y-1/2",
			},
			horizontal: {
				trackWrapper: "items-center",
				track: "border-x-transparent",
				thumb: "top-1/2 -translate-x-1/2 -translate-y-1/2",
				step: "top-1/2 -translate-x-1/2 -translate-y-1/2",
				mark: "top-1/2 mt-1 -translate-x-1/2 translate-y-1/2",
			},
		},
		disabled: {
			false: {
				thumb: "cursor-grab active:cursor-grabbing",
			},
			true: {
				base: "opacity-70",
				thumb: "cursor-default",
			},
		},
		// hasMarks: {
		// 	true: {
		// 		base: "mb-5",
		// 		mark: "cursor-pointer",
		// 	},
		// 	false: "",
		// },
		showOutline: {
			true: {
				thumb: "ring-2 ring-background",
			},
			false: {
				thumb: "ring-transparent border-0",
			},
		},
		hideThumb: {
			true: {
				thumb: "sr-only",
				track: "cursor-pointer",
			},
		},
		singleThumb: {
			true: "",
			false: "",
		},
	},
	defaultVariants: {
		size: "md",
		rounded: "full",
		color: "foreground",
		showOutline: false,
	},
	compoundVariants: [
		{
			size: ["sm", "md"],
			showOutline: false,
			className: {
				thumb: "shadow-small",
			},
		},
		{
			size: "sm",
			color: "foreground",
			className: {
				step: "data-[in-range=true]:bg-foreground",
			},
		},
		{
			size: "sm",
			color: "primary",
			className: {
				step: "data-[in-range=true]:bg-primary",
			},
		},
		{
			size: "sm",
			color: "secondary",
			className: {
				step: "data-[in-range=true]:bg-secondary",
			},
		},
		{
			size: "sm",
			color: "success",
			className: {
				step: "data-[in-range=true]:bg-success",
			},
		},
		{
			size: "sm",
			color: "warning",
			className: {
				step: "data-[in-range=true]:bg-warning",
			},
		},
		{
			size: "sm",
			color: "danger",
			className: {
				step: "data-[in-range=true]:bg-danger",
			},
		},
		{
			size: "sm",
			orientation: "horizontal",
			className: {
				track: "h-1 my-[calc((theme(spacing.5)-theme(spacing.1))/2)] border-x-[calc(theme(spacing.5)/2)]",
			},
		},
		{
			size: "md",
			orientation: "horizontal",
			className: {
				track: "h-3 my-[calc((theme(spacing.6)-theme(spacing.3))/2)] border-x-[calc(theme(spacing.6)/2)]",
			},
		},
		{
			size: "lg",
			orientation: "horizontal",
			className: {
				track: "h-7 my-[calc((theme(spacing.7)-theme(spacing.5))/2)] border-x-[calc(theme(spacing.7)/2)]",
			},
		},
		{
			size: "sm",
			orientation: "vertical",
			className: {
				track: "w-1 mx-[calc((theme(spacing.5)-theme(spacing.1))/2)] border-y-[calc(theme(spacing.5)/2)]",
			},
		},
		{
			size: "md",
			orientation: "vertical",
			className: {
				track: "w-3 mx-[calc((theme(spacing.6)-theme(spacing.3))/2)] border-y-[calc(theme(spacing.6)/2)]",
			},
		},
		{
			size: "lg",
			orientation: "vertical",
			className: {
				track: "w-7 mx-[calc((theme(spacing.7)-theme(spacing.5))/2)] border-y-[calc(theme(spacing.7)/2)]",
			},
		},
		{
			color: "foreground",
			orientation: "horizontal",
			singleThumb: true,
			className: {
				track: "border-s-foreground",
			},
		},
		{
			color: "primary",
			orientation: "horizontal",
			singleThumb: true,
			className: {
				track: "border-s-primary",
			},
		},
		{
			color: "secondary",
			orientation: "horizontal",
			singleThumb: true,
			className: {
				track: "border-s-secondary",
			},
		},
		{
			color: "success",
			orientation: "horizontal",
			singleThumb: true,
			className: {
				track: "border-s-success",
			},
		},
		{
			color: "warning",
			orientation: "horizontal",
			singleThumb: true,
			className: {
				track: "border-s-warning",
			},
		},
		{
			color: "danger",
			orientation: "horizontal",
			singleThumb: true,
			className: {
				track: "border-s-danger",
			},
		},
		{
			color: "foreground",
			orientation: "vertical",
			singleThumb: true,
			className: {
				track: "border-b-foreground",
			},
		},
		{
			color: "primary",
			orientation: "vertical",
			singleThumb: true,
			className: {
				track: "border-b-primary",
			},
		},
		{
			color: "secondary",
			orientation: "vertical",
			singleThumb: true,
			className: {
				track: "border-b-secondary",
			},
		},
		{
			color: "success",
			orientation: "vertical",
			singleThumb: true,
			className: {
				track: "border-b-success",
			},
		},
		{
			color: "warning",
			orientation: "vertical",
			singleThumb: true,
			className: {
				track: "border-b-warning",
			},
		},
		{
			color: "danger",
			orientation: "vertical",
			singleThumb: true,
			className: {
				track: "border-b-danger",
			},
		},
	],
})