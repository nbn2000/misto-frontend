'use client'
import Image from "next/image"
import starFull from "@/assets/star 1.png"
import starEmpty from "@/assets/star 5.png"
import { ObjectData } from "@/data/object"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { memo } from "react"
import { useRouter } from "next/navigation";
import styles from "@/styles/cards.module.css"

const Cards = ({ categ, limit = ObjectData.length, grid = true }: { categ: string, limit?: number, grid?: boolean }) => {
    const router = useRouter()
    const specMen = useSelector((state: RootState) => state.specification.value.men)
    const specWomen = useSelector((state: RootState) => state.specification.value.women)
    const category = categ === 'mens' ? specMen : (categ === 'womens' ? specWomen : '')
    const filteredSpec = ObjectData.filter(item => item.specification.includes(category));
    const filteredData = filteredSpec.filter((i) => i.category === categ).slice(0, limit);


    return (
        grid ? (
            <div className={styles.body}>
                {filteredData.map((i, index) => {
                    return (

                        <div key={`${categ}-${i.id}${index}`} className={styles.innerDiv} onClick={() => router.push(`/${i.category}/${i.id}`)}>
                            <Image src={i.photo} alt="cloth" className="relative " width={255} />
                            {
                                i.offer !== "" ? (<div className="absolute top-0 left-0 bg-sale font-bold text-xs text-white p-2" >{i.offer}</div>) : (<></>)
                            }
                            <h3 className="body-14-22 text-dark opacity-60">{i.name}</h3>
                            <div key={`${i.id}-child`}>
                                {
                                    i.oldPrice !== "" ? (
                                        <span className="body-bold text-dark float-left ">{i.price} {" "}
                                            <del className="text-dark opacity-40">{i.oldPrice}</del>
                                        </span>) : (
                                        <span className="body-bold text-dark float-left">{i.price}</span>
                                    )
                                }
                                <div className="float-right flex flex-row p-1" key={`innerChild-${i.id}`}>
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
                    )
                })}
            </div>) : (
            <div className="flex flex-col justify-center items-center w-full gap-4">
                {filteredData.map((i, index) => {
                    return (
                        <div key={`${categ}-${i.id}${index}`} className="w-full h-[150px] flex flex-row justify-between hover:shadow-box" onClick={() => router.push(`/${i.category}/${i.id}`)}>
                            <div className="flex flex-row gap-8 relative">
                                <Image src={i.photo} alt="cloth" className="relative " height={150} />
                                {
                                    i.offer !== "" ? (<div className="absolute top-0 left-0 bg-sale font-bold text-xs text-white p-2" >{i.offer}</div>) : (<></>)
                                }
                                <div className="flex flex-col gap-4 py-[5px]">
                                    <h3 className="title-22-30 text-dark opacity-60">{i.name}</h3>
                                    <h4 className="text-dark body-14-22">Material: <span className="body-bold">{i.description.material}</span></h4>
                                    <div className="flex flex-row" key={`innerChild-${i.id}`}>
                                        {[...Array(5)].map((_, index) => (
                                            <Image className="w-[16px] h-[16px]"
                                                key={index}
                                                src={index < i.star.length ? starFull : starEmpty}
                                                alt={index < i.star.length ? "star full" : "star empty"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-[5px]">
                                {i.oldPrice !== "" ? (
                                    <span className="title-22-30 text-dark">{i.price} {" "}
                                        <del className="text-dark opacity-40">{i.oldPrice}</del>
                                    </span>) : (
                                    <span className="title-22-30 text-dark">{i.price}</span>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    )
}

export default memo(Cards)
