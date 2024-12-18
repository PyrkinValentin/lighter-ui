import type { ElementType, MouseEvent } from "react"
import type { TabListProps, TabPanelProps, TabProps, TabsContextValue, TabsProps } from "./types"

import { use } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"
import { cn } from "@/core/theme"

import { tabsVariants } from "./variants"

const TabsContext = createContext<TabsContextValue>({})
const useTabsContext = () => use(TabsContext)

export const Tabs = (props: TabsProps) => {
	const {
		keepMounted,
		disabledValue,
		defaultValue,
		value,
		onValueChange,

		variant,
		color,
		size,
		rounded,
		fullWidth,
		disabled: disabledProp,
		placement,
		className,
		classNames,

		children,
		...restProps
	} = props

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange,
	})

	const disabled = (value: string) => {
		return disabledProp || disabledValue?.includes(value) || undefined
	}

	const selected = (value: string) => value === controlledValue || undefined

	const slots = tabsVariants({
		variant,
		color,
		size,
		rounded,
		fullWidth,
		disabled: disabledProp,
		placement,
	})

	const contextValue: TabsContextValue = {
		keepMounted,
		disabled,
		selected,
		onSelectedChange: setControlledValue,
		tabListClassName: slots.tabList({ className: classNames?.tabList }),
		tabClassName: slots.tab({ className: classNames?.tab }),
		tabPanelClassName: slots.tabPanel({ className: classNames?.tabPanel }),
	}

	return (
		<TabsContext value={contextValue}>
			<div
				className={slots.base({ className: [className, classNames?.base] })}
				{...restProps}
			>
				{children}
			</div>
		</TabsContext>
	)
}

export const TabList = (props: TabListProps) => {
	const { tabListClassName } = useTabsContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			role="tablist"
			aria-orientation="horizontal"
			className={cn(tabListClassName, className)}
			{...restProps}
		>
			{children}
		</div>
	)
}

export const Tab = <As extends ElementType = "button">(props: TabProps<As>) => {
	const {
		disabled: disabledCtx,
		selected,
		onSelectedChange,
		tabClassName,
	} = useTabsContext()

	const {
		as = "button",
		value,
		disabled = disabledCtx?.(value),
		onClick,
		className,
		children,
		...restProps
	} = props as TabProps

	const isSelected = selected?.(value)

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		onSelectedChange?.(value)
		onClick?.(ev)
	}

	const Tag = as

	return (
		<Tag
			role="tab"
			id={`tab-${value}`}
			aria-controls={`tabpanel-${value}`}
			aria-selected={isSelected}
			disabled={disabled}
			className={cn(tabClassName, className)}
			onClick={handleClick}
			{...restProps}
		>
			{children}
		</Tag>
	)
}

export const TabPanel = (props: TabPanelProps) => {
	const {
		keepMounted,
		selected,
		tabPanelClassName,
	} = useTabsContext()

	const {
		value,
		className,
		children,
		...restProps
	} = props

	const isSelected = selected?.(value)

	if (!isSelected && !keepMounted) {
		return <></>
	}

	return (
		<div
			role="tabpanel"
			id={`tabpanel-${value}`}
			aria-labelledby={`tab-${value}`}
			aria-selected={isSelected}
			className={cn(tabPanelClassName, className)}
			{...restProps}
		>
			{children}
		</div>
	)
}