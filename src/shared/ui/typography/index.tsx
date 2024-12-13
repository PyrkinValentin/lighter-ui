import type { ElementType } from "react"
import type { TypographyProps } from "./types"

import { typographyVariants } from "./variants"

export const Typography = <As extends ElementType = "span">(props: TypographyProps<As>) => {
	const {
		as = "span",

		size,
		weight,
		color,
		align,
		truncate,
		wrap,
		letterSpacing,
		lineClamp,
		decoration,
		decorationColor,
		decorationStyle,
		transform,
		className,

		...restProps
	} = props as TypographyProps

	const classNames = typographyVariants({
		size,
		weight,
		color,
		align,
		truncate,
		wrap,
		letterSpacing,
		lineClamp,
		decoration,
		decorationColor,
		decorationStyle,
		transform,
		className,
	})

	const Tag = as

	return (
		<Tag className={classNames} {...restProps}/>
	)
}