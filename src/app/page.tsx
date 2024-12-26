"use client"

import { Container } from "@/shared/ui/layout"
import { Slider } from "@/shared/ui/slider"

const Home = () => {
	return (
		<Container size="xs" className="pt-12">
			<Slider
				showSteps
				color="primary"
				step={10}
				marks={[
					{
						value: 20,
						label: "20%",
					},
					{
						value: 50,
						label: "50%",
					},
					{
						value: 80,
						label: "80%",
					},
				]}
				defaultValue={[20]}
			/>
		</Container>
	)
}

export default Home