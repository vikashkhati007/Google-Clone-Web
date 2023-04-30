import { useRouter } from "next/router"
const Searchoption = (props:any) => {
  const router = useRouter();
  function searchTab(){
    router.push(`/search?query=${router.query.query}&searchType=${props.text === "Images"?"image":""}`)
}
  return (
    <div className="flex justify-center items-center gap-1">
    <p onClick={searchTab} className={`text-white hover:border-b-2 ${props.selector? "text-blue-500 border-b-2 border-blue-600": null}`} style={{fontSize:"13px"}}>{props.text}</p>
    </div>
  )
}

export default Searchoption
