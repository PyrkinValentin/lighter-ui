// eslint-disable-next-line
// @ts-expect-error
import { parseColor } from "tailwindcss/lib/util/color"

export const rem = (value: number) => `${(1 / 16) * value}rem`
export const spacing = (value: number) => `${value * 0.25}rem`
export const color = (value: string): string => parseColor(value).color.toString().replaceAll(",", " ")