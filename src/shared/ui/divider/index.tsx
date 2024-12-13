import type { DividerProps } from "./types"

import { dividerVariants } from "./variants"

export const Divider = (props: DividerProps) => {
	const {
		orientation,
		className,

		children,
		...restProps
	} = props

	const classNames = dividerVariants({
		orientation,
		className,
	})

	return (
		<div
			role="separator"
			className={classNames}
			{...restProps}
		>
			{children}
		</div>
	)
}