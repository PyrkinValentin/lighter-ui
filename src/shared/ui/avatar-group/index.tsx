"use client"

import type { AvatarGroupContextValue, AvatarGroupProps } from "./types"

import { use } from "react"

import { Children, createContext } from "react"

import { Avatar } from "@/shared/ui/avatar"

import { avatarGroupVariants } from "./variants"

const AvatarGroupContext = createContext<AvatarGroupContextValue>({})
export const useAvatarGroupContext = () => use(AvatarGroupContext)

export const AvatarGroup = (props: AvatarGroupProps) => {
	const {
		max = 5,
		renderCount,

		grid,
		size,
		color,
		rounded,
		bordered,
		disabled,
		className,
		classNames,

		children,
		...restProps
	} = props

	const collectionAvatars = Children.toArray(children)
	const childrenWithinMax = collectionAvatars.slice(0, max)
	const remainingCount = collectionAvatars.length - childrenWithinMax.length

	const slots = avatarGroupVariants({
		grid,
	})

	const contextValue: AvatarGroupContextValue = {
		inGroup: true,
		inGroupGrid: grid,
		size,
		color,
		rounded,
		bordered,
		disabled,
	}

	return (
		<AvatarGroupContext value={contextValue}>
			<div
				role="group"
				className={slots.base({ className: [className, classNames?.base] })}
				{...restProps}
			>
				{childrenWithinMax}

				{remainingCount
					? renderCount
						? renderCount(remainingCount)
						: <Avatar className={slots.count({ className: classNames?.count })} name={`+${remainingCount}`}/>
					: null
				}
			</div>
		</AvatarGroupContext>
	)
}