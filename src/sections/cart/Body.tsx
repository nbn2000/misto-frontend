"use client"
import { ObjectData, ObjectInterface } from "@/data/object"
import Image from "next/image"
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoIosTrash } from "react-icons/io"
import { IoCartOutline } from "react-icons/io5";
import useGetState from "@/hooks/useGetState";
import usePostState from "@/hooks/usePostState";

const Body = () => {
    const data = useGetState()
    const { updateState } = usePostState()
    const objsNotFiltered = data ? data.data : [];
    const objs = objsNotFiltered?.filter(obj => obj.quantity !== 0)


    if (objs === null || objs === undefined || objs.length === 0) {
        return (
            <div className="w-full flex flex-col justify-center items-center gap-12 p-14">
                <IoCartOutline className="text-dark text-9xl opacity-60 sm:text-6xl" />
                <h1 className="text-dark text-5xl text-center opacity-60 sm:text-3xl">Your Cart is Empty</h1>
                <Link href='/' className="text-gr-white text-center whitespace-nowrap font-bold h-12 bg-dark px-6 py-3 uppercase">Go to home page</Link>
            </div>
        )
    }
    const price = objs.map(i => {
        return Number(i.price.replace("$", "")) * i.quantity
    })
    const reduce = price.reduce((ac, cur) => ac + cur, 0)

    const handlePlus = (e: any) => {
        if (Array.isArray(objs)) {
            const array = objs.map(i => {
                if (e.id === i.id) {
                    if (i.quantity < e.stockQuantity) {
                        return { ...i, quantity: i.quantity + 1 };
                    }
                    return i
                }
            }).filter(i => i !== undefined) as ObjectInterface[]
            const objD = [...objs]
            const notArray = objD.filter(i => i.id != e.id)
            const togetherArray = [...notArray, ...array].sort((a: any, b: any) => a.number - b.number)
            updateState(togetherArray)
        }
    }

    const handleMinus = (e: any) => {
        if (Array.isArray(objs)) {
            const array = objs.map(i => {
                if (e.id === i.id) {
                    if (i.quantity >= 2 && i.quantity <= e.stockQuantity) {
                        return { ...i, quantity: i.quantity - 1 };
                    }
                    return i
                }
            }).filter(i => i !== undefined) as ObjectInterface[]
            const objD = [...objs]
            const notArray = objD.filter(i => i.id != e.id)
            const togetherArray = [...notArray, ...array].sort((a: any, b: any) => a.number - b.number)
            updateState(togetherArray)
        }
    }

    const addFav = (e: any) => {
        const newArray = [...objs]
        if (Array.isArray(objs)) {
            const updatedArray = newArray.map(o => {
                if (o.id === e.id) {
                    return { ...o, favourite: !o.favourite };
                }
                return o;
            });
            updateState(updatedArray)
        }
    }

    const deleteCard = (e: any) => {
        const objD = [...objs]
        const deletedArray = objD.filter(i => i.id !== e.id)

        updateState(deletedArray)

    }

    return (
        <div className="container-p cont-y flex flex-row justify-between items-start flex-wrap xl:justify-center xl:flex-col xl:items-center">
            <div className="w-2/3 xl:w-11/12 lg:w-full">
                <div className="flex flex-col items-center gap-4">
                    {
                        Array.isArray(objs) && objs.length > 0 ? objs?.map((obj, idx) => {
                            return (<div key={idx} className="flex flex-row w-full justify-start gap-8 p-4 hover:shadow-box md:flex-col md:justify-center md:items-center">
                                <Link href={`/${obj.category}/${obj.id}`}><Image src={obj.photo} alt="img" width={150} height={150} /></Link>
                                <div className="flex flex-col justify-between items-start h-44">
                                    <div className="flex flex-col items-start gap-2">
                                        <Link href={`/${obj.category}/${obj.id}`}><h4 className="title-22-30 text-dark">{obj.name}</h4></Link>
                                        <h3 className="body-14-22 text-dark !capitalize"><small className="opacity-60 body-14-22">Color:</small>{obj.description.color}</h3>
                                        <div className="flex flex-row gap-5 items-center justify-center">
                                            <select className="flex flex-row justify-center items-center gap-1 bg-transparent ">
                                                <option defaultValue="SIZE:" className="btn-text text-dark opacity-60">SIZE:</option>
                                                {obj.description.choiceSize.map((i, idx) => (
                                                    <option value={`${i}`} key={idx} className="btn-text text-dark opacity-60">{i}</option>
                                                ))}
                                            </select>
                                            <div className="flex flex-row justify-center items-center">
                                                <button className="text-lg text-dark w-8 flex justify-center items-center" onClick={() => handleMinus(obj)}>-</button>
                                                <span className="btn-text text-dark opacity-60">{obj.quantity}</span>
                                                <button className="text-lg text-dark w-8 flex justify-center items-center" onClick={() => handlePlus(obj)}>+</button>
                                            </div>


                                        </div>
                                        <h3 className="title-22-30 text-dark md:text-base">{obj.price}</h3>
                                    </div>
                                    <div className="flex flex-row items-center gap-4">
                                        <button onClick={() => deleteCard(obj)}>
                                            <IoIosTrash className="w-7 h-7" />
                                        </button>
                                        <button onClick={() => addFav(obj)}>
                                            {obj.favourite ? <AiFillHeart className="w-7 h-7" /> : <AiOutlineHeart className="w-7 h-7" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            )
                        }) : <></>
                    }
                </div>
            </div>
            <div className="w-1/3 p-4 flex flex-col justify-center gap-6 xl:w-7/12 lg:w-3/4 md:!w-full sticky top-4 xl:static">
                <div className="flex justify-between flex-row items-center">
                    <h4 className="title-22-30 text-dark opacity-60">TOTAL:</h4>
                    <h4 className="title-22-30 text-dark">{`$ ${reduce}.00`}</h4>
                </div>
                <div>
                    <h3 className="body-14-22 text-dark"><small className="opacity-60 body-14-22">Product: </small>{objs.length}</h3>
                    <h3 className="body-14-22 text-dark"><small className="opacity-60 body-14-22">Discount: </small> -$10</h3>
                </div>
                <hr className="w-full h-0.5 bg-grey" />
                <button className="btn-text text-gr-white h-12 w-full bg-dark px-6">CHECKOUT</button>
                <hr className="w-full h-0.5 bg-grey" />
                <p className="text-sm font-normal leading-5 text-dark opacity-80 w-full">By ordering, you agree to the terms of use of the trading platform</p>
            </div>
        </div>
    )
}

export default Body