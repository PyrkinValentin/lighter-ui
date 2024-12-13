import type { ElementType } from "react"
import type { GridProps } from "./types"

import { gridVariants } from "./variants"

export const Grid = <As extends ElementType = "div">(props: GridProps<As>) => {
	const {
		as = "div",

		container,
		display,
		size,
		gap,
		gapX,
		gapY,
		className,

		children,
		...restProps
	} = props as GridProps

	const classNames = gridVariants({
		container,
		display,
		size,
		gap,
		gapX,
		gapY,
		className,
	})

	const Tag = as

	return (
		<Tag className={classNames} {...restProps}>
			{children}
		</Tag>
	)
}