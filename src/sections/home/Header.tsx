import Image from "next/image"
import styles from "@/styles/Home-Header.module.css"
import rectange from "@/assets/Rectangle.jpg"
import rectange1 from "@/assets/Rectangle-1.jpg"
import rectange2 from "@/assets/Rectangle-2.jpg"
import rectange3 from "@/assets/Rectangle-3.jpg"
import rect40 from "@/assets/Rectangle 40.jpg"
import rect41 from "@/assets/Rectangle 41.jpg"
import rect42 from "@/assets/Rectangle 42.jpg"
import rect43 from "@/assets/Rectangle 43.jpg"
import { SVG18, SVG19, SVG20, SVG21, SVG22 } from "@/svg/SVG"
import { useState } from "react"
import { StaticImageData } from "next/image"

const Header = () => {
    const [imgNum, setImgNum] = useState<number>(0)
    interface imagesInterface {
        photo: StaticImageData
    }[]
    const images: imagesInterface[] = [
        { photo: rectange },
        { photo: rect40 },
        { photo: rect41 },
        { photo: rect42 },
        { photo: rect43 },
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
    return (
        <div>
            <header className={`${styles.HHflex} container-p`}>
                <div className={styles.Hbanner}>
                    <ul>
                        {images.map((i, idx) => {
                            return (
                                <li key={idx} className={imgNum === idx ? `${styles.slide} ${styles.active}` : `${styles.slide}`}><Image src={i.photo} alt="banner image" width={540} height={490} /></li>
                            )
                        })}

                    </ul>
                    <div className={`${styles.HbannerDiv}`}>
                        <button className="flex justify-center items-center text-center p-1" onClick={handleSlideMinus}><SVG18 /></button>
                        <div className="text-center bg-white p-8">
                            <h5 className="subtitle-12-18 text-dark opacity-80">Banner</h5>
                            <h3 className="title-22-30 text-dark">your Title text </h3>
                        </div>
                        <button className="flex justify-center items-center text-center p-1" onClick={handleSlidePlus}><SVG19 /></button>
                    </div>
                </div>
                <div className={styles.HHflexSecond}>
                    <div>
                        <div className="relative ">
                            <Image src={rectange1} alt="banner image" width={255} height={200} />
                            <h5 className={`title-14-22 bg-white ${styles.HbannerInner}`}>Women</h5>
                        </div>

                        <div className="relative">
                            <Image src={rectange2} alt="banner image" width={255} height={200} />
                            <h5 className={`title-14-22 bg-white ${styles.HbannerInner}`}>Men</h5>
                        </div>
                    </div>
                    <div className="relative">
                        <Image src={rectange3} alt="banner image" width={540} height={260} />
                        <h5 className={`title-14-22 bg-white ${styles.HbannerInner}`}>Accessories</h5>
                    </div>
                </div>
            </header>

            {/* BOTTOM HEADER */}

            <div className="cont-y container-p flex flex-row flex-wrap justify-between items-center">
                <div className="flex flex-row justify-center items-center gap-3">
                    <SVG20 />
                    <div>
                        <h4 className="subtitle-12-18 text-dark">FREE SHIPPING</h4>
                        <p className=" text-xs text-dark opacity-80 leading-6 font-medium">On all UA order or order above $100</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-3">
                    <SVG21 />
                    <div>
                        <h4 className="subtitle-12-18 text-dark">30 DAYS RETURN</h4>
                        <p className="text-xs text-dark opacity-80 leading-6 font-medium">Simply return it within 30 days for an exchange</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-3">
                    <SVG22 />
                    <div>
                        <h4 className="subtitle-12-18 text-dark">SUPPORT 24/7</h4>
                        <p className="text-xs text-dark opacity-80 leading-6 font-medium">Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header