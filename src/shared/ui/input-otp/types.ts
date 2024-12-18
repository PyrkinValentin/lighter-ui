import type { ReactNode } from "react"
import type { OTPInputProps } from "input-otp"
import type { ComponentProps } from "@/shared/types/props"
import type { InputOTPVariantsProps } from "./variants"

export type InputOtpProps = Omit<ComponentProps<
	"input",
	Pick<
		OTPInputProps,
		| "pushPasswordManagerStrategy"
		| "pasteTransformer"
	> &
	InputOtpOwnProps &
	InputOTPVariantsProps
>, "onChange" | "children">

type InputOtpOwnProps = {
	length?: number
	allowedKeys?: string
	description?: ReactNode
	errorMessage?: ReactNode
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
	onComplete?: (value: string) => void
}