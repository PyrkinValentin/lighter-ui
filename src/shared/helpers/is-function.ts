// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isFunction = <T extends Function = Function>(value: unknown): value is T => {
	return typeof value === "function"
}