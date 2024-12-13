export const clampPercentage = (value: number, max: number) => {
	return Math.min(Math.max(value, 0), max)
}