import { color } from "../utils/convert"

export const lightPrimaryVars = {
	"--primary": color("#006FEE"),
	"--primary-foreground": color("#ECEDEE"),
	"--primary-50": color("#e6f1fe"),
	"--primary-100": color("#cce3fd"),
	"--primary-200": color("#99c7fb"),
	"--primary-300": color("#66aaf9"),
	"--primary-400": color("#338ef7"),
	"--primary-500": color("#006FEE"),
	"--primary-600": color("#005bc4"),
	"--primary-700": color("#004493"),
	"--primary-800": color("#002e62"),
	"--primary-900": color("#001731"),
}

export const darkPrimaryVars = {
	"--primary": color("#006FEE"),
	"--primary-foreground": color("#ECEDEE"),
	"--primary-50": color("#001731"),
	"--primary-100": color("#002e62"),
	"--primary-200": color("#004493"),
	"--primary-300": color("#005bc4"),
	"--primary-400": color("#006FEE"),
	"--primary-500": color("#338ef7"),
	"--primary-600": color("#66aaf9"),
	"--primary-700": color("#99c7fb"),
	"--primary-800": color("#cce3fd"),
	"--primary-900": color("#e6f1fe"),
}

export const primaryColors = {
	primary: {
		DEFAULT: "rgb(var(--primary) / <alpha-value>)",
		foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
		"50": "rgb(var(--primary-50) / <alpha-value>)",
		"100": "rgb(var(--primary-100) / <alpha-value>)",
		"200": "rgb(var(--primary-200) / <alpha-value>)",
		"300": "rgb(var(--primary-300) / <alpha-value>)",
		"400": "rgb(var(--primary-400) / <alpha-value>)",
		"500": "rgb(var(--primary-500) / <alpha-value>)",
		"600": "rgb(var(--primary-600) / <alpha-value>)",
		"700": "rgb(var(--primary-700) / <alpha-value>)",
		"800": "rgb(var(--primary-800) / <alpha-value>)",
		"900": "rgb(var(--primary-900) / <alpha-value>)",
	},
}