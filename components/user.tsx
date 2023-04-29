import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"

const User = (props:any) => {
  const {data:session} = useSession();
  if(session){
    return(
      <Image onClick={()=>{signOut()}} className="rounded-full hover:cursor-pointer" src={session.user.image} width={35} height={35} alt="googleimage"/>
    )
  }
  return (
    <>
    <button style={{display:`${props.display}`}} className="border bg-blue-600 p-1 rounded-lg text-sm w-20 font-sans shadow-sm shadow-slate-700 hover:bg-blue-700" onClick={()=>{signIn()}}>Sign-In</button>
    </>
  )
}

export default User
