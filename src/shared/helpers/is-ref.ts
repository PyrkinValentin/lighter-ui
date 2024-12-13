import type { Ref } from "react"

import { isRefObject } from "./is-ref-object"
import { isRefCallback } from "./is-ref-callback"

export const isRef = <T>(value: unknown): value is Ref<T> => {
	return isRefObject(value) || isRefCallback(value)
}