import Header from "@/sections/favourite/Header"
import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('@/sections/favourite/Body'), { ssr: false })

const index = () => {
    return (

        <div>
            <Header />
            <NoSSR />
        </div>
    )
}

export default index