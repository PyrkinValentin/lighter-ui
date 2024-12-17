import type { PaginationItemProps, PaginationProps } from "./types"

import { useMemo } from "react"
import { useFloating } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { autoUpdate, offset } from "@floating-ui/react"

import { Fragment } from "react"
import { TbChevronLeft, TbChevronRight, TbChevronsLeft, TbChevronsRight, TbDots } from "react-icons/tb"

import { paginationVariants } from "./variants"

type PaginationItemValue = number | "prev" | "next" | "dots"

type GetPaginationRangeOptions = {
	siblings: number
	boundaries: number
	totalPages: number
	showControls?: boolean
	controlledPage: number
}

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

const getPaginationRange = (options: GetPaginationRangeOptions) => {
	const {
		siblings,
		boundaries,
		totalPages,
		showControls,
		controlledPage,
	} = options

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
}

export const Pagination = (props: PaginationProps) => {
	const {
		loop,
		showControls,
		dotsJump = 5,
		siblings = 1,
		boundaries = 1,
		defaultPage = 1,
		page,
		totalPages = 1,
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

	const {
		isPositioned,
		refs,
		floatingStyles,
	} = useFloating({
		open: true,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(({ rects }) => (
				-rects.reference.height / 2 - rects.floating.height / 2
			)),
		],
	})

	const paginationRange = useMemo(() => {
		return getPaginationRange({
			boundaries,
			controlledPage,
			showControls,
			siblings,
			totalPages,
		})
	}, [
		boundaries,
		controlledPage,
		showControls,
		siblings,
		totalPages,
	])

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
			const isDisabled = disabled || !loop && controlledPage === 1
				? true
				: undefined

			const prevPage = controlledPage <= 1
				? loop
					? totalPages
					: 1
				: controlledPage - 1

			const { page, ...restProps }: PaginationItemProps = {
				role: "button",
				"aria-label": "prev page",
				"aria-disabled": isDisabled,
				tabIndex: isDisabled ? -1 : 0,
				page: prevPage,
				className: slots.prev({ className: classNames?.prev }),
				onClick: () => setControlledPage?.(prevPage),
				children: <TbChevronLeft/>,
			}

			return renderItemProp
				? <Fragment key={value}>{renderItemProp({ page, ...restProps })}</Fragment>
				: <li key={value} {...restProps}/>
		}

		if (value === "next") {
			const isDisabled = disabled || !loop && controlledPage === totalPages
				? true
				: undefined

			const nextPage = controlledPage >= totalPages
				? loop
					? 1
					: totalPages
				: controlledPage + 1

			const { page, ...restProps }: PaginationItemProps = {
				role: "button",
				"aria-label": "next page",
				"aria-disabled": isDisabled,
				tabIndex: isDisabled ? -1 : 0,
				page: nextPage,
				className: slots.next({ className: classNames?.next }),
				onClick: () => setControlledPage?.(nextPage),
				children: <TbChevronRight/>,
			}

			return renderItemProp
				? <Fragment key={value}>{renderItemProp({ page, ...restProps })}</Fragment>
				: <li key={value} {...restProps}/>
		}

		if (value === "dots") {
			const before = index < paginationRange.indexOf(controlledPage)

			const jumpPage = before
				? controlledPage - dotsJump >= 1
					? controlledPage - dotsJump
					: 1
				: controlledPage + dotsJump <= totalPages
					? controlledPage + dotsJump
					: totalPages

			const { page, ...restProps }: PaginationItemProps = {
				role: "button",
				"aria-label": "jump page",
				tabIndex: disabled ? -1 : 0,
				page: jumpPage,
				className: slots.item({ className: [classNames?.item, "group"] }),
				onClick: () => setControlledPage?.(jumpPage),
				children: (
					<>
						<TbDots className={slots?.ellipsis({ className: classNames?.ellipsis })}/>

						{before
							? <TbChevronsLeft className={slots?.forwardIcon({ className: classNames?.forwardIcon })}/>
							: <TbChevronsRight className={slots?.forwardIcon({ className: classNames?.forwardIcon })}/>
						}
					</>
				),
			}

			return renderItemProp
				? <Fragment key={value + index}>{renderItemProp({ page, ...restProps })}</Fragment>
				: <li key={value + index} {...restProps}/>
		}

		const { page, ...restProps }: PaginationItemProps = {
			ref: (instance) => {
				if (controlledPage === value) {
					refs.setReference(instance)
				}
			},
			role: "button",
			"aria-label": `page ${value}`,
			tabIndex: disabled ? -1 : 0,
			page: value,
			className: slots.item({ className: classNames?.item }),
			onClick: () => setControlledPage?.(value),
			children: value,
		}

		return renderItemProp
			? <Fragment key={value}>{renderItemProp({ page, ...restProps })}</Fragment>
			: <li key={value} {...restProps}/>
	}

	return (
		<nav
			role="navigation"
			aria-label="pagination navigation"
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			<ul className={slots.wrapper({ className: classNames?.wrapper })}>
				<span
					ref={refs.setFloating}
					className={isPositioned ? slots.cursor({ className: classNames?.cursor }) : undefined}
					style={floatingStyles}
				>
					{isPositioned ? controlledPage : null}
				</span>

				{paginationRange.map(renderItem)}
			</ul>
		</nav>
	)
}