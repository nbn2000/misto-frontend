import Image from "next/image";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import Stripe from "@/assets/Stripe_x42.png";
import AES from "@/assets/AES256_x42.png"
import Paypal from "@/assets/paypal_2_x42.png"
import Visa from "@/assets/visa_x42.png"
import Master from "@/assets/mastercard_x42.png"
import Discover from "@/assets/discover_x42.png"
import American from "@/assets/american-express_x42.png"
import { SVG1, SVG2, SVG3, SVG4 } from "@/svg/SVG";
import Link from "next/link";


const Footer = () => {
    return (
        <footer>
            <div className="bg-dark flex flex-row justify-between items-center text-white container-p h-14 lg:flex-col lg:p-2 lg:h-auto lg:gap-2">
                <h4 className="subtitle-12-18">BE IN TOUCH WITH US:</h4>
                <div className="flex justify-center gap-2 items-center md:flex-col">
                    <input type="text" className="bg-black-opacity-2 text-white placeholder:text-black-opacity-4 w-96 px-2 h-8 xl:w-64" placeholder="Enter your email" />
                    <button className="uppercase text-xs font-semibold bg-transparent border-white border-solid border-2 h-8 p-2 flex items-center">Join Us</button>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <IoLogoFacebook className="text-grey text-base" />
                    <IoLogoTwitter className="text-grey text-base" />
                    <AiFillInstagram className="text-grey text-base" />
                    <FaPinterest className="text-grey text-base" />
                </div>
            </div>
            <div className="container-p flex justify-between items-center py-9 flex-wrap gap-4">
                <div className="flex flex-col gap-2">
                    <h4 className="subtitle-12-18 text-dark">Categories</h4>
                    <Link href='/mens' className="text-xs font-normal text-dark opacity-80">Men</Link>
                    <Link href='/womens' className="text-xs font-normal text-dark opacity-80">Women</Link>
                    <Link href="/accessories" className="text-xs font-normal text-dark opacity-80">Accessories</Link>
                    <Link href='/beauty' className="text-xs font-normal text-dark opacity-80">Beauty</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="subtitle-12-18 text-dark">Infomation</h4>
                    <Link href="about-us" className="text-xs font-normal text-dark opacity-80">About Us</Link>
                    <Link href='contact' className="text-xs font-normal text-dark opacity-80">Contact Us</Link>
                    <Link href='blog' className="text-xs font-normal text-dark opacity-80">Blog</Link>
                    <Link href='/' className="text-xs font-normal text-dark opacity-80">FAQs</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="subtitle-12-18 text-dark">Useful links</h4>
                    <Link href='/' className="text-xs font-normal text-dark opacity-80">Terms & Conditions</Link>
                    <Link href='/' className="text-xs font-normal text-dark opacity-80">Returns & Exchanges</Link>
                    <Link href='/' className="text-xs font-normal text-dark opacity-80">Shipping & Delivery</Link>
                    <Link href='/' className="text-xs font-normal text-dark opacity-80">Privacy Policy</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="subtitle-12-18 text-dark">CONTACT US</h4>
                    <p className="text-xs font-normal text-dark opacity-80 flex flex-row gap-1">
                        <SVG1 />
                        Ukraine, Kyiv,Khreshchatyk 1
                    </p>
                    <p className="text-xs font-normal text-dark opacity-80 flex flex-row gap-1">
                        <SVG2 />
                        +38 (050) 12 34 567</p>
                    <p className="text-xs font-normal text-dark opacity-80 flex flex-row gap-1">
                        <SVG3 />
                        All week 24/7</p>
                    <p className="text-xs font-normal text-dark opacity-80 flex flex-row gap-1">
                        <SVG4 />
                        shaman.magic.music@gmail.com</p>
                </div>
            </div>
            <div className="bg-gr-white container-p h-10 flex flex-row justify-between items-center xl:h-auto xl:flex-col xl:gap-1 sm:p-1">
                <h4 className="small-11-18 text-dark opacity-80">Copyright © 2032 all rights reserved</h4>
                <div className="flex justify-center items-center gap-2 flex-wrap">
                    <Image src={Stripe} alt="company logo" />
                    <Image src={AES} alt="company logo" />
                    <Image src={Paypal} alt="company logo" />
                    <Image src={Visa} alt="company logo" />
                    <Image src={Master} alt="company logo" />
                    <Image src={Discover} alt="company logo" />
                    <Image src={American} alt="company logo" />
                </div>
                <u className="small-11-18">Designed by <strong className="font-extrabold">Oleh Chabanov</strong></u>
            </div>
        </footer>
    )
}

export default Footer