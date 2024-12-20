import { Container } from "@/shared/ui/layout"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"
import { Link } from "@/shared/ui/link"
import { IoMdHome } from "react-icons/io"

const Home = () => {
	return (
		<Container size="sm" className="pt-12">
			<Breadcrumbs>
				<Link href="/"><IoMdHome/> Home</Link>
				<Link href="/">Search</Link>
				Route
			</Breadcrumbs>
		</Container>
	)
}

export default Home