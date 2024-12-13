import type { ReactElement, ReactNode } from "react"

import { Children, isValidElement } from "react"

type MutateChild<T> = (
	child: ReactElement<T>,
	index: number
) => ReactElement<T>

export const getCollectionChildren = <T>(children: ReactNode, mutate?: MutateChild<T>) => {
	const collection = Children.map(children, (child, index) => {
		return isValidElement<T>(child)
			? mutate?.(child, index) ?? child
			: null
	})

	return collection?.filter(Boolean) ?? []
}