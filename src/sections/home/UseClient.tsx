"use client"
import { change } from "@/store/specifations"
import { RootState } from "@/store/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const WomensHeader = () => {
    const [clicked, setClicked] = useState(1)
    const state = useSelector((state: RootState) => state.specification.value)
    const dispatch = useDispatch()
    const headFunc = (e: number, d: string) => {
        setClicked(e)
        dispatch(change({ men: state.men, women: d, data: state.data }))
    }
    return (
        <div className="flex flex-row justify-between items-center md:flex-col md:justify-center md:gap-5">
            <h2 className="title-22-30 text-dark ">WOMEN’S</h2>
            <div className="flex flex-row flex-wrap items-center justify-center gap-5">
                <button className={clicked !== 1 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(1, "NEW ARRIVALS")}>NEW ARRIVALS</button>
                <button className={clicked !== 2 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(2, "SPECIALS")}>SPECIALS</button>
                <button className={clicked !== 3 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(3, "BESTSELLERS")}>BESTSELLERS</button>
                <button className={clicked !== 4 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(4, "MOST VIEWED")}>MOST VIEWED</button>
                <button className={clicked !== 5 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(5, "FEATURED PRODUCTS")}>FEATURED PRODUCTS</button>
            </div>
        </div>
    )
}

export const MensHeader = () => {
    const [clicked, setClicked] = useState(1)
    const state = useSelector((state: RootState) => state.specification.value)
    const dispatch = useDispatch()
    const headFunc = (e: number, d: string) => {
        setClicked(e)
        dispatch(change({ men: d, women: state.women, data: state.data }))
    }
    return (
        <div className="flex flex-row justify-between items-center md:flex-col md:justify-center md:gap-5">
            <h2 className="title-22-30 text-dark ">MEN’S</h2>
            <div className="flex flex-row flex-wrap items-center justify-center gap-5">
                <button className={clicked !== 1 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(1, "NEW ARRIVALS")}>NEW ARRIVALS</button>
                <button className={clicked !== 2 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(2, "SPECIALS")}>SPECIALS</button>
                <button className={clicked !== 3 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(3, "BESTSELLERS")}>BESTSELLERS</button>
                <button className={clicked !== 4 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(4, "MOST VIEWED")}>MOST VIEWED</button>
                <button className={clicked !== 5 ? 'subtitle-12-18 text-dark opacity-60' : 'subtitle-12-18 text-dark'} onClick={() => headFunc(5, "FEATURED PRODUCTS")}>FEATURED PRODUCTS</button>
            </div>
        </div>
    )
}