"use client"

import type { HTMLProps } from "react"
import type { OpenChangeReason } from "@floating-ui/react"
import type { TooltipProps } from "./types"

import { useFloating, useRole, useHover, useDismiss, useInteractions } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"
import { useAnimate } from "@/shared/hooks/use-animate"

import { cloneElement, isValidElement } from "react"
import { autoUpdate, flip, offset, shift, safePolygon } from "@floating-ui/react"
import { mergeProps } from "@/shared/utils/props"

import { Portal } from "@/shared/ui/portal"

import { tooltipVariants } from "./variants"

export const Tooltip = (props: TooltipProps) => {
	const {
		placement,
		defaultOpen = false,
		open,
		onOpenChange,
		onClose,
		offset: offsetProp = 7,

		size,
		color,
		rounded,
		shadow,
		classNames,

		content,
		children,
	} = props

	const [controlledOpen, setControlledOpen] = useControlledState({
		defaultValue: defaultOpen,
		value: open,
		setValue: onOpenChange,
	})

	const handleOpenChange = (open: boolean, _ev: Event, reason?: OpenChangeReason) => {
		setControlledOpen?.(open, reason)

		if (!open) {
			onClose?.()
		}
	}

	const {
		context,
		refs,
		floatingStyles,
	} = useFloating({
		placement,
		open: controlledOpen,
		onOpenChange: handleOpenChange,
		whileElementsMounted: autoUpdate,
		transform: false,
		middleware: [
			offset(offsetProp),
			flip(),
			shift(),
		],
	})

	const role = useRole(context, {
		role: "tooltip",
	})

	const hover = useHover(context, {
		handleClose: safePolygon(),
	})

	const dismiss = useDismiss(context, {
		ancestorScroll: true,
	})

	const { getReferenceProps, getFloatingProps } = useInteractions([
		role,
		hover,
		dismiss,
	])

	const [mounted, animateClassName] = useAnimate(controlledOpen, {
		initial: "opacity-0 scale-90",
		enter: "opacity-100 scale-100",
	})

	const slots = tooltipVariants({
		size,
		color,
		rounded,
		shadow,
	})

	const validElement = isValidElement<HTMLProps<HTMLElement>>(children)
		? children
		: null

	const triggerOwnProps = {
		ref: refs.setReference,
		className: slots.trigger({ className: classNames?.trigger }),
		...getReferenceProps(),
	}

	return (
		<>
			{validElement
				? cloneElement(validElement, mergeProps(validElement.props, triggerOwnProps))
				: <span {...triggerOwnProps}>{children}</span>
			}

			{mounted && (
				<Portal>
					<div
						ref={refs.setFloating}
						className={animateClassName(slots.base({ className: classNames?.base }))}
						style={floatingStyles}
						{...getFloatingProps()}
					>
						{content}
					</div>
				</Portal>
			)}
		</>
	)
}