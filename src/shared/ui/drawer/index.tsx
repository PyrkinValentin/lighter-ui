"use client"

import type { HTMLProps } from "react"
import type { OpenChangeReason } from "@floating-ui/react"

import type {
	DrawerBodyProps, DrawerCloseProps, DrawerContentProps, DrawerContextValue, DrawerFooterProps, DrawerHeaderProps,
	DrawerProps, DrawerTriggerProps
} from "./types"

import { use, useId } from "react"
import { useClick, useDismiss, useFloating, useInteractions, useRole } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"
import { useAnimate } from "@/shared/hooks/use-animate"

import { createContext, cloneElement, isValidElement } from "react"
import { mergeProps } from "@/shared/utils/props"
import { cn } from "@/core/theme"

import { Portal } from "@/shared/ui/portal"
import { Backdrop } from "@/shared/ui/backdrop"
import { FloatingFocusManager } from "@floating-ui/react"

import { drawerVariants } from "./variants"

const DrawerContext = createContext<DrawerContextValue>({})
const useDrawerContext = () => use(DrawerContext)

const classValueWithPlacement = {
	top: {
		initial: "-translate-y-full",
		enter: "translate-y-0",
	},
	right: {
		initial: "translate-x-full",
		enter: "translate-x-0",
	},
	bottom: {
		initial: "translate-y-full",
		enter: "translate-y-0",
	},
	left: {
		initial: "-translate-x-full",
		enter: "translate-x-0",
	},
}

export const Drawer = (props: DrawerProps) => {
	const {
		backdrop,
		lockScroll = true,
		dismissable = true,
		defaultOpen = false,
		open,
		onOpenChange,
		onClose,

		rounded,
		size,
		placement,
		shadow,
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

	const { refs, context } = useFloating({
		open: controlledOpen,
		onOpenChange: handleOpenChange,
	})

	const role = useRole(context, {
		role: "dialog",
	})

	const click = useClick(context)

	const dismiss = useDismiss(context, {
		enabled: dismissable,
		outsidePressEvent: 'mousedown',
	})

	const { getReferenceProps, getFloatingProps } = useInteractions([
		role,
		click,
		dismiss,
	])

	const headerId = useId()
	const bodyId = useId()

	const slots = drawerVariants({
		rounded,
		size,
		placement,
		shadow,
	})

	const contextValue: DrawerContextValue = {
		headerId,
		bodyId,
		triggerRef: refs.setReference,
		contentRef: refs.setFloating,
		getReferenceProps,
		getFloatingProps,
		lockScroll,
		backdrop,
		context,
		placement,
		open: controlledOpen,
		onOpenChange: handleOpenChange,
		baseClassName: slots.base({ className: classNames?.base }),
		headerClassName: slots.header({ className: classNames?.header }),
		bodyClassName: slots.body({ className: classNames?.body }),
		footerClassName: slots.footer({ className: classNames?.footer }),
	}

	return (
		<DrawerContext value={contextValue}>
			{children}
		</DrawerContext>
	)
}

export const DrawerTrigger = (props: DrawerTriggerProps) => {
	const { triggerRef, getReferenceProps } = useDrawerContext()
	const { children } = props

	const validElement = isValidElement<HTMLProps<HTMLElement>>(children)
		? children
		: null

	const triggerOwnProps = {
		ref: triggerRef,
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

export const DrawerClose = (props: DrawerCloseProps) => {
	const { onOpenChange } = useDrawerContext()
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

export const DrawerContent = (props: DrawerContentProps) => {
	const {
		contentRef,
		open,
		backdrop,
		lockScroll,
		context,
		placement = "right",
		getFloatingProps,
		headerId,
		bodyId,
		baseClassName,
	} = useDrawerContext()

	const { children } = props

	const [mounted, backdropClassName] = useAnimate(open, {
		initial: "opacity-0",
		enter: "opacity-100",
	})

	const [, contentClassName] = useAnimate(open, classValueWithPlacement[placement])

	if (!context || !mounted) {
		return <></>
	}

	return (
		<Portal>
			<Backdrop
				lockScroll={lockScroll}
				variant={backdrop}
				className={backdropClassName()}
			/>

			<FloatingFocusManager context={context}>
				<div
					ref={contentRef}
					aria-labelledby={headerId}
					aria-describedby={bodyId}
					className={contentClassName(baseClassName)}
					{...getFloatingProps?.()}
				>
					{children}
				</div>
			</FloatingFocusManager>
		</Portal>
	)
}

export const DrawerHeader = (props: DrawerHeaderProps) => {
	const { headerId, headerClassName } = useDrawerContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<header
			id={headerId}
			className={cn(headerClassName, className)}
			{...restProps}
		>
			{children}
		</header>
	)
}

export const DrawerBody = (props: DrawerBodyProps) => {
	const { bodyId, bodyClassName } = useDrawerContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			id={bodyId}
			className={cn(bodyClassName, className)}
			{...restProps}
		>
			{children}
		</div>
	)
}

export const DrawerFooter = (props: DrawerFooterProps) => {
	const { footerClassName } = useDrawerContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<footer className={cn(footerClassName, className)} {...restProps}>
			{children}
		</footer>
	)
}