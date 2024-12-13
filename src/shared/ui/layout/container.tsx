import type { ElementType } from "react"
import type { ContainerProps } from "./types"

import { containerVariants } from "./variants"

export const Container = <TagName extends ElementType = "section">(props: ContainerProps<TagName>) => {
	const {
		as = "section",
		size,
		className,
		...restProps
	} = props as ContainerProps

	const classNames = containerVariants({
		size,
		className,
	})

	const Tag = as

	return (
		<Tag className={classNames} {...restProps}/>
	)
}