import type { SpinnerProps } from "./types"

import { spinnerVariants } from "./variants"

export const Spinner = (props: SpinnerProps) => {
	const {
		color,
		size,
		className,
		classNames,

		children,
		...restProps
	} = props

	const slots = spinnerVariants({
		color,
		size,
	})

	return (
		<div className={slots.base({ className: [className, classNames?.base] })} {...restProps}>
			<div className={slots.spinner({ className: classNames?.spinner })}/>
			{children}
		</div>
	)
}