import { color } from "../utils/convert"

export const lightWarningVars = {
	"--warning": color("#f5a524"),
	"--warning-foreground": color("#18181b"),
	"--warning-50": color("#fefce8"),
	"--warning-100": color("#fdedd3"),
	"--warning-200": color("#fbdba7"),
	"--warning-300": color("#f9c97c"),
	"--warning-400": color("#f7b750"),
	"--warning-500": color("#f5a524"),
	"--warning-600": color("#c4841d"),
	"--warning-700": color("#936316"),
	"--warning-800": color("#62420e"),
	"--warning-900": color("#312107"),
}

export const darkWarningVars = {
	"--warning": color("#f5a524"),
	"--warning-foreground": color("#18181b"),
	"--warning-50": color("#312107"),
	"--warning-100": color("#62420e"),
	"--warning-200": color("#936316"),
	"--warning-300": color("#c4841d"),
	"--warning-400": color("#f5a524"),
	"--warning-500": color("#f7b750"),
	"--warning-600": color("#f9c97c"),
	"--warning-700": color("#fbdba7"),
	"--warning-800": color("#fdedd3"),
	"--warning-900": color("#fefce8"),
}

export const warningColors = {
	warning: {
		DEFAULT: "rgb(var(--warning) / <alpha-value>)",
		foreground: "rgb(var(--warning-foreground) / <alpha-value>)",
		"50": "rgb(var(--warning-50) / <alpha-value>)",
		"100": "rgb(var(--warning-100) / <alpha-value>)",
		"200": "rgb(var(--warning-200) / <alpha-value>)",
		"300": "rgb(var(--warning-300) / <alpha-value>)",
		"400": "rgb(var(--warning-400) / <alpha-value>)",
		"500": "rgb(var(--warning-500) / <alpha-value>)",
		"600": "rgb(var(--warning-600) / <alpha-value>)",
		"700": "rgb(var(--warning-700) / <alpha-value>)",
		"800": "rgb(var(--warning-800) / <alpha-value>)",
		"900": "rgb(var(--warning-900) / <alpha-value>)",
	},
}