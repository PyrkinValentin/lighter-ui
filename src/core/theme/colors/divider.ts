import { color } from "../utils/convert"

export const lightDividerVars = {
	"--divider": color("#111111"),
	"--divider-opacity": "0.15",
}

export const darkDividerVars = {
	"--divider": color("#ffffff"),
	"--divider-opacity": "0.15",
}

export const dividerColors = {
	divider: {
		DEFAULT: "rgb(var(--divider) / var(--divider-opacity, <alpha-value>))",
	},
}