import type { RefObject } from "react"

import { useEffect, useRef, useState } from "react"
import { useDebounceCallback } from "@/shared/hooks/use-debounce-callback"

import { isUndefined } from "@/shared/helpers/is-undefined"

type UseScrollTriggerOptions = {
	enabled?: boolean
	disableHysteresis?: boolean
	target?: RefObject<HTMLElement>
	threshold?: number
	delay?: number
}

function getTrigger(store: RefObject<number | undefined>, options: UseScrollTriggerOptions) {
	const {
		disableHysteresis,
		threshold = 0,
		target,
	} = options

	const previous = store.current

	store.current = target?.current
		? target.current.scrollTop
		: window.scrollY

	if (!disableHysteresis && !isUndefined(previous)) {
		if (store.current < previous) {
			return false
		}
	}

	return store.current > threshold
}

export const useScrollTrigger = (options?: UseScrollTriggerOptions) => {
	const {
		enabled = true,
		target,
		disableHysteresis,
		threshold,
		delay,
	} = options ?? {}

	const store = useRef<number | undefined>(undefined)

	const [trigger, setTrigger] = useState(false)

	const debouncedTrigger = useDebounceCallback(setTrigger, delay)

	useEffect(() => {
		if (!enabled) return		
		
		const scrollListener = () => {
			debouncedTrigger(
				getTrigger(store, {
					target,
					disableHysteresis,
					threshold,
				})
			)
		}

		scrollListener()

		const element = target?.current ?? window

		element?.addEventListener("scroll", scrollListener, { passive: true })

		return () => {
			element?.removeEventListener("scroll", scrollListener)
		}
	}, [
		target,
		disableHysteresis,
		threshold,
		debouncedTrigger,
		enabled,
	])

	return trigger
}