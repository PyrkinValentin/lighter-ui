import type { ButtonGroupContextValue, ButtonGroupProps } from "./types"

import { createContext } from "react"

import { buttonGroupVariants } from "./variants"

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({})

export const ButtonGroup = (props: ButtonGroupProps) => {
	const {
		fullWidth,
		className,

		variant,
		color,
		size,
		rounded,
		disabled,

		children,
		...restProps
	} = props

	const classNames = buttonGroupVariants({
		fullWidth,
		className,
	})

	const contextValue: ButtonGroupContextValue = {
		inGroup: true,
		variant,
		color,
		size,
		rounded,
		disabled,
		fullWidth,
	}

	return (
		<ButtonGroupContext value={contextValue}>
			<div role="group" className={classNames} {...restProps}>
				{children}
			</div>
		</ButtonGroupContext>
	)
}