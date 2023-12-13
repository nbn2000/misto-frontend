import { Inter } from 'next/font/google'
import Header from '@/sections/home/Header'
import Womens from '@/sections/home/Womens'
import Mens from '@/sections/home/Mens'
import CenterAd from '@/sections/home/CenterAd'
import Subcribe from '@/sections/home/Subcribe'
import LatestBlog from '@/sections/home/LatestBlog'
import { Helmet } from 'react-helmet-async'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Womens />
      <Mens />
      <CenterAd />
      <Subcribe />
      <LatestBlog />
    </div>
  )
}
