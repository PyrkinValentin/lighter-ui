import type { ElementType } from "react"
import type { BoxProps } from "./types"

import { boxVariants } from "./variants"

export const Box = <As extends ElementType = "div">(props: BoxProps<As>) => {
	const {
		as = "div",

		display,
		className,

		children,
		...restProps
	} = props as BoxProps

	const classNames = boxVariants({
		display,
		className,
	})

	const Tag = as

	return (
		<Tag className={classNames} {...restProps}>
			{children}
		</Tag>
	)
}