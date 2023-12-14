import Body from "@/sections/womens/Body"
import Header from "@/sections/womens/Header"
import { Helmet } from "react-helmet-async"
const Womens = () => {

    return (
        <div>
            <Helmet>
                <title>Womens Page</title>
            </Helmet>
            <Header />
            <Body />
        </div>
    )
}

export default Womens