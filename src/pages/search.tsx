import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image";
import User from "../../components/user";
import SearchHeaderOptions from "../../components/searchheaderoptions";
import { useRef } from "react";

const Search = () => {
const router = useRouter();
const query = router.query.query;
const searchref = useRef(null);

function search(e:any){
  const term = searchref.current.value;
  e.preventDefault();
  router.push(`/search?query=${term.trim()}&searchType=`);
}
  return (
    <div>
      <Head>
        <title>
        {query} - Google Search 
        </title>
      </Head>
      <header className="sticky top-0 w-full h-28 flex items-center gap-10 px-20">
        <Image className="" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" width={150} height={150} alt="googleicon"/>
        <div className="searched flex justify-between items-center gap-2">
        <div className="inputbox m-auto">
        <input ref={searchref} type="search" className="searchedinput pr-32 pl-5 outline-none text-white rounded-full bg-transparent shadow-sm shadow-black-100 hover:shadow-md hover:shadow-black-400"></input>
        </div>
        <Image className="flex border-l-2 border-gray-600 -translate-x-32 hover:cursor-pointer ml-1 pl-2" src={"/google-voice.png"} width={32} height={32} alt="googlevoice"/>
        <Image className="flex -translate-x-32 hover:cursor-pointer" src={"/googlelense.png"} width={32} height={32} alt="googlevoice"/>
        <Image onClick={search} className="flex -translate-x-32 hover:cursor-pointer" src={"/search-icon.png"} width={32} height={32} alt="googlevoice"/>
        </div>
        <div className="signin flex w-full justify-end">
        <User />
        </div>
        <div>
        <SearchHeaderOptions/>
        </div>
      </header>
        <hr className=""/>
    </div>
  )
}

export default Search
