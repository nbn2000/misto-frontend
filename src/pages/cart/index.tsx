import Header from "@/sections/cart/Header"
import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('@/sections/cart/Body'), { ssr: false })

const Cart = () => {
    return (

        <div>
            <Header />
            <NoSSR />
        </div>
    )
}

export default Cart