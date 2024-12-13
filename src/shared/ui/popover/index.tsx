"use client"

import type { HTMLProps } from "react"
import type { OpenChangeReason } from "@floating-ui/react"
import type {
	PopoverCloseProps,
	PopoverContentProps,
	PopoverContextValue,
	PopoverProps,
	PopoverTriggerProps
} from "./types"

import { use } from "react"
import { useFloating, useClick, useDismiss, useInteractions, useRole } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"
import { useAnimate } from "@/shared/hooks/use-animate"

import { cloneElement, createContext, isValidElement } from "react"
import { autoUpdate, flip, offset, shift } from "@floating-ui/react"
import { mergeProps } from "@/shared/utils/props"

import { Portal } from "@/shared/ui/portal"
import { Backdrop } from "@/shared/ui/backdrop"
import { FloatingFocusManager } from "@floating-ui/react"

import { popoverVariants } from "./variants"

const PopoverContext = createContext<PopoverContextValue>({})

const usePopoverContext = () => use(PopoverContext)

const keepFocusWithinElementList: PopoverProps["type"][] = ["menu", "select"]

export const Popover = (props: PopoverProps) => {
	const {
		type,
		placement,
		lockScroll,
		backdrop = "transparent",
		dismissable = true,

		defaultOpen = false,
		open,
		onOpenChange,
		onClose,
		offset: offsetProp = 7,

		size,
		color,
		rounded,
		shadow,
		triggerScaleOnOpen,
		classNames,

		children,
	} = props

	const [controlledOpen, setControlledOpen] = useControlledState({
		defaultValue: defaultOpen,
		value: open,
		setValue: onOpenChange,
	})

	const handleOpenChange = (open: boolean, _ev?: Event, reason?: OpenChangeReason) => {
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
		role: type,
	})

	const click = useClick(context)

	const dismiss = useDismiss(context, {
		enabled: dismissable,
		ancestorScroll: true,
	})

	const { getReferenceProps, getFloatingProps } = useInteractions([
		role,
		click,
		dismiss,
	])

	const keepFocusWithinElement = keepFocusWithinElementList.includes(type)

	const slots = popoverVariants({
		color,
		size,
		shadow,
		rounded,
		triggerScaleOnOpen,
	})

	const contextValue: PopoverContextValue = {
		triggerRef: refs.setReference,
		triggerClassName: slots.trigger({ className: classNames?.trigger }),
		getReferenceProps,
		contentRef: refs.setFloating,
		baseClassName: slots.base({ className: classNames?.base }),
		open: controlledOpen,
		lockScroll,
		backdrop,
		context,
		getFloatingProps,
		floatingStyles,
		keepFocusWithinElement,
		onOpenChange: handleOpenChange,
	}

	return (
		<PopoverContext value={contextValue}>
			{children}
		</PopoverContext>
	)
}

export const PopoverTrigger = (props: PopoverTriggerProps) => {
	const {
		triggerRef,
		triggerClassName,
		getReferenceProps,
	} = usePopoverContext()

	const { children } = props

	const validElement = isValidElement<HTMLProps<HTMLElement>>(children)
		? children
		: null

	const triggerOwnProps = {
		ref: triggerRef,
		className: triggerClassName,
		...getReferenceProps?.(),
	}

	return (
		<>
			{validElement
				? cloneElement(validElement, mergeProps(validElement.props, triggerOwnProps))
				: <span {...triggerOwnProps}>{children}</span>
			}
		</>
	)
}

export const PopoverClose = (props: PopoverCloseProps) => {
	const { onOpenChange } = usePopoverContext()
	const { children } = props

	const handleClick = () => {
		onOpenChange?.(false)
	}

	const validElement = isValidElement<HTMLProps<HTMLElement>>(children)
		? children
		: null

	const closeOwnProps = {
		onClick: handleClick,
	}

	return (
		<>
			{validElement
				? cloneElement(validElement, mergeProps(validElement.props, closeOwnProps))
				: <span {...closeOwnProps}>{children}</span>
			}
		</>
	)
}

export const PopoverContent = (props: PopoverContentProps) => {
	const {
		contentRef,
		baseClassName,
		open = false,
		backdrop,
		lockScroll,
		context,
		getFloatingProps,
		floatingStyles,
		keepFocusWithinElement,
	} = usePopoverContext()

	const { children } = props

	const [mounted, backdropClassName] = useAnimate(open, {
		initial: "opacity-0",
		enter: "opacity-100",
	})

	const [, contentClassName] = useAnimate(open, {
		initial: "scale-90",
		enter: "scale-100",
	})

	if (!context || !mounted) {
		return <></>
	}

	return (
		<Portal>
			<Backdrop
				variant={backdrop}
				lockScroll={lockScroll}
				className={backdropClassName()}
			>
				<FloatingFocusManager
					context={context}
					modal={keepFocusWithinElement}
				>
					<div
						ref={contentRef}
						className={contentClassName(baseClassName)}
						style={floatingStyles}
						{...getFloatingProps?.()}
					>
						{children}
					</div>
				</FloatingFocusManager>
			</Backdrop>
		</Portal>
	)
}