import { color } from "../utils/convert"

export const lightDefaultVars = {
	"--default": color("#d4d4d8"),
	"--default-foreground": color("#18181b"),
	"--default-50": color("#fafafa"),
	"--default-100": color("#f4f4f5"),
	"--default-200": color("#e4e4e7"),
	"--default-300": color("#d4d4d8"),
	"--default-400": color("#a1a1aa"),
	"--default-500": color("#71717a"),
	"--default-600": color("#52525b"),
	"--default-700": color("#3f3f46"),
	"--default-800": color("#27272a"),
	"--default-900": color("#18181b"),
}

export const darkDefaultVars = {
	"--default": color("#3f3f46"),
	"--default-foreground": color("#ECEDEE"),
	"--default-50": color("#18181b"),
	"--default-100": color("#27272a"),
	"--default-200": color("#3f3f46"),
	"--default-300": color("#52525b"),
	"--default-400": color("#71717a"),
	"--default-500": color("#a1a1aa"),
	"--default-600": color("#d4d4d8"),
	"--default-700": color("#e4e4e7"),
	"--default-800": color("#f4f4f5"),
	"--default-900": color("#fafafa"),
}

export const defaultColors = {
	default: {
		DEFAULT: "rgb(var(--default) / <alpha-value>)",
		foreground: "rgb(var(--default-foreground) / <alpha-value>)",
		"50": "rgb(var(--default-50) / <alpha-value>)",
		"100": "rgb(var(--default-100) / <alpha-value>)",
		"200": "rgb(var(--default-200) / <alpha-value>)",
		"300": "rgb(var(--default-300) / <alpha-value>)",
		"400": "rgb(var(--default-400) / <alpha-value>)",
		"500": "rgb(var(--default-500) / <alpha-value>)",
		"600": "rgb(var(--default-600) / <alpha-value>)",
		"700": "rgb(var(--default-700) / <alpha-value>)",
		"800": "rgb(var(--default-800) / <alpha-value>)",
		"900": "rgb(var(--default-900) / <alpha-value>)",
	},
}