import type { LinkProps } from "./types"

import NextLink from "next/link"
import { TbExternalLink } from "react-icons/tb"

import { linkVariants } from "./variants"

export const Link = (props: LinkProps) => {
	const {
		external,
		showAnchorIcon,
		anchorIcon,

		variant,
		size,
		color,
		underline,
		disabled,
		className,
		children,
		...restProps
	} = props

	const externalProps = external ? {
		rel: "noopener noreferrer",
		target: "_blank",
	} : undefined

	const linkClassNames = linkVariants({
		variant,
		size,
		color,
		underline,
		disabled,
		className,
	})

	return (
		<NextLink
			className={linkClassNames}
			tabIndex={
				disabled
					? -1
					: undefined
			}
			{...externalProps}
			{...restProps}
		>
			{children}

			{showAnchorIcon
				? anchorIcon ?? <TbExternalLink/>
				: null
			}
		</NextLink>
	)
}