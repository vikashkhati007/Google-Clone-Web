import Link from "next/link"
import User from "./user"
import Image from "next/image"
const Header = (props) => {
  return (
    <>
      <header>
        <div className="w-full h-14 text-white flex justify-end items-center gap-5 px-5 my-3 fixed">
        <Link href={"https://mail.google.com"} className="hover:underline">
        <h3 className="text-sm">Google</h3>
        </Link>
        <Link href={"https://www.google.co.in/imghp?hl=en&ogbl"} className="hover:underline">
        <h3 className="text-sm">Images</h3>
        </Link>
        <div className="menucontainer p-2 rounded-full">
        <Image className="menuicon brightness-125 hover:cursor-pointer" src="/menu.png" width={17} height={17} alt="menuicon"/>
        </div>
        <User display={`${props.display}`}/>
        </div>
      </header>
    </>
  )
}

export default Header
