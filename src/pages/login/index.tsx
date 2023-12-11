"use client"
import Image from "next/image"
import Logo from "@/assets/MiSto.png"
import Link from "next/link"
import url from "@/url/url"
import { useRouter } from "next/router"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "@/api/auth-api-req"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFTextfield from "../../components/hook-form/RHFTextfield";

const schema = yup
    .object()
    .shape({
        username: yup
            .string()
            .required('User Name is required')
            .min(5, 'Invalid User Name')
            .max(30, 'Invalid User Name'),
        password: yup
            .string()
            .required('Password is required')
            .min(7, 'Invalid Password')
            .max(30, 'Invalid Password'),
    })
    .required();

type inputs = {
    username: string;
    password: string;
}

const Login = () => {
    const [login] = useLoginMutation()
    const methods = useForm<inputs>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });
    const {
        handleSubmit,
    } = methods;

    const onSubmit: SubmitHandler<inputs> = async (data: inputs) => {
        login(data).unwrap().then(res => console.log(res))
    }

    return (

        <section className="bg-gray-50 dark:bg-gray-900 cont-y container-p">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <Link href="/" className="mb-6">
                    <Image src={Logo} alt="logo" width={100} />
                </Link>
                <div className="w-96 sm:w-64 bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <FormProvider  {...methods}>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <RHFTextfield name="username" type="text" placeholder="johndoe123" label="Your Username" />
                                <RHFTextfield name="password" type="password" placeholder="••••••••" label="Password" />
                                <div className="flex items-center justify-between">
                                    <Link href="#" className="text-sm font-medium text-dark hover:underline">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white bg-dark hover:bg-primary-700 focus:outline-none font-medium text-sm px-5 py-2.5 text-center">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link href="signup" className="font-medium text-dark hover:underline">Sign up</Link>
                                </p>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login