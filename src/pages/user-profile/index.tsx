import Body from "@/sections/userProfile/Body"
import { Helmet } from "react-helmet-async"
const UserProfile = () => {
    return (
        <>
            <Helmet>
                <title>
                    User Profile
                </title>
            </Helmet>
            <div className="bg-[#f8f8f8] container-p">
                <Body />
            </div>
        </>
    )
}

export default UserProfile