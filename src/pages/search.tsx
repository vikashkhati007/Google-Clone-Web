import SearchHeader from "../../components/searchheader"
import Searchresults from "../../components/searchresults"
import Imagesoption from "../../components/imagesoption";
import { useRouter } from "next/router";
import response from "../../Response";
const Search = ({ results }: any) => {
  const router = useRouter();
  const search = router.query.searchType;
  return (
    <>
      <SearchHeader />
      {search === "image"?<Imagesoption results={response}/>:
      <Searchresults results={response}/>
      }
      
    </>
  )
}

export default Search

export async function getServerSideProps(context:any) {
  const startIndex = context.query.start || "1";
  const mockData = false;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.query}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}