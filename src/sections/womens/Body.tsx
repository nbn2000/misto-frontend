import { TopBody } from "./UseClient"
import square from "@/assets/Square-Loading 1.png"
import Image from "next/image"
import Cards from "@/components/Cards"

const Body = () => {
    return (
        <div className="cont-y container-p">
            <TopBody />
            <Cards categ="womens" limit={20} />
            <div className="w-full flex justify-center cont-y">
                <Image src={square} alt="square" />
            </div>

        </div>
    )
}

export default Body