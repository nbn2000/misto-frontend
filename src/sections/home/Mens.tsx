import { MensHeader } from "./UseClient"
import Cards from "@/components/Cards"
import { useState } from "react"

const Mens = () => {
    const [count, setCount] = useState(8)
    const toggleCount = () => {
        if (count === 8) {
            setCount(70)
        } else if (count === 70) {
            setCount(8)
        }
    }
    return (
        <div className="container-p cont-y">
            <MensHeader />
            <Cards categ="mens" limit={count} />
            <button className="w-full bg-gr-white p-6" onClick={toggleCount}><span className="btn-text text-dark opacity-80">{count === 70 ? "SEE LESS" : "SEE ALL"}</span></button>
        </div>
    )
}

export default Mens