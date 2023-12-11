"use client"
import rect26 from "@/assets/Rectangle 26.png"
import rect28 from "@/assets/Rectangle 28.png"
import rect44 from "@/assets/Rectangle 44.jpg"
import rect45 from "@/assets/Rectangle 45.jpg"
import rect46 from "@/assets/Rectangle 46.jpg"
import card1 from "@/assets/card1.png"
import card2 from "@/assets/card2.png"
import card3 from "@/assets/card3.png"
import card4 from "@/assets/card4.png"
import card5 from "@/assets/card5.png"
import card6 from "@/assets/card6.png"
import card7 from "@/assets/card7.png"
import starFull from "@/assets/star 1.png"
import starEmpty from "@/assets/star 5.png"
import Image from "next/image"
import { SVG30, SVG31, SVG33, SVG34, SVG39, SVG47, SVG48 } from "@/svg/SVG"
import { ObjectInterface } from "@/data/object";
import { useDispatch } from "react-redux"
import { change } from "@/store/specifations"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from 'react';
import { StaticImageData } from 'next/image';
import styles from "@/styles/Home-Header.module.css"
import useGetState from "@/hooks/useGetState"
import usePostState from "@/hooks/usePostState"


const Body = ({ obj }: { obj: ObjectInterface }) => {
    const state = useGetState()
    const data = !state ? [] : state.data as ObjectInterface[];
    const { updateState } = usePostState()
    const [imgNum, setImgNum] = useState<number>(0)
    const [size, setSize] = useState(obj.description.size)
    interface imagesInterface {
        photo: StaticImageData
    }[]

    const images: imagesInterface[] = [
        { photo: rect26 },
        { photo: rect44 },
        { photo: rect45 },
        { photo: rect46 },
    ]
    const handleSlidePlus = () => {

        if (images.length - 1 > imgNum) {
            setImgNum(imgNum + 1)
        } else {
            setImgNum(0)
        }
    }


    const handleSlideMinus = () => {


        if (0 < imgNum) {
            setImgNum(imgNum - 1)
        } else {
            setImgNum(images.length - 1)
        }
    }

    let arrayOfObjects = Array.isArray(data) ? data : [];
    let mapArray: any = { favourite: false, quantity: 0 }

    if (arrayOfObjects.length !== 0) {
        mapArray = arrayOfObjects.find(i => { if (i.id === obj.id) return i })
    }




    const addCard = () => {
        if (Array.isArray(arrayOfObjects)) {
            let found = false;

            const updatedArray = arrayOfObjects.map(o => {
                if (o.id === obj.id) {
                    found = true;
                    return { ...o, quantity: 1 };
                }
                return o;
            });

            if (!found) {
                obj.quantity = 1;
                const updataArray = [...updatedArray, obj];
                updateState(updataArray)
            } else {
                updateState(updatedArray)
            }
        }
    };

    const addFav = () => {
        if (Array.isArray(arrayOfObjects)) {
            let found = false;

            const updatedArray = arrayOfObjects.map(o => {
                if (o.id === obj.id) {
                    found = true;
                    return { ...o, favourite: !o.favourite };
                }
                return o;
            });

            if (!found) {
                obj.favourite = !obj.favourite;
                const updataArray = [...updatedArray, obj];
                updateState(updataArray)
            } else {
                updateState(updatedArray)
            }
        }
    }

    const clickedPhoto = (e: any) => {
        setImgNum(e)
    }

    const chosenSize = (e: any) => {
        setSize(e)
    }

    return (
        <div className="cont-y container-p flex flex-row justify-between gap-4 xl:flex-col xl:justify-center xl:items-center">
            <div className="flex flex-row h-max gap-4 sticky top-6 md:justify-center md:items-center xl:static flex-wrap">
                <div className="flex flex-col gap-4 md:flex-row">
                    {images.map((i, n) => <button key={n} onClick={() => clickedPhoto(n)}><Image className={imgNum !== n ? 'opacity-40' : ''} src={i.photo} width={94} height={114} alt={`img-${n}`} /></button>)}
                </div>
                <div className={`h-max w-max ${styles.Hbanner}`}>
                    <ul>
                        {images.map((i, idx) => {
                            return (
                                <li key={idx} className={imgNum === idx ? `${styles.slide} ${styles.active}` : `${styles.slide}`}><Image src={i.photo} alt="banner image" className="relative md:w-64" width={448} height={560} /></li>
                            )
                        })}

                    </ul>
                    <div className={`${styles.HbannerDiv}`}>
                        <button className="w-10 h-10 rounded-round bg-white flex justify-center items-center" onClick={handleSlideMinus}><SVG39 /></button>

                        <button className="w-10 h-10 rounded-round bg-white flex justify-center items-center" onClick={handleSlidePlus}><SVG30 /></button>
                    </div>
                </div>
            </div>
            <div className="w-width md:w-64 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="subtitle-12-18 text-dark !capitalize"><small className="opacity-60 subtitle-12-18">Color:</small>{obj?.description.color}</h3>
                    <Image src={rect28} alt="rect28" />
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="subtitle-12-18 text-dark"><small className="opacity-60 subtitle-12-18">SIZE:</small>{size}</h3>
                    <div className="flex flex-row gap-4">
                        {obj?.description.choiceSize.map((i, nu) => <button key={nu} onClick={() => chosenSize(i)} className={i === size ? "subtitle-12-18 w-10 h-10 border-black border-2 border-solid text-dark" : "subtitle-12-18 w-10 h-10 bg-gr-white text-dark opacity-70"}>{i}</button>)}
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <SVG31 />
                        <h6 className="text-xs font-medium leading-5 text-dark opacity-60">Size guide</h6>
                    </div>
                </div>

                <hr className="w-full h-0.5 bg-grey" />

                <div className="flex flex-row gap-6 items-center flex-wrap">
                    <h3 className="title-22-30 text-dark">{obj?.price}</h3>
                    <div className="flex flex-row items-center gap-4">
                        <button
                            id="add-to-cart-button"
                            className="btn-text text-gr-white h-12 bg-dark px-6"
                            onClick={addCard}
                        >{mapArray?.quantity === 1 ? "CARD ADDED" : "ADD TO CARD"}</button>
                        <button className="h-12 w-12 p-2" onClick={addFav}>
                            {mapArray?.favourite ? <AiFillHeart /> : <AiOutlineHeart />}
                        </button>
                        <button className="h-12 w-12 p-2">
                            <SVG33 />
                        </button>
                    </div>
                </div>

                <hr className="w-full h-0.5 bg-grey" />

                <div className="flex flex-row items-center flex-wrap justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <SVG34 />
                        <small className="text-xs font-medium leading-5 text-dark opacity-60">Shipping & Delivery</small>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <SVG47 />
                        <small className="text-xs font-medium leading-5 text-dark opacity-60">Returns & Exchanges</small>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <SVG48 />
                        <small className="text-xs font-medium leading-5 text-dark opacity-60">Ask a question</small>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between">
                    <h4 className="subtitle-12-18 text-dark">guaranteed safe checkout</h4>
                    <hr className="w-72 h-0.5 bg-grey" />
                </div>

                <div className="flex flex-row justify-between items-center flex-wrap">
                    <Image src={card1} alt="card" height={21.795} />
                    <Image src={card2} alt="card" height={21.795} />
                    <Image src={card3} alt="card" height={21.795} />
                    <Image src={card4} alt="card" height={21.795} />
                    <Image src={card5} alt="card" height={21.795} />
                    <Image src={card6} alt="card" height={21.795} />
                    <Image src={card7} alt="card" height={21.795} />
                </div>

                <hr className="w-full h-0.5 bg-grey" />

                <h4 className="subtitle-12-18 text-dark opacity-60">DESCRIPTION</h4>

                <hr className="w-full h-0.5 bg-grey" />

                <h4 className="subtitle-12-18 text-dark">ADDITIONAL INFORMATION</h4>

                <div className="flex flex-col justify-center gap-3">
                    <h3 className="body-14-22 text-dark">Color:<small className="body-14-22  opacity-60">{obj?.description.choiceColor}</small></h3>
                    <h3 className="body-14-22 text-dark">Size:<small className="body-14-22  opacity-60">{obj?.description.choiceSize}</small></h3>
                    <h3 className="body-14-22 text-dark">Material:<small className="body-14-22  opacity-60">{obj?.description.material}</small></h3>
                </div>

                <hr className="w-full h-0.5 bg-grey" />

                <h4 className="subtitle-12-18 text-dark">REVIEWS</h4>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-center items-center gap-1">
                            <div className="flex flex-row items-center justify-center">
                                {[...Array(5)].map((_, index) => (
                                    <Image
                                        key={`index-234234234234-${index}`}
                                        src={index < obj?.star.length ? starFull : starEmpty}
                                        alt={index < obj?.star.length ? "star full" : "star empty"}
                                    />
                                ))}
                            </div>
                            <span className="small-11-18 text-dark opacity-60">2 Reviews</span>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-1">

                            <small className="text-dark opacity-60 text-xs font-medium leading-5">Write a review</small>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12">
                        {obj?.description.reviews.map((i, item) => (
                            <div className="flex flex-col justify-center items-center gap-3" key={item}>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <h3 className="text-sm font-medium text-dark leading-5">{i.reviewName}</h3>
                                    <div className="flex flex-row items-center justify-center gap-2">
                                        <small className="small-11-18">{i.reviewTime}</small>
                                        <div className="flex flex-row items-center justify-center">
                                            {[...Array(5)].map((_, index) => (
                                                <Image
                                                    key={`1-jalsidviadsoerf-${index}`}
                                                    src={index < i.reviewStar ? starFull : starEmpty}
                                                    alt={index < i.reviewStar ? "star full" : "star empty"}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm font-normal leading-5 text-dark opacity-80 w-full">{i.reviewComment}</p>
                            </div>
                        ))}

                    </div>
                </div>

                <hr className="w-full h-0.5 bg-grey" />
            </div>
        </div>
    )
}

export default Body