import Header from "@/sections/favourite/Header"
import dynamic from 'next/dynamic'
import { Helmet } from "react-helmet-async"

const NoSSR = dynamic(() => import('@/sections/favourite/Body'), { ssr: false })

const index = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Favourite
                </title>
            </Helmet>
            <Header />
            <NoSSR />
        </div>
    )
}

export default index