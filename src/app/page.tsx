"use client"

import { Container } from "@/shared/ui/layout"
import { Pagination } from "@/shared/ui/pagination_2"

const Home = () => {
	return (
		<Container size="xs">
			<Pagination
				loop
				showControls
				defaultPage={1}
				totalPages={10}
			/>
		</Container>
	)
}

export default Home