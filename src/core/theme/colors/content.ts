import { color } from "../utils/convert"

export const lightContentVars = {
	"--content1": color("#ffffff"),
	"--content1-foreground": color("#11181C"),
	"--content2": color("#f4f4f5"),
	"--content2-foreground": color("#27272a"),
	"--content3": color("#e4e4e7"),
	"--content3-foreground": color("#3F3F46"),
	"--content4": color("#d4d4d8"),
	"--content4-foreground": color("#52525B"),
}

export const darkContentVars = {
	"--content1": color("#18181B"),
	"--content1-foreground": color("#fafafa"),
	"--content2": color("#27272a"),
	"--content2-foreground": color("#f4f4f5"),
	"--content3": color("#3f3f46"),
	"--content3-foreground": color("#e4e4e7"),
	"--content4": color("#52525b"),
	"--content4-foreground": color("#d4d4d8"),
}

export const contentColors = {
	content1: {
		DEFAULT: "rgb(var(--content1) / <alpha-value>)",
	},
	content2: {
		DEFAULT: "rgb(var(--content2) / <alpha-value>)",
	},
	content3: {
		DEFAULT: "rgb(var(--content3) / <alpha-value>)",
	},
	content4: {
		DEFAULT: "rgb(var(--content4) / <alpha-value>)",
	},
}