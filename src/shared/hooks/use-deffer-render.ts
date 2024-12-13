import { useEffect, useState } from "react"

export const useDefferRender = (defer?: boolean, ms?: number) => {
	const [deferred, setDeferred] = useState(Boolean(defer))

	useEffect(() => {
		if (defer && !deferred) {
			setDeferred(true)
		}

		if (!defer && deferred) {
			const timeoutId = setTimeout(() => setDeferred(false), ms)

			return () => clearTimeout(timeoutId)
		}
	}, [ms, deferred, defer])

	return deferred
}