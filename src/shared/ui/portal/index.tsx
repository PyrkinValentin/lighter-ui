import type { PortalProps } from "./types"

import { FloatingPortal } from "@floating-ui/react"

export const Portal = (props: PortalProps) => {
	const { children, ...restProps } = props

	return (
		<FloatingPortal {...restProps}>
			{children}
		</FloatingPortal>
	)
}