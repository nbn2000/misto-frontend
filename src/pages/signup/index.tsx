import Image from "next/image"
import Logo from "@/assets/MiSto.png"
import Link from "next/link"
import url from "@/url/url"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { useSignupMutation } from "@/api/auth-api-req"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFTextfield from "../../components/hook-form/RHFTextfield";
import { RHFPhone } from "@/components/hook-form/RHFPhone";
import { Helmet } from "react-helmet-async"


const schema = yup
    .object()
    .shape({
        firstName: yup
            .string()
            .required('First Name is required')
            .min(2, 'Invalid First Name')
            .max(20, 'Invalid First Name'),
        lastName: yup
            .string()
            .required('Last Name is required')
            .min(2, 'Invalid Last Name')
            .max(20, 'Invalid Last Name'),
        tel: yup.string().required('Phone number is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        address: yup.string().required('Please provide your address'),
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
    firstName: string;
    lastName: string;
    tel: string;
    email: string;
    address: string;
    username: string;
    password: string;
}
const SignUp = () => {
    const [signup] = useSignupMutation()
    const methods = useForm<inputs>({
        defaultValues: {
            firstName: '',
            lastName: '',
            tel: '',
            email: '',
            address: '',
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const {
        handleSubmit,
    } = methods;
    const onSubmit: SubmitHandler<inputs> = async (data: inputs) => {
        signup(data).unwrap().then(res => console.log(res))
    }
    return (
        <>
            <Helmet>
                <title>
                    Sign Up
                </title>
            </Helmet>
            <section className="bg-gray-50 dark:bg-gray-900 cont-y container-p">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                    <Link href="/" className="mb-6">
                        <Image src={Logo} alt="logo" width={100} />
                    </Link>
                    <div className="w-96 sm:!w-64 bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0 md:w-80  dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up to your account
                            </h1>
                            <FormProvider  {...methods}>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                    <RHFTextfield name="firstName" type="text" placeholder="John..." label="First Name" />
                                    <RHFTextfield name="lastName" type="text" placeholder="Doe..." label="Last Name" />
                                    <RHFPhone label="Your Phone" />
                                    <RHFTextfield name="email" type="email" placeholder="name@gmail.com" label="Your Email" />
                                    <RHFTextfield name="address" type="text" placeholder="Somewhere, some street, home-1" label="Your Address" />
                                    <RHFTextfield name="username" type="text" placeholder="johndoe123" label="Your Username" />
                                    <RHFTextfield name="password" type="password" placeholder="••••••••" label="Password" />

                                    <button type="submit"
                                        className="w-full text-white bg-dark focus:outline-none font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Have an account? <Link href="login" className="font-medium text-dark hover:underline dark:text-primary-500">Sign In</Link>
                                    </p>
                                </form>
                            </FormProvider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp