import type { RefCallback } from "react"

import { isFunction } from "./is-function"

export const isRefCallback = <T>(value: unknown): value is RefCallback<T> => {
	return isFunction(value)
}