import style from "@/styles/Subcribe.module.css"
import Image from "next/image"
import daco from "@/assets/Daco.png"
import jack from "@/assets/Jack.png"

const Subcribe = () => {
    return (
        <div className={`cont-y container-p flex flex-col justify-center items-center ${style.containerSub}`}>
            <div className="relative">
                <Image src={daco} alt="daco" className={style.daco} />
                <Image src={jack} alt="jack" className={style.jack} />
                <div className={`bg-white text-center flex flex-col px-24 py-12 md:px-1 md:py-1 relative`}>
                    <div className="my-8">
                        <h3 className="subtitle-12-18 text-dark opacity-40 my-4">Special Offer</h3>
                        <h4 className="title-26-36 text-dark">Subscribe<br />And <span className="text-sale">Get 10% Off</span></h4>
                    </div>
                    <input type="text" className="w-80 h-16 bg-gr-white text-center sm:w-64 sm:h-12" placeholder="Enter your email" />
                    <button className="w-80 h-16 bg-dark my-6 sm:w-64 sm:h-12"><span className="title-16-24 text-white">Subscribe</span></button>
                </div>
            </div>
        </div>
    )
}

export default Subcribe