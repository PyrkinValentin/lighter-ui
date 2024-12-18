"use client"

import type { HTMLInputTypeAttribute } from "react"
import type { SlotProps } from "input-otp"
import type { InputOtpProps } from "./types"

import { useId } from "react"

import { OTPInput } from "input-otp"
import { HelperText } from "@/shared/ui/helper-text"

import { inputOTPVariants } from "./variants"

export const InputOtp = (props: InputOtpProps) => {
	const {
		allowedKeys = "^[0-9]*$",
		length = 5,
		description,
		errorMessage,
		onValueChange,

		variant,
		error,
		disabled,
		readOnly,
		fullWidth,
		rounded,
		color,
		size,
		className,
		classNames,

		type,
		...restProps
	} = props

	const helperTextId = useId()

	const slots = inputOTPVariants({
		variant,
		error,
		disabled,
		readOnly,
		fullWidth,
		rounded,
		color,
		size,
	})

	return (
		<div role="base" className={slots.base({ className: [className, classNames?.base] })}>
			<OTPInput
				containerClassName={slots.wrapper({ className: classNames?.wrapper })}
				aria-describedby={helperTextId}
				type={type}
				disabled={disabled}
				readOnly={readOnly}
				pattern={allowedKeys}
				maxLength={length}
				minLength={length}
				noScriptCSSFallback={null}
				onChange={onValueChange}
				render={(renderOTPProps) => (
					<div className={slots.segmentWrapper({ className: classNames?.segmentWrapper })}>
						{renderOTPProps.slots.map((slot, i) => (
							<InputOtpSegment
								key={i}
								type={type}
								className={slots.segment({ className: classNames?.segment })}
								caretClassName={slots.caret({ className: classNames?.caret })}
								passwordCharClassName={slots.passwordChar({ className: classNames?.passwordChar })}
								{...slot}
							/>
						))}
					</div>
				)}
				{...restProps}
			/>

			{((error && errorMessage) || description) ? (
				<HelperText
					id={helperTextId}
					error={error}
					className={slots.helperText({ className: classNames?.helperText })}
				>
					{error && errorMessage
						? errorMessage
						: description
					}
				</HelperText>
			) : null}
		</div>
	)
}

type InputOtpSegmentProps = SlotProps & {
	type?: HTMLInputTypeAttribute
	className?: string
	caretClassName?: string
	passwordCharClassName?: string
}

const InputOtpSegment = (props: InputOtpSegmentProps) => {
	const {
		placeholderChar,
		char,
		isActive,
		type,
		className,
		caretClassName,
		passwordCharClassName,
	} = props

	const displayValue = () => {
		if (isActive && !char) {
			return <div className={caretClassName}/>
		}

		if (char) {
			return type === "password"
				? <div className={passwordCharClassName}/>
				: <div>{char}</div>
		}

		return <div>{placeholderChar}</div>
	}

	return (
		<div role="presentation" data-active={isActive} className={className}>
			{displayValue()}
		</div>
	)
}