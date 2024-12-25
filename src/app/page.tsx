"use client"

import { useState } from "react"

import { Container } from "@/shared/ui/layout"
import { Slider } from "@/shared/ui/slider"
import { Chip } from "@/shared/ui/chip"

const Home = () => {
	const [value, setValue] = useState<[number, number]>([1.5, 4])

	return (
		<Container size="xs" className="pt-12">
			<Slider
				color="secondary"
				formatOptions={{ signDisplay: "always" }}
				label="Exposure"
				renderValue={({ value }) => <Chip size="sm" variant="faded">My donuts {value.join(" of ")}</Chip>}
				minValue={-20}
				maxValue={60}
				showTooltip
				value={value}
				onValueChange={setValue}
				step={1}
			/>
		</Container>
	)
}

export default Home