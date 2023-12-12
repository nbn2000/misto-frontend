"use client"

import { change } from "@/store/specifations"
import { RootState } from "@/store/store"
import { SVG24, SVG25, SVG44, SVG45, SVG46 } from "@/svg/SVG"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const TopBody = ({ setGrid, grid }: { setGrid: any, grid: boolean }) => {
    const [active, setActive] = useState(false)
    const spec = useSelector((state: RootState) => state.specification.value)
    const dispatch = useDispatch()

    const getValue = (e: string) => {
        dispatch(change({ men: e, women: spec.women, data: spec.data }))
    }
    return (
        <div>
            <div className="flex justify-between items-center flex-wrap">
                <button className="flex flex-row justify-center items-center gap-3" onClick={() => setActive(!active)}>
                    {active ?
                        (
                            <SVG24 />
                        )
                        :
                        (
                            <SVG25 />
                        )

                    }

                    <small className={active ? "btn-text text-dark " : "btn-text text-dark opacity-60"}>FILTER</small>
                </button>
                <div className="flex flex-row justify-center items-center text-center gap-6">
                    <button onClick={() => setGrid(false)}>
                        <SVG44 stroke={!grid ? "#121212" : "#707070"} />
                    </button>
                    <button onClick={() => setGrid(true)} >
                        <SVG45 stroke={grid ? "#121212" : "#707070"} />
                    </button>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 flex flex-row justify-center items-center gap-1 bg-transparent"><small className="btn-text text-dark opacity-60">{spec.women}</small>
                        <SVG46 /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button className="btn-text text-dark opacity-60" onClick={() => getValue("NEW ARRIVALS")}>NEW ARRIVALS</button></li>
                        <li><button className="btn-text text-dark opacity-60" onClick={() => getValue("SPECIALS")}>SPECIALS</button></li>
                        <li><button className="btn-text text-dark opacity-60" onClick={() => getValue("BESTSELLERS")}>BESTSELLERS</button></li>
                        <li><button className="btn-text text-dark opacity-60" onClick={() => getValue("MOST VIEWED")}>MOST VIEWED</button></li>
                        <li><button className="btn-text text-dark opacity-60" onClick={() => getValue("FEATURED PRODUCTS")}>FEATURED PRODUCTS</button></li>
                    </ul>
                </div>
            </div>
            {active && (
                <div className="w-full bg-gr-white py-6 px-10 cont-y flex flex-row justify-between items-center flex-wrap gap-4">
                    <div className="flex flex-col justify-center gap-3">
                        <h3 className="title-14-22 text-dark">Color</h3>
                        <div className="w-52 h-52 overflow-y-scroll flex flex-col gap-4 items-start">
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-black rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">Black</small></button>
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-cyan-600 rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">Cyan</small></button>
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-green-400 rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">Green</small></button>
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-gray-500 rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">Grey</small></button>
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-pink-600 rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">Pink</small></button>
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-white rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">White</small></button>
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-blue-700 rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">Blue</small></button>
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-yellow rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">Yellow</small></button>
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-orange-800 rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">Brown</small></button>
                            <button className="flex flex-row justify-center items-center gap-2"><div className="bg-red-600 rounded-round w-4 h-4"></div>  <small className="btn-text text-dark opacity-80">Red</small></button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-3">
                        <h3 className="title-14-22 text-dark">Size</h3>
                        <div className="w-52 h-52 overflow-y-scroll flex flex-col gap-4 items-start">
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">XL</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">L</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">M</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">S</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">Xs</small></label>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-3">
                        <h3 className="title-14-22 text-dark">Brand</h3>
                        <div className="w-52 h-52 overflow-y-scroll flex flex-col gap-4 items-start">
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">Ck</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">H&M</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">Kalles</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">Levi's</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">Monki</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">Nike</small></label>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-3">
                        <h3 className="title-14-22 text-dark">Price</h3>
                        <div className="w-52 h-52 overflow-y-scroll flex flex-col gap-4 items-start">
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">$1200+</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">$600-$1200</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">$300-$600</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">$150-$300</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">$50-$150</small></label>
                            <label htmlFor="check" className="flex flex-row justify-center items-center gap-2"><input type="checkbox" id="check" />  <small className="btn-text text-dark opacity-80">$7-$50</small></label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
