import { useRouter } from "next/router"
import Image from "next/image";
import Link from "next/link";
const Pagination = () => {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 1;
  return (
    <>
      <div className="iconcontainer flex justify-around">
        <Link href={`/search?query=${router.query.query}&searchType=${router.query.searchType}&start=${startIndex + 10}`}>
        <div className="previouscontainer hover:underline hover:text-blue-800 decoration-blue-700">
        <Image className="w-7 bg-white rounded-full border" src={"/next.png"} width={20} height={20} alt="next"/>
        <p className="hover:underline hover:text-blue-800 decoration-blue-700">Next</p>
        </div>
        </Link>
        {startIndex>10?<Link href={`/search?query=${router.query.query}&searchType=${router.query.searchType}&start=${startIndex - 10}`}>
        <div className="previouscontainer hover:underline hover:text-blue-800 decoration-blue-700">
        <Image className="w-7 ml-2 bg-white rounded-full border" src={"/previous.png"} width={20} height={20} alt="previous"/>
        <p >Previous</p>
        </div>
        </Link>:null}
        
      </div>
    </>
  )
}

export default Pagination
