import Image from "next/image"
import Link from "next/link"
import rect22 from "@/assets/Rectangle 22.jpg"
import rect23 from "@/assets/Rectangle 23.jpg"
import rect24 from "@/assets/Rectangle 24.jpg"


const LatestBlog = () => {
    return (
        <div className="cont-y container-p flex flex-col gap-12">
            <div className="flex justify-between flex-row flex-wrap items-center gap-4">
                <h2 className="title-22-30 text-dark">LATEST FROM BLOG</h2>
                <Link href="/" className="subtitle-12-18 text-dark opacity-60">SEE ALL</Link>
            </div>
            <div className="flex flex-wrap flex-row justify-between items-center gap-12 lg:justify-center">
                <div className="h-96 w-max relative">
                    <Image src={rect22} alt="blog image" className="!relative" />
                    <div className="absolute bg-white w-72 h-40 p-4 flex justify-center flex-col gap-3 top-52 left-1/2 -translate-x-1/2">
                        <h4 className="title-14-22 text-dark">The Easiest Way to Break</h4>
                        <p className="body-14-22 text-dark opacity-80">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                    </div>
                </div>

                <div className="h-96 relative w-max">
                    <Image src={rect23} alt="blog image" className="relative" />
                    <div className="absolute bg-white w-72 h-40 p-4 flex justify-center flex-col gap-3 top-52 left-1/2 -translate-x-1/2">
                        <h4 className="title-14-22 text-dark">Wedding Season</h4>
                        <p className="body-14-22 text-dark opacity-80">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                    </div>
                </div>

                <div className="h-96 relative w-max">
                    <Image src={rect24} alt="blog image" className="relative" />
                    <div className="absolute bg-white w-72 h-40 p-4 flex justify-center flex-col gap-3 top-52 left-1/2 -translate-x-1/2">
                        <h4 className="title-14-22 text-dark">Recent Favorites On Repeat</h4>
                        <p className="body-14-22 text-dark opacity-80">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog