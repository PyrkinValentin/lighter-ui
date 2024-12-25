import { useCallback, useEffect, useRef } from "react"
import { useCallbackEvent } from "@/shared/hooks/use-callback-event"

export const useDebounceCallback = <
	Callback extends (...args: never[]) => unknown
>(callback?: Callback, delay?: number) => {
	const timeoutIdRef = useRef<NodeJS.Timeout>(undefined)
	const callbackEvent = useCallbackEvent(callback)

	useEffect(() => () => clearTimeout(timeoutIdRef.current), [callback])

	return useCallback((...value: Parameters<Callback>) => {
		clearTimeout(timeoutIdRef.current)

		if (callbackEvent) {
			timeoutIdRef.current = setTimeout(() => callbackEvent(...value), delay)
		}
	}, [callbackEvent, delay])
}