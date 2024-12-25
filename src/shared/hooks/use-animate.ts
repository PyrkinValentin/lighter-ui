import type { ClassValue, CnReturn } from "tailwind-variants"

import { useEffect, useMemo, useState } from "react"
import { useFirstRender } from "@/shared/hooks/use-first-render"
import { useDefferRender } from "@/shared/hooks/use-deffer-render"

import { cn, tv } from "@/core/theme"

type Duration =
	| "duration-0"
	| "duration-75"
	| "duration-100"
	| "duration-150"
	| "duration-200"
	| "duration-300"
	| "duration-500"
	| "duration-1000"

type UseAnimationOptions = {
	base?: string
	initial: string
	enter: string
	duration?: Duration
}

type GetClassName = (mergeClassValue?: ClassValue) => CnReturn

const parseDuration = (duration: string) => Number(duration.split("-").at(1))

export const useAnimate = (on: boolean = false, options?: UseAnimationOptions) => {
	const {
		base,
		initial,
		enter,
		duration = "duration-300",
	} = options ?? {}

	const animate = useMemo(() => tv({
		base: ["transition", base, duration],
		variants: {
			on: {
				true: enter,
				false: initial,
			},
		},
	}), [
		base,
		duration,
		enter,
		initial,
	])

	const firstRender = useFirstRender()
	const ms = useMemo(() => parseDuration(duration), [duration])
	const mounted = useDefferRender(on, ms)

	const [className, setClassName] = useState(() => animate({ on }))

	useEffect(() => {
		if (firstRender || !mounted) return

		const frame = requestAnimationFrame(() => {
			setClassName(animate({ on }))
		})

		return () => cancelAnimationFrame(frame)
	}, [on, mounted, animate, firstRender])

	const getClassName: GetClassName = (mergeClassValue) => {
		return mergeClassValue
			? cn(className, mergeClassValue)
			: className
	}

	return [mounted, getClassName] as const
}