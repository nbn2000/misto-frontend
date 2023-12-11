import Link from "next/link"
import starFull from "@/assets/star 1.png"
import starEmpty from "@/assets/star 5.png"
import Image from "next/image"
import { ObjectData, ObjectInterface } from "@/data/object";
import { usePathname } from "next/navigation"
import { SVG38 } from "@/svg/SVG";

const Header = () => {
    const pathname = usePathname()?.split('/')[2]
    const obj: ObjectInterface = ObjectData.filter(i => i.id === pathname)[0]


    return (
        <header className="container-p mb-9 bg-gr-white">
            <div className="flex flex-row flex-wrap justify-between items-center h-8 md:h-auto gap-2 md:justify-center">
                <div className="flex flex-row items-center justify-center gap-1.5">
                    <Link href='/' className="small-11-18 text-dark opacity-60">Home</Link>
                    <small className="text-dark small-11-18 opacity-60">►</small>
                    <Link href={`/${obj?.category}`} className="small-11-18 text-dark opacity-60">{obj?.category}</Link>
                    <small className="text-dark small-11-18">►</small>
                    <h6 className="small-11-18 text-dark">{obj?.name}</h6>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                    <SVG38 />
                    <Link href="/" className="small-11-18 text-dark opacity-60"> Share</Link>
                </div>
            </div>
            <div className="h-4.375 flex flex-col justify-center items-center md:h-auto md:gap-2">
                <h1 className="title-26-36 text-dark md:text-base">{obj?.name}</h1>
                <div className="flex flex-row justify-between items-center w-full flex-wrap gap-2 md:justify-center">
                    <div className="flex flex-row justify-center items-center gap-1.5">
                        <div className="flex flex-row justify-center items-center">
                            {[...Array(5)].map((_, index) => (
                                <Image
                                    key={index}
                                    src={index < obj?.star.length ? starFull : starEmpty}
                                    alt={index < obj?.star.length ? "star full" : "star empty"}
                                />
                            ))}
                        </div>
                        <h6 className="small-11-18 text-dark opacity-60">{obj?.description.review} Reviews</h6>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-6">
                        <div>
                            <small className="small-11-18 text-dark opacity-60">SKU:</small>
                            <small className="small-11-18 text-dark ">{obj?.description.sku}</small>
                        </div>
                        <div>
                            <small className="small-11-18 text-dark opacity-60">Availability:</small>
                            <small className="small-11-18 text-dark ">{obj?.description.availibility}</small>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header