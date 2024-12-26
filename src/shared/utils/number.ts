import { isArray } from "@/shared/helpers/is-array"

export const numberFormat = (
	options?: Intl.NumberFormatOptions,
	locales: Intl.LocalesArgument = "BY",
) => new Intl.NumberFormat(locales, options)

export const numberArrayFormat = (
	options?: Intl.NumberFormatOptions,
	locales?: Intl.LocalesArgument,
) => {
	return {
		format: (value: number[]) => {
			return value.map<string>((v) => numberFormat(options, locales).format(v))
		},
		formatRange: (value: number[]) => {
			return value.reduce<string[]>((acc, curr, index) => {
				return index === value.length - 1
					? acc
					: [...acc, numberFormat(options, locales).formatRange(curr, value[index + 1])]
			}, [])
		}
	}
}

export const numberFindClosest = (array: number[], value: number) => {
	return array.reduce((prev, curr) => {
		return Math.abs(curr - value) < Math.abs(prev - value)
			? curr
			: prev
	})
}

export const numberClump = <
	V extends number | number[]
>(value: V, minValue: number, maxValue: number) => {
	const clump = (v: number) => Math.min(Math.max(v, minValue), maxValue)

	return isArray(value)
		? value.map(clump) as V
		: clump(value) as V
}