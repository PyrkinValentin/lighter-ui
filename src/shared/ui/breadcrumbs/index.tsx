import type { HTMLProps, ReactNode } from "react"
import type { BreadcrumbsProps } from "./types"

import { Children, isValidElement, cloneElement } from "react"
import { mergeProps } from "@/shared/utils/props"

import { TbChevronRight } from "react-icons/tb"

import { breadcrumbsVariants } from "./variants"

export const Breadcrumbs = (props: BreadcrumbsProps) => {
	const {
		separator = <TbChevronRight/>,

		variant,
		underline,
		size,
		color,
		rounded,
		disabled,
		className,
		classNames,

		children,
		...restProps
	} = props

	const collectionBreadcrumbs = Children.toArray(children)

	const slots = breadcrumbsVariants({
		variant,
		underline,
		size,
		color,
		rounded,
		disabled,
	})

	const renderItem = (item: ReactNode, index: number) => {
		const validElement = isValidElement<HTMLProps<HTMLElement>>(item)
			? item
			: null

		const lastItem = collectionBreadcrumbs.length - 1 === index

		const itemOwnProps: HTMLProps<HTMLElement> = {
			tabIndex: disabled ? -1 : undefined,
			className: !lastItem
				? slots.itemContent({ className: classNames?.itemContent })
				: slots.lastItemContent({ className: classNames?.lastItemContent })
		}

		return (
			<li key={index} className={slots.item({ className: classNames?.item })}>
				{validElement
					? cloneElement(validElement, mergeProps(validElement.props, itemOwnProps))
					: <span {...itemOwnProps}>{item}</span>
				}

				{!lastItem
					? <span className={slots.separator({ className: classNames?.separator })}>{separator}</span>
					: null
				}
			</li>
		)
	}

	return (
		<nav className={slots.base({ className: [className, classNames?.base] })} {...restProps}>
			<ol className={slots.list({ className: classNames?.list })}>
				{collectionBreadcrumbs.map(renderItem)}
			</ol>
		</nav>
	)
}