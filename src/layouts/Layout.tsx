import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import Navbar from "@/components/Navbar/index"
import { Suspense } from 'react'
import { SnackbarProvider } from "notistack"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <SnackbarProvider maxSnack={3}>
                <Suspense fallback={<span className="loading loading-ring loading-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></span>}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </Suspense>
            </SnackbarProvider>
        </Provider>
    )
}