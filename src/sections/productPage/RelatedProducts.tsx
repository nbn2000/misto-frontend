import Image from "next/image"
import rect29 from "@/assets/Rectangle 29.png"
import rect30 from "@/assets/Rectangle 30.png"
import rect31 from "@/assets/Rectangle 31.png"
import rect32 from "@/assets/Rectangle 32.png"
import starFull from "@/assets/star 1.png"
import starEmpty from "@/assets/star 5.png"
import { SVG39, SVG40 } from "@/svg/SVG"
import { useRouter } from "next/router"
import Cards from "@/components/Cards"



const RelatedProducts = () => {
    const router = useRouter()

    return (
        <div className="cont-y container-p">
            <div className="flex flex-row justify-between items-center flex-wrap md:justify-center md:flex-col gap-4">
                <h1 className="title-22-30 text-dark">RELATED PRODUCTS</h1>
                <div className="flex flex-row items-center justify-center gap-8">
                    <button>
                        <SVG39 />
                    </button>
                    <button>
                        <SVG40 />
                    </button>
                </div>
            </div>
            <Cards categ={String(router.query.category)} limit={4} />
        </div>
    )
}

export default RelatedProducts