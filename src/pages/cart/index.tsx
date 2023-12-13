import Header from "@/sections/cart/Header"
import dynamic from 'next/dynamic'
import { Helmet } from "react-helmet-async"

const NoSSR = dynamic(() => import('@/sections/cart/Body'), { ssr: false })

const Cart = () => {
    return (

        <div>
            <Helmet>
                <title>
                    Cart
                </title>
            </Helmet>
            <Header />
            <NoSSR />
        </div>
    )
}

export default Cart