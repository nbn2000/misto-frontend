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

const Cards = ({ categ, limit = ObjectData.length }: { categ: string, limit?: number }) => {
    const router = useRouter()
    const specMen = useSelector((state: RootState) => state.specification.value.men)
    const specWomen = useSelector((state: RootState) => state.specification.value.women)
    const category = categ === 'mens' ? specMen : (categ === 'womens' ? specWomen : '')
    const filteredSpec = ObjectData.filter(item => item.specification.includes(category));
    const filteredData = filteredSpec.filter((i) => i.category === categ).slice(0, limit);


    return (
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
                                i.oldPrice !== "" ? (<span className="body-bold text-dark float-left ">{i.price} {" "}<del className="text-dark opacity-40">{i.oldPrice}</del></span>) : (<span className="body-bold text-dark float-left">{i.price}</span>)
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
        </div>
    )
}

export default memo(Cards)
