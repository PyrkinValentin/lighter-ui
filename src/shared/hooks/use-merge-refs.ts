import type { RefObject, Ref } from "react"

import { isFunction } from "@/shared/helpers/is-function"

export const useMergeRefs = <
	T extends HTMLElement
>(...refs: (Ref<T> | undefined)[]): Ref<T> => {
	const filteredRefs = refs.filter(Boolean)

	const mergeRefs = (ref: T | null) => {
		filteredRefs.forEach((inputRef) => {
			if (isFunction(inputRef)) {
				inputRef(ref)
			}

			if (inputRef) {
				(inputRef as RefObject<T | null>).current = ref
			}
		})
	}

	return (ref) => {
		mergeRefs(ref)

		return () => mergeRefs(null)
	}
}