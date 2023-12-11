"use client"
import Image from "next/image"
import starFull from "@/assets/star 1.png"
import starEmpty from "@/assets/star 5.png"
import styles from "@/styles/cards.module.css"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { useRouter } from "next/navigation"
import { LuHeart } from "react-icons/lu";
import Link from "next/link"
import useGetState from "@/hooks/useGetState"
import { ObjectInterface } from "@/data/object"


const Body = () => {
    const router = useRouter()
    const state = useGetState()
    const data = state ? state.data : []
    const checkOne = data ? data.some(obj => obj.favourite === true) : false
    const hasTrue = data && data.filter(obj => obj.favourite === true)
    if (!checkOne) {
        return (
            <div className="w-full flex flex-col justify-center items-center gap-12  p-14">
                <LuHeart className="text-dark text-9xl opacity-60 sm:text-6xl" />
                <h1 className="text-dark text-5xl text-center opacity-60 sm:text-3xl">Opps You have not chosen your favourites yet</h1>
                <Link href='/' className="text-gr-white text-center whitespace-nowrap font-bold h-12 bg-dark px-6 py-3 uppercase">LET'S GO BACK HOME</Link>
            </div>
        )
    }




    return (
        <div className="cont-y container-p">
            <h3>Your Favourites</h3>
            <div className={styles.body}>
                {hasTrue !== undefined && hasTrue !== null && hasTrue.map((i, index) => {
                    return (
                        <div onClick={() => router.push(`/${i.category}/${i.id}`)}
                            key={`${i.id}${index}`}
                            className={styles.innerDiv}
                        >
                            <Image src={i.photo} alt="cloth" className="relative" width={255} />
                            {i.offer !== "" ? (
                                <div className="absolute bg-sale font-bold text-xs text-white p-2">
                                    {i.offer}
                                </div>
                            ) : (
                                <></>
                            )}
                            <h3 className="body-14-22 text-dark opacity-60">{i.name}</h3>
                            <div key={`${i.id}-child`}>
                                {i.oldPrice !== "" ? (
                                    <span className="body-bold text-dark float-left">
                                        {i.price}{" "}
                                        <del className="text-dark opacity-40">{i.oldPrice}</del>
                                    </span>
                                ) : (
                                    <span className="body-bold text-dark float-left">
                                        {i.price}
                                    </span>
                                )}
                                <div
                                    className="float-right flex flex-row p-1"
                                    key={`innerChild-${i.id}`}
                                >
                                    {[...Array(5)].map((_, index) => (
                                        <Image
                                            key={index}
                                            src={index < i.star.length ? starFull : starEmpty}
                                            alt={index < i.star.length ? "star full" : "star empty"}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Body