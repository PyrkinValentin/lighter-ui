import type { ClassValue, TV } from "tailwind-variants"

import { tv as tvBase, cn as tvCn } from "tailwind-variants"

const COMMON_UNITS = ["small", "medium", "large"]

const twMergeConfig = {
	theme: {
		borderRadius: COMMON_UNITS,
	},
	classGroups: {
		shadow: [{ shadow: COMMON_UNITS }],
	},
}

export const tv: TV = (options, config) => {
	return tvBase(options, {
		...config,
		twMerge: true,
		twMergeConfig: {
			...config?.twMergeConfig,
			theme: {
				...config?.twMergeConfig?.theme,
				...twMergeConfig.theme,
			},
			classGroups: {
				...config?.twMergeConfig?.classGroups,
				...twMergeConfig.classGroups,
			},
		},
	})
}

export const cn = (...inputs: ClassValue[]) => tvCn(...inputs)({
	twMerge: true,
})