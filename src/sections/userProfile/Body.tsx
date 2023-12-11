import RHFTextfield from "@/components/hook-form/RHFTextfield"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RHFPhone } from "@/components/hook-form/RHFPhone"
import Modal from "@/components/Modal"
import Header from "@/sections/userProfile/Header"
import { useUserEditMutation } from "@/api/dynamic-api-res"

import { useState } from "react";
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
        file: yup.string()
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
    file?: string;
}

const Body = () => {
    const [open, setOpen] = useState(false)
    const [userEdit] = useUserEditMutation()
    const methods = useForm<inputs>({
        defaultValues: {
            firstName: '',
            lastName: '',
            tel: '',
            email: '',
            address: '',
            username: '',
            password: '',
            file: '',
        },
        resolver: yupResolver(schema),
    });
    const {
        handleSubmit,
        getValues,
        reset,
    } = methods;
    const onSubmit: SubmitHandler<inputs> = async (data: inputs) => {
        setOpen(true)
    }

    const onAgree = () => {
        userEdit({ id: "djoij2who234", body: getValues() }).unwrap().then((res) => {
            console.log(res)
        })
    }
    return (
        <div className="pt-12 pb-12">
            <FormProvider  {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-8">
                    <Header />

                    <Modal open={open} header="Attantion!" p="If you click agree your data will be changed permenently are you sure ?" setOpen={setOpen} onAgree={onAgree} />
                    <div className="flex flex-row justify-between items-center md:flex-col md:gap-10">
                        <RHFTextfield textColor="text-dark" bgInput="bg-white" name="firstName" label="First Name" placeholder="John..." type="text" className='w-[40%] md:w-full' />
                        <RHFTextfield textColor="text-dark" bgInput="bg-white" name="lastName" label="Last Name" placeholder="Doe..." type="text" className='w-[40%] md:w-full' />
                    </div>
                    <RHFTextfield textColor="text-dark" bgInput="bg-white" name="username" label="User Name" placeholder="johndoe..." type="text" />
                    <hr className="bg-[#D0D0D0] w-full h-[1px] " />
                    <div className="flex flex-row justify-between items-center md:flex-col md:gap-8">
                        <RHFTextfield textColor="text-dark" bgInput="bg-white" name="email" label="Email Address" placeholder="johndoe@gmail.com..." type="email" className='w-[40%] md:w-full' />
                        <RHFPhone label="Phone Number" bgInput="bg-white" textColor="text-dark" className='w-[40%] md:w-full' />
                    </div>
                    <hr className="bg-[#D0D0D0] w-full h-[1px] " />
                    <RHFTextfield textColor="text-dark" bgInput="bg-white" name="address" label="Your Address" placeholder="Somewhere, some street, home-1" type="text" />
                    <RHFTextfield textColor="text-dark" bgInput="bg-white" name="password" label="Your Password" placeholder="••••••••" type="password" />
                    <div className="flex flex-row justify-end items-center gap-14 md:gap-6 md:flex-col md:justify-center">
                        <button type="button" className="border-button btn-text text-dark h-12 bg-white px-6">Cancel</button>
                        <button type="submit" className="btn-text text-gr-white h-12 bg-dark px-6 flex items-center">Save Changes</button>
                    </div>

                </form>
            </FormProvider>
        </div>
    )
}

export default Body