import { color } from "../utils/convert"

export const lightDangerVars = {
	"--danger": color("#f31260"),
	"--danger-foreground": color("#ECEDEE"),
	"--danger-50": color("#fee7ef"),
	"--danger-100": color("#fdd0df"),
	"--danger-200": color("#faa0bf"),
	"--danger-300": color("#f871a0"),
	"--danger-400": color("#f54180"),
	"--danger-500": color("#f31260"),
	"--danger-600": color("#c20e4d"),
	"--danger-700": color("#920b3a"),
	"--danger-800": color("#610726"),
	"--danger-900": color("#310413"),
}

export const darkDangerVars = {
	"--danger": color("#f31260"),
	"--danger-foreground": color("#ECEDEE"),
	"--danger-50": color("#310413"),
	"--danger-100": color("#610726"),
	"--danger-200": color("#920b3a"),
	"--danger-300": color("#c20e4d"),
	"--danger-400": color("#f31260"),
	"--danger-500": color("#f54180"),
	"--danger-600": color("#f871a0"),
	"--danger-700": color("#faa0bf"),
	"--danger-800": color("#fdd0df"),
	"--danger-900": color("#fee7ef"),
}

export const dangerColors = {
	danger: {
		DEFAULT: "rgb(var(--danger) / <alpha-value>)",
		foreground: "rgb(var(--danger-foreground) / <alpha-value>)",
		"50": "rgb(var(--danger-50) / <alpha-value>)",
		"100": "rgb(var(--danger-100) / <alpha-value>)",
		"200": "rgb(var(--danger-200) / <alpha-value>)",
		"300": "rgb(var(--danger-300) / <alpha-value>)",
		"400": "rgb(var(--danger-400) / <alpha-value>)",
		"500": "rgb(var(--danger-500) / <alpha-value>)",
		"600": "rgb(var(--danger-600) / <alpha-value>)",
		"700": "rgb(var(--danger-700) / <alpha-value>)",
		"800": "rgb(var(--danger-800) / <alpha-value>)",
		"900": "rgb(var(--danger-900) / <alpha-value>)",
	}
}