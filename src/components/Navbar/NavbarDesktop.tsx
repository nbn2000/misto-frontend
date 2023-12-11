import Misto from "@/assets/MiSto.png";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { IoTrashSharp } from "react-icons/io5";
import Avatar from "@/assets/channels4_profile.png"
import ProfileHover from "./ProfileHover"
import { useState } from "react";



import {
  SVG10,
  SVG11,
  SVG12,
  SVG13,
  SVG14,
  SVG15,
  SVG5,
  SVG6,
  SVG7,
  SVG8,
  SVG9,
} from "@/svg/SVG";

const NavbarDesktop = ({
  history,
  data,
  toggleSearch,
  isActive,
  isFavourite,
  handleSubmit,
  toggleInput,
  isInput,
  handleHistory,
  deleteHistory,
}: {
  history: any,
  data: any,
  toggleSearch: any,
  isActive: any,
  isFavourite: any,
  handleSubmit: any,
  toggleInput: any,
  isInput: any,
  handleHistory: any,
  deleteHistory: any,
}) => {
  const [show, setShow] = useState(false)
  const isLogin = true
  return (
    <nav className="flex flex-col lg:hidden relative">
      {/* TOP NAVBAR */}

      <div className="container-p bg-dark flex flex-row justify-between h-6">
        <div className="flex flex-row gap-4 items-center">
          <span className="flex flex-row gap-1 items-center">
            <SVG5 />
            <small className="small-11-18 text-grey">+38 12 34 567</small>
          </span>
          <span className="flex flex-row gap-1 items-center">
            <SVG6 />
            <small className="small-11-18 text-grey">
              Ukraine, Kyiv,Khreshchatyk 1
            </small>
          </span>
          <span className="flex flex-row gap-1 items-center">
            <SVG7 />
            <small className="small-11-18 text-grey">All week 24/7</small>
          </span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <SVG8 />
          <SVG9 />
          <SVG10 />
          <SVG11 />
        </div>
      </div>

      {/* BOTTOM NAVBAR */}

      <div className="container-p h-nav flex justify-between items-center bg-white">
        <Link href="/">
          <Image src={Misto} alt="logo" width={70} />
        </Link>
        <div className="flex justify-center items-center gap-5 lg:gap-3 md:gap-2 sm:gap-1">
          <Link
            href="/about-us"
            className="text-sm font-normal leading-normal text-dark"
          >
            About Us
          </Link>
          <Link
            href="/womens"
            className="text-sm font-normal leading-normal text-dark"
          >
            Women
          </Link>
          <Link
            href="/mens"
            className="text-sm font-normal leading-normal text-dark"
          >
            Men
          </Link>
          <Link
            href="/beauty"
            className="text-sm font-normal leading-normal text-dark"
          >
            Beauty
          </Link>
          <Link
            href="/accessories"
            className="text-sm font-normal leading-normal text-dark"
          >
            Accessories
          </Link>
          <Link
            href="/blog"
            className="text-sm font-normal leading-normal text-dark"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-normal leading-normal text-dark"
          >
            Contact
          </Link>
        </div>
        {!isActive ? (
          <div className="flex flex-row justify-center items-center gap-4 relative lg:gap-3 md:gap-2 sm:gap-1">
            <button onClick={toggleSearch}>
              <SVG12 />
            </button>
            <button>
              <SVG13 />
            </button>
            {isLogin ? (
              <button onClick={() => setShow(!show)}>
                <Image src={Avatar} alt="profile avatar" width={20} height={20} />
              </button>
            ) : (
              <Link href="/login">
                <SVG14 />
              </Link>
            )}


            <Link href="/favourite">
              {isFavourite ? <FaHeart /> : <FaRegHeart />}
            </Link>
            <Link href="/cart" className="relative">
              <SVG15 />
            </Link>
            <span className="notification">{data && data?.length}</span>
          </div>
        ) : (
          <nav className="flex relative justify-center items-center h-7 w-72 xl:w-44">
            <div className="relative rounded border-2 border-solid border-black w-full max-w-full h-full">
              <form
                onSubmit={handleSubmit}
                className="w-full h-full flex justify-between items-center"
              >
                <input
                  type="search"
                  placeholder="Search"
                  name="search"
                  autoComplete="off"
                  className="border-0 !active:outline-none h-full w-5/6 text-sm px-1"
                  onClick={toggleInput}
                />
                <button
                  type="submit"
                  className=" relative w-1/6 h-full z-20 flex items-center justify-center"
                >
                  <GoSearch className="text-5xl text-white bg-dark  h-full" />
                </button>
              </form>
              <button
                className="absolute -right-3 -top-3 text-dark text-base"
                onClick={toggleSearch}
              >
                <MdCancel />
              </button>
            </div>
            {isInput && (
              <div className="absolute flex flex-col items-start gap-2 w-full bg-gr-white h-auto top-7 z-10 rounded-b p-4">
                {history.length !== 0 && (
                  <>
                    <h3 className="font-extrabold text-xl">
                      Recently Searched
                    </h3>
                    <ul className="w-full">
                      {history?.map((i: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex flex-row justify-between w-full items-center"
                        >
                          <button
                            className="flex flex-row items-center gap-2 text-base"
                            onClick={() => handleHistory(i)}
                          >
                            <BsClock />
                            {i}
                          </button>
                          <button onClick={() => deleteHistory(i)}>
                            <IoTrashSharp />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <h3 className="font-extrabold text-xl">Popular</h3>
                <ul className="w-full">
                  <li>
                    <button
                      className="flex flex-row items-center gap-2 text-base w-full hover:bg-slate-300"
                      onClick={() => handleHistory("hoodie")}
                    >
                      <GoSearch /> hoodie
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex flex-row items-center gap-2 text-base w-full hover:bg-slate-300"
                      onClick={() => handleHistory("pants")}
                    >
                      <GoSearch /> pants
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex flex-row items-center gap-2 text-base w-full hover:bg-slate-300"
                      onClick={() => handleHistory("t-shirt")}
                    >
                      <GoSearch /> t-shirt
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        )}
      </div>
      {show && (
        <div className="z-50 absolute right-10 top-[6rem] max-w-xs bg-white shadow-md">
          <ProfileHover />
        </div>
      )}
    </nav>
  );
};

export default NavbarDesktop;
