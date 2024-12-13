"use client"

import type { HTMLProps } from "react"
import type { AvatarGroupContextValue, AvatarGroupProps } from "./types"

import { createContext } from "react"
import { getCollectionChildren } from "@/shared/utils/children"

import { Avatar } from "@/shared/ui/avatar"

import { avatarGroupVariants } from "./variants"

export const AvatarGroupContext = createContext<AvatarGroupContextValue>({})

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

	const collectionChildren = getCollectionChildren<HTMLProps<HTMLElement>>(children)
	const childrenWithinMax = collectionChildren.slice(0, max)
	const remainingCount = collectionChildren.length - childrenWithinMax.length

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