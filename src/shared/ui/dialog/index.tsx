"use client"

import type { HTMLProps } from "react"
import type { OpenChangeReason } from "@floating-ui/react"

import type {
	DialogBodyProps, DialogCloseProps, DialogContentProps, DialogContextValue, DialogFooterProps, DialogHeaderProps,
	DialogProps, DialogTriggerProps
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

import { dialogVariants } from "./variants"

const DialogContext = createContext<DialogContextValue>({})
const useDialogContext = () => use(DialogContext)

export const Dialog = (props: DialogProps) => {
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

	const slots = dialogVariants({
		rounded,
		size,
		placement,
		shadow,
	})

	const contextValue: DialogContextValue = {
		headerId,
		bodyId,
		triggerRef: refs.setReference,
		contentRef: refs.setFloating,
		getReferenceProps,
		getFloatingProps,
		lockScroll,
		backdrop,
		context,
		open: controlledOpen,
		onOpenChange: handleOpenChange,
		wrapperClassName: slots.wrapper({ className: classNames?.wrapper }),
		baseClassName: slots.base({ className: classNames?.base }),
		headerClassName: slots.header({ className: classNames?.header }),
		bodyClassName: slots.body({ className: classNames?.body }),
		footerClassName: slots.footer({ className: classNames?.footer }),
	}

	return (
		<DialogContext value={contextValue}>
			{children}
		</DialogContext>
	)
}

export const DialogTrigger = (props: DialogTriggerProps) => {
	const { triggerRef, getReferenceProps } = useDialogContext()
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

export const DialogClose = (props: DialogCloseProps) => {
	const { onOpenChange } = useDialogContext()
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

export const DialogContent = (props: DialogContentProps) => {
	const {
		contentRef,
		open,
		backdrop,
		lockScroll,
		context,
		getFloatingProps,
		headerId,
		bodyId,
		wrapperClassName,
		baseClassName,
	} = useDialogContext()

	const { children } = props

	const [mounted, backdropClassName] = useAnimate(open, {
		initial: "opacity-0",
		enter: "opacity-100",
	})

	const [, contentClassName] = useAnimate(open, {
		initial: "scale-[0.97]",
		enter: "scale-100",
	})

	if (!context || !mounted) {
		return <></>
	}

	return (
		<Portal>
			<Backdrop
				lockScroll={lockScroll}
				variant={backdrop}
				className={backdropClassName()}
			>
				<FloatingFocusManager context={context}>
					<div className={wrapperClassName}>
						<div
							ref={contentRef}
							aria-labelledby={headerId}
							aria-describedby={bodyId}
							className={contentClassName(baseClassName)}
							{...getFloatingProps?.()}
						>
							{children}
						</div>
					</div>
				</FloatingFocusManager>
			</Backdrop>
		</Portal>
	)
}

export const DialogHeader = (props: DialogHeaderProps) => {
	const { headerId, headerClassName } = useDialogContext()

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

export const DialogBody = (props: DialogBodyProps) => {
	const { bodyId, bodyClassName } = useDialogContext()

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

export const DialogFooter = (props: DialogFooterProps) => {
	const { footerClassName } = useDialogContext()

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