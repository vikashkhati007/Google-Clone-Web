import Link from "next/link";
import { useRouter } from "next/router";
const Searchoption = (props) => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center gap-1">
    <Link href={`/search?query=${router.query.query}&searchType=${props.text === "Images"?"image":""}`}>
    <p className={`text-white hover:border-b-2 ${props.selector? "text-blue-500 border-b-2 border-blue-600": null}`} style={{fontSize:"13px"}}>{props.text}</p>
    </Link>
    </div>
  )
}

export default Searchoption
