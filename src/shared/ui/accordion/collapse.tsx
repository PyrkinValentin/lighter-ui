"use client"

import type { CSSProperties, HTMLProps } from "react"
import type { CollapseProps } from "./types"

import { useRef, useState, useEffect } from "react"
import { useDefferRender } from "@/shared/hooks/use-deffer-render"
import { useFirstRender } from "@/shared/hooks/use-first-render"

import { cloneElement, isValidElement } from "react"
import { mergeProps } from "@/shared/utils/props"

const getOpacityProperty = (expanded: boolean, animateOpacity: boolean) => {
	if (!animateOpacity) return

	return expanded
		? { opacity: 1 }
		: { opacity: 0 }
}

export const Collapse = (props: CollapseProps) => {
	const {
		keepMounted,
		animateOpacity = true,
		expanded,
		duration = 300,
		ease = "ease-in-out",
		children,
	} = props

	const wrapperRef = useRef<HTMLDivElement>(null)

	const firstRender = useFirstRender()
	const mounted = useDefferRender(Boolean(expanded), duration)

	const [styles, setStyles] = useState<CSSProperties>({
		transitionProperty: "height, opacity",
		transitionDuration: `${duration}ms`,
		transitionTimingFunction: ease,
		height: expanded ? "auto" : 0,
		...getOpacityProperty(Boolean(expanded), animateOpacity),
	})

	useEffect(() => {
		if (firstRender || !mounted) return

		if (expanded) {
			const frameId = requestAnimationFrame(() => {
				setStyles((prevState) => ({
					...prevState,
					...getOpacityProperty(true, animateOpacity),
					overflowY: "hidden",
					height: wrapperRef.current?.clientHeight,
				}))
			})

			const timeoutId = setTimeout(() => {
				setStyles((prevState) => ({
					...prevState,
					overflowY: "unset",
					height: "auto",
				}))
			}, duration)

			return () => {
				cancelAnimationFrame(frameId)
				clearTimeout(timeoutId)
			}
		} else {
			queueMicrotask(() => {
				setStyles((prevState) => ({
					...prevState,
					overflowY: "hidden",
					height: wrapperRef.current?.clientHeight,
				}))
			})

			const frameId = requestAnimationFrame(() => {
				setStyles((prevState) => ({
					...prevState,
					...getOpacityProperty(false, animateOpacity),
					height: 0,
				}))
			})

			return () => cancelAnimationFrame(frameId)
		}
	}, [
		animateOpacity,
		duration,
		expanded,
		firstRender,
		mounted,
	])

	const validElement = isValidElement<HTMLProps<HTMLElement>>(children)
		? children
		: null

	const elementOwnProps: HTMLProps<HTMLElement> = {
		ref: wrapperRef,
	}

	if (!mounted && !keepMounted) {
		return <></>
	}

	return (
		<div style={styles}>
			{validElement
				? cloneElement(validElement, mergeProps(validElement.props, elementOwnProps))
				: <span {...elementOwnProps}>{children}</span>
			}
		</div>
	)
}