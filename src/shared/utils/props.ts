import { cn } from "@/core/theme"
import { mergeRefs } from "@/shared/utils/ref"

import { isFunction } from "@/shared/helpers/is-function"
import { isRef } from "@/shared/helpers/is-ref"
import { isString } from "@/shared/helpers/is-string"
import { isObject } from "@/shared/helpers/is-object"
import { isUndefined } from "@/shared/helpers/is-undefined"

const chain = (...callbacks: unknown[]) => {
	return (...args: unknown[]) => {
		callbacks.forEach((callback) => {
			if (isFunction(callback)) {
				callback(...args)
			}
		})
	}
}

type PropsArgs =
// eslint-disable-next-line
	| Record<string, any>
	| null
	| undefined

type TupleTypes<T> = { [P in keyof T]: T[P] } extends { [key: number]: infer V }
	? NullToObject<V>
	: never

type NullToObject<T> = T extends (null | undefined)
	? never
	: T

type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void)
	? I
	: never

export const mergeProps = <
	P extends [PropsArgs, PropsArgs]
>(...props: P) => {
	const [target, source] = props

	const mergedProps = { ...target }

	for (const key in source) {
		const a = mergedProps[key]
		const b = source[key]

		if (
			key === "ref" &&
			isRef<HTMLElement>(a) &&
			isRef<HTMLElement>(b)
		) {
			mergedProps[key] = mergeRefs(b, a)
		} else if (
			isFunction(a) &&
			isFunction(b)
		) {
			mergedProps[key] = chain(b, a)
		} else if (
			key === "className" &&
			isString(a) &&
			isString(b)
		) {
			mergedProps[key] = cn(b, a)
		} else if (
			key === "style" &&
			isObject(a) &&
			isObject(b)
		) {
			mergedProps[key] = { ...b, ...a }
		} else {
			mergedProps[key] = isUndefined(b)
				? a
				: b
		}
	}

	return mergedProps as UnionToIntersection<TupleTypes<P>>
}