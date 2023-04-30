import Searchoption from "./searchoption"
import { useRouter } from "next/router"
const Searchheaderoptions = () => {
  const router = useRouter();
  return (
    <>
    <div className="flex gap-5">
      <div className="flex w-10 justify-center cursor-pointer">
      <svg width={18} height={18} focusable="false" viewBox="0 0 24 24"><path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path><path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path><path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path><path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path></svg>
      <Searchoption selector={router.query.searchType === "" ||!router.query.searchType} text="All"/>
      </div>
      <div className="flex gap-1 cursor-pointer">
      <svg width={18} height={18} focusable="false" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill="none" d="M0 0h24v24H0z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4285F4" d="M19 22h-7v-2h7c.55 0 1-.46 1-1V5a1 1 0 0 0-1-.99L12 4V2h7c1.66 0 3 1.36 3 3v14c0 1.65-1.35 3-3 3"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#EA4335" d="M12 22H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h7v2H5c-.55 0-.99.45-.99 1L4 19c0 .55.45 1 1 1h7v2z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#34A853" d="M14 13l-2.25 2.75L10 14l-4 4h12z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#FBBC04" d="M10 8c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.09.9-2 2-2s2 .9 2 2"></path></svg>
      <Searchoption selector={router.query.searchType === "image"} text="Images" />
      </div>
      </div>
    </>
  )
}

export default Searchheaderoptions
