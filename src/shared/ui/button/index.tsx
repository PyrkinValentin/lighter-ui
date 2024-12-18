"use client"

import type { ElementType } from "react"
import type { ButtonProps } from "./types"

import { useButtonGroupContext } from "@/shared/ui/button-group"

import { Spinner } from "@/shared/ui/spinner"

import { buttonVariants } from "./variants"

export const Button = <As extends ElementType = "button">(props: ButtonProps<As>) => {
	const { inGroup, ...restCtxProps } = useButtonGroupContext()

	const {
		as = "button",
		startContent,
		endContent,

		variant,
		size,
		color,
		rounded,
		fullWidth,
		loading,
		disabled,
		iconOnly,
		className,
		classNames,

		children,
		...restProps
	} = {
		...restCtxProps,
		...props,
	} as ButtonProps

	const Tag = as

	const slots = buttonVariants({
		variant,
		size,
		color,
		rounded,
		fullWidth,
		loading,
		disabled,
		inGroup,
		iconOnly,
	})

	return (
		<Tag
			aria-disabled={disabled}
			disabled={disabled}
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			<div className={slots.wrapper({ className: classNames?.wrapper })}>
				{startContent}
				{children}
				{endContent}
			</div>

			{loading &&
				<Spinner
					size={size}
					classNames={{
						base: slots.spinnerBase({ className: classNames?.spinnerBase }),
						spinner: slots.spinner({ className: classNames?.spinner }),
					}}
				/>
			}
		</Tag>
	)
}