"use client"

import type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps, CardContextValue } from "./types"

import { use } from "react"

import { createContext } from "react"
import { cn } from "@/core/theme"

import { cardVariants } from "./variants"

const CardContext = createContext<CardContextValue>({
	headerClassNames: "",
	bodyClassNames: "",
	footerClassNames: "",
})

const useCardContext = () => use(CardContext)

export const Card = (props: CardProps) => {
	const {
		shadow,
		rounded,
		hoverable,
		blurred,
		footerBlurred,
		className,
		classNames,

		children,
		...restProps
	} = props

	const slots = cardVariants({
		shadow,
		rounded,
		hoverable,
		blurred,
		footerBlurred,
	})

	const contextValue: CardContextValue = {
		headerClassNames: slots.header({ className: classNames?.header }),
		bodyClassNames: slots.body({ className: classNames?.body }),
		footerClassNames: slots.footer({ className: classNames?.footer }),
	}

	return (
		<CardContext.Provider value={contextValue}>
			<div className={slots.base({ className: [className, classNames?.base] })} {...restProps}>
				{children}
			</div>
		</CardContext.Provider>
	)
}

export const CardHeader = (props: CardHeaderProps) => {
	const { headerClassNames } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={cn(className, headerClassNames)} {...restProps}>
			{children}
		</div>
	)
}

export const CardBody = (props: CardBodyProps) => {
	const { bodyClassNames } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={cn(className, bodyClassNames)} {...restProps}>
			{children}
		</div>
	)
}

export const CardFooter = (props: CardFooterProps) => {
	const { footerClassNames } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={cn(className, footerClassNames)} {...restProps}>
			{children}
		</div>
	)
}