import { TopBody } from "./UseClient"
import square from "@/assets/Square-Loading 1.png"
import Image from "next/image"
import Cards from "@/components/Cards"
import { useState } from "react"

const Body = () => {
    const [grid, setGrid] = useState(true)

    return (
        <div className="cont-y container-p">
            <TopBody setGrid={setGrid} grid={grid} />
            <Cards categ="mens" limit={10} grid={grid} />
            <div className="w-full flex justify-center cont-y">
                <Image src={square} alt="square" />
            </div>

        </div>
    )
}

export default Body