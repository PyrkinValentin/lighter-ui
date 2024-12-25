import { useEffect, useLayoutEffect } from "react"

import { isClient } from "@/shared/helpers/is-client"

export const useIsomorphicEffect =
	isClient()
		? useLayoutEffect
		: useEffect