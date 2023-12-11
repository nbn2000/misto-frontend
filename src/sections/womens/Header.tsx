import { SVG41 } from "@/svg/SVG"
import Link from "next/link"

const Header = () => {
    return (
        <header className="container-p mb-9 bg-gr-white">
            <div className="flex flex-row flex-wrap justify-between items-center h-8">
                <div className="flex flex-row items-center justify-center gap-1.5">
                    <Link href='/' className="small-11-18 text-dark opacity-60">Home</Link>
                    <small className="text-dark small-11-18">►</small>
                    <Link href='/womens' className="small-11-18 text-dark">Women</Link>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                    <SVG41 />
                    <Link href="/" className="small-11-18 text-dark opacity-60"> Share</Link>
                </div>
            </div>
            <div className="h-4.375 text-center">
                <h1 className="title-26-36 text-dark">Women</h1>
            </div>
        </header>
    )
}

export default Header