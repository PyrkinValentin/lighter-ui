import type { ReactNode } from "react"
import type { BadgeProps } from "./types"

import { badgeVariants } from "./variants"

const primitives = ["string", "number"]

const parseContent = (content: ReactNode) => {
	return primitives.includes(typeof content) && Number(content) > 99
		? "99+"
		: content
}

export const Badge = (props: BadgeProps) => {
	const {
		content,

		variant,
		color,
		size,
		placement,
		shape,
		invisible = !Boolean(content),
		dot,
		showOutline,
		className,
		classNames,

		children,
		...restProps
	} = props

	const slots = badgeVariants({
		variant,
		color,
		size,
		placement,
		shape,
		invisible,
		dot,
		showOutline,
	})

	return (
		<div className={slots.base({ className: [className, classNames?.base] })} {...restProps}>
			{children}

			<span className={slots.badge({ className: classNames?.badge })}>
				{parseContent(content)}
			</span>
		</div>
	)
}