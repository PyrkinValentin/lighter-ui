import type { HelperTextProps } from "./types"

import { helperTextVariants } from "./variants"

export const HelperText = (props: HelperTextProps) => {
	const {
		error,
		className,

		children,
		...restProps
	} = props

	const classNames = helperTextVariants({
		error,
		className,
	})

	return (
		<span className={classNames} {...restProps}>
			{children}
		</span>
	)
}