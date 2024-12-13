import { useState } from "react"

import { isUndefined } from "@/shared/helpers/is-undefined"

type UseControlledStateOptions<
	Value,
	SetValue extends (...args: readonly never[]) => unknown,
> = {
	defaultValue: Value
	value?: Value
	setValue?: SetValue
}

export const useControlledState = <
	Value,
	SetValue extends (...args: readonly never[]) => unknown,
>(options: UseControlledStateOptions<Value, SetValue>) => {
	const {
		defaultValue,
		value,
		setValue,
	} = options

	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)

	const controlled = !isUndefined(value)

	const state = controlled
		? value
		: uncontrolledValue

	const setState = controlled
		? setValue
		: setUncontrolledValue as unknown as SetValue

	return [state, setState, controlled] as const
}