"use client"

import type { PaginationProps, PaginationItemProps } from "./types"

import { useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md"
import { BsThreeDots } from "react-icons/bs"

import { paginationVariants } from "./variants"

type PaginationItemValue = number | "prev" | "next" | "dots"

const range = (start: number, end: number) => {
	return Array.from(
		{ length: end - start + 1 },
		(_, index) => index + start
	)
}

const formatRange = (range: PaginationItemValue[], showControls?: boolean): PaginationItemValue[] => {
	return showControls
		? ["prev", ...range, "next"]
		: range
}

export const Pagination = (props: PaginationProps) => {
	const {
		dotsJump = 5,
		siblings = 1,
		boundaries = 1,
		loop,
		showControls,
		defaultPage = 1,
		page,
		totalPages = 10,
		onPageChange,
		renderItem: renderItemProp,

		variant,
		color,
		size,
		rounded,
		compact,
		disabled,
		showShadow,
		className,
		classNames,

		...restProps
	} = props

	const [controlledPage, setControlledPage] = useControlledState({
		defaultValue: defaultPage,
		value: page,
		setValue: onPageChange,
	})

	const handleClickPage = (page: number) => () => {
		setControlledPage?.(page)
	}

	const paginationRange = useMemo(() => {
		const totalPageNumbers = siblings * 2 + 3 + boundaries * 2

		if (totalPageNumbers >= totalPages) {
			return formatRange(range(1, totalPages), showControls)
		}
		const leftSiblingIndex = Math.max(controlledPage - siblings, boundaries)
		const rightSiblingIndex = Math.min(controlledPage + siblings, totalPages - boundaries)

		const shouldShowLeftDots = leftSiblingIndex > boundaries + 2
		const shouldShowRightDots = rightSiblingIndex < totalPages - (boundaries + 1)

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = siblings * 2 + boundaries + 2

			return formatRange([
				...range(1, leftItemCount),
				"dots",
				...range(totalPages - (boundaries - 1), totalPages),
			], showControls)
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = boundaries + 1 + 2 * siblings

			return formatRange([
				...range(1, boundaries),
				"dots",
				...range(totalPages - rightItemCount, totalPages),
			], showControls)
		}

		return formatRange([
			...range(1, boundaries),
			"dots",
			...range(leftSiblingIndex, rightSiblingIndex),
			"dots",
			...range(totalPages - boundaries + 1, totalPages),
		], showControls)
	}, [boundaries, controlledPage, showControls, siblings, totalPages])

	const slots = paginationVariants({
		variant,
		color,
		size,
		rounded,
		compact,
		disabled,
		showShadow,
	})

	const renderItem = (value: PaginationItemValue, index: number) => {
		if (value === "prev") {
			const nextPage = controlledPage <= 1
				? loop
					? totalPages
					: 1
				: controlledPage - 1

			const {
				key,
				page,
				children,
				...restProps
			}: PaginationItemProps = {
				key: value,
				role: "button",
				tabIndex: !loop && controlledPage === 1 ? -1 : 0,
				"aria-label": `prev page ${nextPage}`,
				page: nextPage,
				className: slots.item({ className: classNames?.prev }),
				onClick: handleClickPage(nextPage),
				children: <MdChevronLeft/>,
			}

			return renderItemProp
				? renderItemProp({ key, page, children, ...restProps })
				: <li key={key} {...restProps}>{children}</li>
		}

		if (value === "next") {
			const nextPage = controlledPage >= totalPages
				? loop
					? 1
					: totalPages
				: controlledPage + 1

			const {
				key,
				page,
				children,
				...restProps
			}: PaginationItemProps = {
				key: value,
				role: "button",
				tabIndex: !loop && controlledPage === totalPages ? -1 : 0,
				"aria-label": `next page ${nextPage}`,
				page: nextPage,
				className: slots.item({ className: classNames?.next }),
				onClick: handleClickPage(nextPage),
				children: <MdChevronRight/>,
			}

			return renderItemProp
				? renderItemProp({ key, page, children, ...restProps })
				: <li key={key} {...restProps}>{children}</li>
		}

		if (value === "dots") {
			const before = index < paginationRange.indexOf(controlledPage)

			const nextPage = before
				? controlledPage - dotsJump >= 1
					? controlledPage - dotsJump
					: 1
				: controlledPage + dotsJump <= totalPages
					? controlledPage + dotsJump
					: totalPages

			const {
				key,
				page,
				children,
				...restProps
			}: PaginationItemProps = {
				key: value + index,
				role: "button",
				tabIndex: 0,
				"aria-label": `jump to page ${nextPage}`,
				page: nextPage,
				className: slots.item({ className: [classNames?.item, "group"] }),
				onClick: handleClickPage(nextPage),
				children: (
					<>
						<BsThreeDots className={slots?.ellipsis({ className: classNames?.ellipsis })}/>

						{before
							? <MdKeyboardDoubleArrowLeft className={slots?.forwardIcon({ className: classNames?.forwardIcon })}/>
							: <MdKeyboardDoubleArrowRight className={slots?.forwardIcon({ className: classNames?.forwardIcon })}/>
						}
					</>
				),
			}

			return renderItemProp
				? renderItemProp({ key, page, children, ...restProps })
				: <li key={key} {...restProps}>{children}</li>
		}

		const {
			key,
			page,
			children,
			...restProps
		}: PaginationItemProps = {
			key: value,
			role: "button",
			tabIndex: 0,
			"aria-label": `page ${value}`,
			page: value,
			className: controlledPage === value
				? slots.cursor({ className: classNames?.cursor })
				: slots.item({ className: classNames?.item }),
			onClick: handleClickPage(value),
			children: value,
		}

		return renderItemProp
			? renderItemProp({ key, page, children, ...restProps })
			: <li key={key} {...restProps}>{children}</li>
	}

	return (
		<nav
			role="navigation"
			aria-label="pagination navigation"
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			<ul className={slots.wrapper({ className: classNames?.wrapper })}>
				{paginationRange.map(renderItem)}
			</ul>
		</nav>
	)
}