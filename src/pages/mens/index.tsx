import Body from "@/sections/mens/Body"
import Header from "@/sections/mens/Header"
import { Helmet } from "react-helmet-async"
const Mens = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Mens Page
                </title>
            </Helmet>
            <Header />
            <Body />
        </div>

    )
}

export default Mens