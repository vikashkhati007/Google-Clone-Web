import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"

const User = (props) => {
  const {data:session} = useSession();
  if(session){
    return(
      <Image onClick={()=>{signOut()}} className="rounded-full hover:cursor-pointer" src={session.user.image} width={40} height={40} alt="googleimage"/>
    )
  }
  return (
    <>
    <button style={{display:`${props.display}`}} className="border bg-blue-600 p-1 rounded-xl text-sm w-20 text-white font-sans shadow-sm shadow-black hover:bg-blue-700 " onClick={()=>{signIn()}}>Sign-In</button>
    </>

  )
}

export default User
