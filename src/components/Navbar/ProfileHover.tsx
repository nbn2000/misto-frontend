import Avatar from "@/assets/channels4_profile.png";
import Image from "next/image";
import Link from "next/link";
const ProfileHover = ({ show, setShow }: { show?: boolean, setShow?: any }) => {
  const hidden = show ? '' : 'hidden'
  return (
    <div
      className={`${hidden} z-50 flex flex-col justify-center p-6 rounded-xl sm:p-0`}
    >
      <Image
        src={Avatar}
        alt="profile avatar"
        width={80}
        height={80}
        className="mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
          <p className="px-5 text-xs sm:text-base dark:text-gray-400">
            avatar123@gmail.com
          </p>
        </div>
        <div className="flex justify-center align-center gap-2 flex-wrap">
          <Link
            href="/user-profile"
            className="border-button text-dark bg-white py-2 px-8"
            onClick={() => setShow(false)}
          >
            Profile
          </Link>
          <button className="bg-dark text-white py-2 px-8" onClick={() => setShow(false)}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHover;
