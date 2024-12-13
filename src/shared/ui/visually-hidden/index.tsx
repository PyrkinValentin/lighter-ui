import type { CSSProperties, HTMLProps } from "react"
import type { VisuallyHiddenProps } from "./types"

import { cloneElement, isValidElement } from "react"

const visuallyHiddenStyles: CSSProperties = {
	overflow: "hidden",
	position: "absolute",
	margin: -1,
	padding: 0,
	border: 0,
	height: 0,
	width: 0,
	whiteSpace: "nowrap",
}

export const VisuallyHidden = (props: VisuallyHiddenProps) => {
	const { children } = props

	const validElement = isValidElement<HTMLProps<HTMLElement>>(children)
		? children
		: null

	return (
		<>
			{validElement
				? cloneElement(validElement, { style: { ...visuallyHiddenStyles, ...validElement.props.style } })
				: <span style={visuallyHiddenStyles}>{children}</span>
			}
		</>
	)
}