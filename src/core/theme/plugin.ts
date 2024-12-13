import Plugin from "tailwindcss/plugin"
import { fontFamily } from "tailwindcss/defaultTheme"

import { rem, spacing } from "./utils/convert"

import { baseColors, darkBaseVars, lightBaseVars } from "./colors/base"
import { darkDefaultVars, defaultColors, lightDefaultVars } from "./colors/default"
import { darkPrimaryVars, lightPrimaryVars, primaryColors } from "./colors/primary"
import { darkSecondaryVars, lightSecondaryVars, secondaryColors } from "./colors/secondary"
import { darkSuccessVars, lightSuccessVars, successColors } from "./colors/success"
import { darkWarningVars, lightWarningVars, warningColors } from "./colors/warning"
import { dangerColors, darkDangerVars, lightDangerVars } from "./colors/danger"
import { darkDividerVars, dividerColors, lightDividerVars } from "./colors/divider"
import { contentColors, darkContentVars, lightContentVars } from "./colors/content"

import { backgroundStripe } from "./background/stripe"

import { boxShadow, darkBoxShadowVars, lightBoxShadowVars } from "./shadows/box"
import { borderRadius } from "./border-radius"
import { animations } from "./animations"
import { keyframes } from "./keyframes"

export const plugin = Plugin((api) => {
	const { addBase } = api

	addBase({
		":root": {
			fontSize: rem(16),
		},
		":root, [data-theme]": {
			backgroundColor: "rgb(var(--background))",
			color: "rgb(var(--foreground))",
			...lightBaseVars,
			...lightDefaultVars,
			...lightPrimaryVars,
			...lightSecondaryVars,
			...lightSuccessVars,
			...lightWarningVars,
			...lightDangerVars,
			...lightBoxShadowVars,
			...lightDividerVars,
			...lightContentVars,
		},
		"[data-theme='dark']": {
			...darkBaseVars,
			...darkDefaultVars,
			...darkPrimaryVars,
			...darkSecondaryVars,
			...darkSuccessVars,
			...darkWarningVars,
			...darkDangerVars,
			...darkBoxShadowVars,
			...darkDividerVars,
			...darkContentVars,
		},
	})
}, {
	darkMode: ["selector", "[data-theme='dark']"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
		},
		container: {
			center: true,
			padding: spacing(4),
			screens: {
				lg: "1024px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...fontFamily.sans],
			},
			colors: {
				...baseColors,
				...defaultColors,
				...primaryColors,
				...secondaryColors,
				...successColors,
				...warningColors,
				...dangerColors,
				...dividerColors,
				...contentColors,
			},
			backgroundImage: {
				...backgroundStripe,
			},
			boxShadow,
			borderRadius,
			animation: animations,
			keyframes,
		},
	},
})