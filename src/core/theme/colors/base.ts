import { color } from "../utils/convert"

export const lightBaseVars = {
	"--background": color("#ffffff"),
	"--foreground": color("#18181b"),
}

export const darkBaseVars = {
	"--background": color("#000000"),
	"--foreground": color("#ECEDEE"),
}

export const baseColors = {
	background: {
		DEFAULT: "rgb(var(--background) / <alpha-value>)",
	},
	foreground: {
		DEFAULT: "rgb(var(--foreground) / <alpha-value>)",
	},
}