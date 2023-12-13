import Header from '@/sections/productPage/Header'
import RelatedProducts from '@/sections/productPage/RelatedProducts'
import { ObjectData, ObjectInterface } from "@/data/object";
import { useRouter } from "next/router"
import Error from "next/error"
import dynamic from 'next/dynamic'
import { Helmet } from 'react-helmet-async';

const NoSSR = dynamic(() => import('@/sections/productPage/Body'), { ssr: false })

const ProductPage = ({ obj, error }: { obj: ObjectInterface, error: boolean }) => {
    const router = useRouter();


    if (error) {
        return <><Helmet><title>404 Not Found</title></Helmet><Error statusCode={404} /></>;
    }
    return (
        <div>
            <Helmet>
                <title>
                    Product page
                </title>
            </Helmet>
            <Header />
            <NoSSR obj={obj} />
            <RelatedProducts />
        </div>
    )


}

export const getServerSideProps = async ({ params }: { params: { name: string, category: string } }) => {
    const pathname = params?.name as string | undefined;
    const category = params?.category as string | undefined;
    const categories: boolean = ['womens', 'mens', 'beauty', 'accessories'].indexOf(category ?? '') === -1;

    try {
        const obj = ObjectData.filter(i => i.id === pathname)[0];

        if (obj === undefined || categories) {
            return {
                props: {
                    error: true,
                },
            };
        }

        return {
            props: {
                obj,
                error: false,
            },
        };
    } catch (error) {
        return {
            props: {
                error: true,
            },
        };
    }
};

export default ProductPage