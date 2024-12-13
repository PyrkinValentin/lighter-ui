import type { Ref } from "react"

import { isNullOrUndefined } from "@/shared/helpers/is-null-or-undefined"
import { isRefObject } from "@/shared/helpers/is-ref-object"
import { isFunction } from "@/shared/helpers/is-function"

export const mergeRefs = <
	T extends HTMLElement
>(...refs: (Ref<T> | undefined)[]): Ref<T> => {
	const mergeRefs = (instance: T | null) => {
		refs.forEach((ref) => {
			if (isNullOrUndefined(ref)) {
				return
			}

			if (isRefObject(ref)) {
				ref.current = instance
			}

			if (isFunction(ref)) {
				ref(instance)
			}
		})
	}

	return (instance) => {
		mergeRefs(instance)

		return () => mergeRefs(null)
	}
}