import { useCallback, useRef } from "react"
import { useIsomorphicEffect } from "@/shared/hooks/use-isomophic-layout"

type CallbackEvent = (...args: never[]) => unknown

export const useCallbackEvent = <F extends CallbackEvent>(callback?: F) => {
	const callbackRef = useRef<F>(callback)

	useIsomorphicEffect(() => {
		callbackRef.current = callback
	})

	return useCallback<CallbackEvent>((...args) => {
		return callbackRef.current?.(...args)
	}, []) as F
}