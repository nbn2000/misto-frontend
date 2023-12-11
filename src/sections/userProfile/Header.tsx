import Image from "next/image"
import Avatar from "@/assets/channels4_profile.png"
import { useState } from "react"
import Modal from "@/components/Modal"
import { useRouter } from "next/router"
import { useUploadFileMutation } from "@/api/file-api-req"
import { Controller, useFormContext } from "react-hook-form";


const Header = () => {
    const [open, setOpen] = useState(false)
    const [uploadFile] = useUploadFileMutation()
    const [file, setFile] = useState<any>()
    const router = useRouter()

    const {
        control,
        setValue,
        watch,
    } = useFormContext();

    const onAgree = () => {
        localStorage.clear()
        router.push('/')
    }
    const handleFileChange = async (e: any) => {
        const formData = new FormData();
        const { files } = e.target;
        formData.append('file', files[0]);
        await uploadFile(formData)
            .unwrap()
            .then((data: any) => {
                setFile(data?.innerData)
                setValue('file', data?.innerData)
            });
    }
    return (
        <Controller
            name="file"
            control={control}
            render={({ field }) => (
                <div className="flex flex-col gap-12">
                    <Modal open={open} header="Attantion!" p="If you click agree you will be signed out are you sure ?" setOpen={setOpen} onAgree={onAgree} />
                    <div className="flex flex-row justify-between items-center md:flex-col md:justify-center md:gap-6">
                        <div >
                            <h3 className="title-26-36 text-dark">User Profile</h3>
                            <hr className="bg-[#D0D0D0] w-full h-[1px] " />
                        </div>
                        <button type="button" onClick={() => setOpen(true)} className="btn-text text-gr-white h-12 bg-dark px-6 flex items-center cursor-pointer active:scale-[0.98]">Sign Out</button>
                    </div>
                    <div className="flex flex-row justify-between items-center lg:flex-col lg:gap-6">
                        <div className="flex flex-row justify-center items-center gap-4 sm:flex-col">
                            <div className="avatar">
                                <div className="w-[80px] rounded-full ring ring-[#121212] ring-offset-base-100 ring-offset-2">
                                    {file ? (
                                        <img src={file} alt="avatar" />
                                    ) : (
                                        <Image src={Avatar} alt="avatar" width={80} height={80} />
                                    )
                                    }
                                </div>
                            </div>

                            <div className="sm:text-center">
                                <h4 className="title-22-30 !capitalize text-dark">Avatar Avatarov</h4>
                                <h4 className="body-14-22 text-dark">avatar000@gmail.com</h4>
                                <h4 className="body-14-22 text-[#6B7280]">near to Everest mounten top China</h4>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-14 xl:gap-10 md:flex-col">
                            <label className="btn-text text-gr-white h-12 bg-dark px-6 flex justify-center items-center active:scale-[0.98] cursor-pointer" >
                                <input type="file" id="file" className="hidden" accept="image/x-png, image/jpeg" onChange={handleFileChange} />
                                Upload New Photo</label>
                            <button type="button" className="border-button btn-text text-dark h-12 bg-white px-6">Delete</button>
                        </div>
                    </div>
                    <hr className="bg-[#D0D0D0] w-full h-[1px]" />
                </div>
            )}
        />

    )
}

export default Header