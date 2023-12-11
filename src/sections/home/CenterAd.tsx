import Image from "next/image"
import rect20 from "@/assets/Rectangle 20.jpg"
import rect21 from "@/assets/Rectangle 21.jpg"


const CenterAd = () => {
    return (
        <div className="cont-y container-p flex flex-row items-center flex-wrap justify-between gap-5 xl:justify-center">
            <div className="relative">
                <Image src={rect20} alt="new season" className="relative" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-1 rounded text-center">
                    <h3 className="subtitle-12-18 text-dark opacity-60">New Season</h3>
                    <h4 className="title-16-24 text-dark">lookbook collection</h4>
                </div>
            </div>
            <div className="relative">
                <Image src={rect21} alt="new season" className="relative" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-1 rounded text-center">
                    <h3 className="subtitle-12-18 text-dark opacity-60">Sale</h3>
                    <h4 className="title-16-24 text-dark">Get UP to <span className="text-sale">50% off</span></h4>
                </div>
            </div>
        </div>
    )
}

export default CenterAd