"use client"

import type { SyntheticEvent } from "react"
import type { AvatarProps } from "./types"

import { useState } from "react"
import { useAvatarGroupContext } from "@/shared/ui/avatar-group"

import { getInitials } from "@/shared/utils/word"

import NextImage from "next/image"
import { RiUser3Fill } from "react-icons/ri"

import { avatarVariants } from "./variants"

export const Avatar = (props: AvatarProps) => {
	const {
		inGroup,
		inGroupGrid,
		...restCtxProps
	} = useAvatarGroupContext()

	const {
		src,
		alt = "avatar",
		tabIndex,
		fallback,
		name,
		icon = <RiUser3Fill/>,
		onLoad,
		onError,

		size,
		color,
		rounded,
		bordered,
		disabled,
		className,
		classNames,

		...restProps
	} = {
		...restCtxProps,
		...props,
	}

	const [loading, setLoading] = useState(true)
	const [showFallback, setShowFallback] = useState(false)

	const handleLoad = (ev: SyntheticEvent<HTMLImageElement>) => {
		setLoading(false)
		onLoad?.(ev)
	}

	const handleError = (ev: SyntheticEvent<HTMLImageElement>) => {
		setLoading(false)
		setShowFallback(true)
		onError?.(ev)
	}

	const slots = avatarVariants({
		size,
		color,
		rounded,
		loading,
		bordered,
		disabled,
		inGroup,
		inGroupGrid,
		className,
	})

	const renderFallback = () => {
		if (fallback) {
			return (
				<div
					role="img"
					aria-label={alt}
					className={slots.fallback({ className: classNames?.fallback })}
				>
					{fallback}
				</div>
			)
		}

		return name ? (
			<span
				role="img"
				aria-label={alt}
				className={slots.name({ className: classNames?.name })}
			>
        {getInitials(name)}
      </span>
		) : (
			<span
				role="img"
				aria-label={alt}
				className={slots.icon({ className: classNames?.icon })}
			>
        {icon}
      </span>
		)
	}

	return (
		<span
			tabIndex={tabIndex}
			className={slots.base({ className: [className, classNames?.base] })}
		>
			{src && !showFallback ? (
				<NextImage
					unoptimized
					fill
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
					src={src}
					className={slots.img({ className: classNames?.img })}
					onLoad={handleLoad}
					onError={handleError}
					alt={alt}
					{...restProps}
				/>
			) : renderFallback()}
		</span>
	)
}