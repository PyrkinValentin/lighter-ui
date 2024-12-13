import type { HTMLProps } from "react"
import type { AlertProps } from "./types"

import { cloneElement, isValidElement } from "react"

import { RiInformationFill, RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri"

import { alertVariants } from "./variants"

const icons = {
	default: RiInformationFill,
	primary: RiInformationFill,
	secondary: RiInformationFill,
	success: RiCheckboxCircleFill,
	warning: RiErrorWarningFill,
	danger: RiErrorWarningFill,
}

const getDefaultIcon = (color: AlertProps["color"] = "default") => {
	return icons[color]
}

export const Alert = (props: AlertProps) => {
	const {
		hideIcon,
		title,
		icon,
		startContent,
		endContent,

		variant,
		color,
		rounded,
		className,
		classNames,

		children,
		...restProps
	} = props

	const slots = alertVariants({
		variant,
		color,
		rounded,
	})

	const validElement = icon && isValidElement<HTMLProps<SVGSVGElement>>(icon)
		? icon
		: null

	const customIcon = validElement
		? cloneElement(validElement, { className: slots.icon({ className: classNames?.icon }) })
		: null

	const Icon = getDefaultIcon(color)

	return (
		<div
			role="alert"
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			{startContent ? startContent : !hideIcon ? (
				<div className={slots.iconWrapper({ className: classNames?.iconWrapper })}>
					{customIcon ?? <Icon className={slots.icon({ className: classNames?.icon })}/>}
				</div>
			) : null}

			<div className={slots.wrapper({ className: classNames?.wrapper })}>
				{title ? (
					<div className={slots.title({ className: classNames?.title })}>
						{title}
					</div>
				) : null}

				{children ? (
					<div className={slots.message({ className: classNames?.message })}>
						{children}
					</div>
				) : null}
			</div>

			{endContent}
		</div>
	)
}