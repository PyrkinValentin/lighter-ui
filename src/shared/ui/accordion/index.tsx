"use client"

import type { AccordionContextValue, AccordionItemProps, AccordionProps } from "./types"

import { use, useId } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"
import { isFunction } from "@/shared/helpers/is-function"

import { TbChevronLeft } from "react-icons/tb"

import { Collapse } from "./collapse"
import { accordionItemVariants, accordionVariants } from "./variants"

const AccordionContext = createContext<AccordionContextValue>({})

const useAccordionContext = () => use(AccordionContext)

export const Accordion = (props: AccordionProps) => {
	const {
		keepMounted,
		multiple,
		disabledValue = [],
		defaultValue = [],
		value,
		onValueChange,

		variant,
		compact,
		disabled: disabledProp,

		className,
		children,
		...restProps
	} = props

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange,
	})

	const disabled = (value: string) => {
		return disabledProp ?? disabledValue.includes(value)
	}

	const expanded = (value: string) => {
		return value
			? controlledValue.includes(value)
			: false
	}

	const onExpandedChange = (value: string, expanded: boolean) => {
		setControlledValue?.(
			expanded
				? multiple ? [...controlledValue, value] : [value]
				: multiple ? controlledValue.filter((v) => v !== value) : []
		)
	}

	const classNames = accordionVariants({
		variant,
		className,
	})

	const contextValue: AccordionContextValue = {
		keepMounted,
		disabled,
		expanded,
		onExpandedChange,
		variant,
		compact,
	}

	return (
		<AccordionContext value={contextValue}>
			<div className={classNames} {...restProps}>
				{children}
			</div>
		</AccordionContext>
	)
}

export const AccordionItem = (props: AccordionItemProps) => {
	const {
		disabled: disabledCtx,
		expanded,
		onExpandedChange,
		variant,
		...restCtxProps
	} = useAccordionContext()

	const valueId = useId()
	const titleId = useId()
	const regionId = useId()

	const {
		keepMounted,
		value = valueId,
		title,
		subtitle,
		startContent,
		indicator,

		compact,
		disabled = disabledCtx?.(value),
		hideIndicator,
		disableIndicatorAnimation,
		className,
		classNames,

		children,
		...restProps
	} = {
		...restCtxProps,
		...props,
	}

	const isExpanded = Boolean(expanded?.(value))

	const handleClick = () => {
		onExpandedChange?.(value, !isExpanded)
	}

	const slots = accordionItemVariants({
		variant,
		compact,
		disabled,
		hideIndicator,
		disableIndicatorAnimation,
	})

	return (
		<div className={slots.base({ className: [className, classNames?.base] })} {...restProps}>
			<h2 className={slots.heading({ className: classNames?.heading })}>
				<button
					id={titleId}
					aria-controls={regionId}
					aria-expanded={isExpanded}
					disabled={disabled}
					className={slots.trigger({ className: classNames?.trigger })}
					onClick={handleClick}
				>
					{startContent ? (
						<div className={slots.startContent({ className: classNames?.startContent })}>
							{startContent}
						</div>
					) : null}

					<div className={slots.titleWrapper({ className: classNames?.titleWrapper })}>
						<span className={slots.title({ className: classNames?.title })}>
							{title}
						</span>

						{subtitle ? (
							<span className={slots.subtitle({ className: classNames?.subtitle })}>
								{subtitle}
							</span>
						) : null}
					</div>

					<span aria-hidden="true" className={slots.indicator({ className: classNames?.indicator })}>
						{indicator
							? isFunction(indicator) ? indicator(isExpanded) : indicator
							: <TbChevronLeft/>
						}
					</span>
				</button>
			</h2>

			<Collapse expanded={isExpanded} keepMounted={keepMounted}>
				<section
					role="region"
					id={regionId}
					aria-labelledby={titleId}
					className={slots.content({ className: classNames?.content })}
				>
					{children}
				</section>
			</Collapse>
		</div>
	)
}