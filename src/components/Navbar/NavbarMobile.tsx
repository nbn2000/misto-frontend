import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import Misto from "@/assets/MiSto.png";
import { SVG16, SVG17 } from "@/svg/SVG";
import { GoSearch } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { IoTrashSharp } from "react-icons/io5";
import ProfileHover from "./ProfileHover"
import { SVG49 } from '@/svg/SVG'

const NavbarMobile = ({
  toggleInput,
  isActive,
  toggleSearch,
  data,
  handleSubmit,
  isInput,
  history,
  handleHistory,
  deleteHistory,
}: {
  toggleInput: any,
  isActive: any,
  toggleSearch: any,
  data: any,
  handleSubmit: any,
  isInput: any,
  history: any,
  handleHistory: any,
  deleteHistory: any,
}) => {
  const isLogged = true
  return (
    <> {
      !isActive ? (
        <nav className="hidden lg:flex justify-between items-center container-p h-20">
          <div className="drawer w-8 z-50 ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-8">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button"><IoMenuSharp className="text-2xl text-dark" /></label>
            </div>
            <div className="drawer-side min-h-full w-full">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 sm:w-full min-h-full bg-base-200 text-base-content ">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay absolute top-3 right-0"><SVG49 /></label>
                {/* Sidebar content here */}
                {
                  isLogged ? (
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-full max-h-min">
                      <ProfileHover />
                    </label>
                  ) : (
                    <li className="flex flex-row justify-between">
                      <Link href="/login">Login</Link>
                      <Link href="/signup">SignUp</Link>
                    </li>
                  )
                }
                <hr className="w-full rounded-sm bg-slate-400 my-3" />
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-full text-sm font-normal leading-normal text-dark">
                    <Link href="/about-us">About Us</Link>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-full text-sm font-normal leading-normal text-dark">
                    <Link href="/womens" >Women</Link>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-full text-sm font-normal leading-normal text-dark">
                    <Link href="/mens" >Men</Link>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-full text-sm font-normal leading-normal text-dark">
                    <Link href="/beauty" >Beauty</Link>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-full text-sm font-normal leading-normal text-dark">
                    <Link href="/accessories" >Accessories</Link>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-full text-sm font-normal leading-normal text-dark">
                    <Link href="/blog" >Blog</Link>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-full text-sm font-normal leading-normal text-dark">
                    <Link href="/contact" >Contact</Link>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-full text-sm font-normal leading-normal text-dark">
                    <Link href="/favourite" >Favourites</Link>
                  </label>
                </li>

                <hr className="w-full rounded-sm bg-slate-400 my-4" />
                <select className="select select-bordered select-sm w-full max-w-xs outline-none h-auto bg-transparent my-4">
                  <option disabled value="Language">Language</option>
                  <option>Russian</option>
                  <option>English</option>
                  <option>Uzbek</option>
                </select>
                <div className="flex flex-col justify-center items-center bg-dark rounded my-4">
                  <small className="small-11-18 text-grey">+38 (050) 12 34 567</small>
                  <small className="small-11-18 text-grey">Ukraine, Kyiv,Khreshchatyk 1</small>
                  <small className="small-11-18 text-grey">All week 24/7</small>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <Link href="/"><Image src={Misto} alt="logo" /></Link>
          </div>
          <div className="relative flex flex-row justify-center items-center gap-3">
            <button onClick={toggleSearch} className="search-button relative">
              <SVG16 />
            </button>
            <Link href='/cart' className="relative">
              <SVG17 />
            </Link>
            <span className="notification">{data && data?.length}</span>
          </div>
        </nav>
      ) :
        (
          <nav className="hidden lg:flex container-p relative h-20 justify-center items-center">
            <div className="relative w-full max-w-full  rounded border-2 border-solid  border-slate-600 h-11 ">
              <form onSubmit={handleSubmit} className="w-full h-full flex justify-between items-center">
                <input type="search" placeholder="Search" autoComplete="off" name="search" className="relative border-0 p-1 outline-none w-5/6 text-xl z-20" onClick={toggleInput} />
                <button type="submit" className="bg-slate-600 relative w-1/6 h-full z-20 flex items-center justify-center"><GoSearch className="text-4xl text-white" /></button>
              </form>
              <button className="absolute -right-3 -top-3 text-slate-600 text-2xl z-20" onClick={toggleSearch}><MdCancel /></button>
              {
                isInput && (
                  <div className="absolute flex flex-col items-start gap-2 w-full bg-gr-white h-auto top-10 z-10 rounded-b p-8">
                    {history.length !== 0 &&
                      (<>
                        <h3 className="font-extrabold text-xl">Recently Searched</h3>
                        <ul className="w-full">
                          {history?.map((i: string, idx: number) => (
                            <li key={idx} className="flex flex-row justify-between w-full items-center">
                              <button className="flex flex-row items-center gap-2 text-base" onClick={() => handleHistory(i)}><BsClock />{i}</button>
                              <button onClick={() => deleteHistory(i)}><IoTrashSharp /></button>
                            </li>
                          ))}

                        </ul>
                      </>
                      )}
                    <h3 className="font-extrabold text-xl">Popular</h3>
                    <ul className="w-full">
                      <li><button className="flex flex-row items-center gap-2 text-base w-full hover:bg-slate-300" onClick={() => handleHistory('hoodie')}><GoSearch /> hoodie</button></li>
                      <li><button className="flex flex-row items-center gap-2 text-base w-full hover:bg-slate-300" onClick={() => handleHistory('pants')}><GoSearch /> pants</button></li>
                      <li><button className="flex flex-row items-center gap-2 text-base w-full hover:bg-slate-300" onClick={() => handleHistory('t-shirt')}><GoSearch /> t-shirt</button></li>
                    </ul>
                  </div>)
              }

            </div>

          </nav>
        )
    }
    </>
  )
}

export default NavbarMobile