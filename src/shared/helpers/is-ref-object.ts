import type { RefObject } from "react"

import { isObject } from "./is-object"

export const isRefObject = <T>(value: unknown): value is RefObject<T> => {
	return isObject(value)
}