import { isUndefined } from "./is-undefined"

export const isNullOrUndefined = (value: unknown): value is null | undefined => {
	return value === null || isUndefined(value)
}