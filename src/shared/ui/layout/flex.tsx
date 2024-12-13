import type { ElementType } from "react"
import type { FlexProps } from "./types"

import { flexVariants } from "./variants"

export const Flex = <As extends ElementType = "div">(props: FlexProps<As>) => {
	const {
		as = "div",

		display,
		direction,
		align,
		justify,
		wrap,
		gap,
		gapX,
		gapY,
		className,

		children,
		...restProps
	} = props as FlexProps

	const classNames = flexVariants({
		display,
		direction,
		align,
		justify,
		wrap,
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