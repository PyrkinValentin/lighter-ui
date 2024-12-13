import type { FloatingOverlayProps } from "@floating-ui/react"
import type { ComponentProps } from "@/shared/types/props"
import type { BackdropVariantsProps } from "./variants"

export type BackdropProps = ComponentProps<
	"div",
	BackdropVariantsProps &
	FloatingOverlayProps
>