import { useCallback, useEffect, useRef } from "react"

export const useDebounceCallback = <
	Callback extends (...args: never[]) => unknown
>(callback?: Callback, delay?: number) => {
	const callbackRef = useRef(callback)
	const timeoutIdRef = useRef<NodeJS.Timeout>(undefined)

	useEffect(() => () => clearTimeout(timeoutIdRef.current), [callback])

	return useCallback((...value: Parameters<Callback>) => {
		clearTimeout(timeoutIdRef.current)

		const callback = callbackRef.current

		if (callback) {
			timeoutIdRef.current = setTimeout(() => callback(...value), delay)
		}
	}, [delay, callbackRef])
}