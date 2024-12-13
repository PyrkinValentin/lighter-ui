import type { ChipProps } from "./types"

import { IoMdCloseCircle } from "react-icons/io"

import { chipVariants } from "./variants"

export const Chip = (props: ChipProps) => {
	const {
		avatar,
		startContent,
		endContent,
		onClose,

		variant,
		color,
		size,
		disabled,
		className,
		classNames,

		children,
		...restProps
	} = props

	const slots = chipVariants({
		variant,
		color,
		size,
		hasStartContent: Boolean(startContent),
		hasEndContent: Boolean(endContent),
		disabled,
	})

	return (
		<div className={slots.base({ className: [className, classNames?.base] })} {...restProps}>
			{startContent ? startContent : avatar ? (
				<span className={slots.avatar({ className: classNames?.avatar })}>{avatar}</span>
			) : variant === "dot" ? (
				<span className={slots.dot({ className: classNames?.dot })}/>
			) : null}

			<span className={slots.content({ className: classNames?.content })}>
				{children}
			</span>

			{onClose ? (
				<span
					role="button"
					aria-label="Close"
					tabIndex={0}
					className={slots.closeButton({ className: classNames?.closeButton })}
					onClick={onClose}
				>
					{endContent ?? <IoMdCloseCircle/>}
				</span>
			) : endContent}
		</div>
	)
}