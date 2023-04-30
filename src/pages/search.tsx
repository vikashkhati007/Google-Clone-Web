import SearchHeader from "../../components/searchheader"
import Searchresults from "../../components/searchresults"
const Search = ({results}:any) => {
  const { items } = results || { items: [] }; 
  return (
    <>
     <SearchHeader/>
     <Searchresults results={items} result={results.searchInformation.formattedTotalResults} timing={results.searchInformation.formattedSearchTime}/>
    </>
  )
}

export async function getServerSideProps(context:any) {
  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.APIKEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.query}${context.query.searchType && "searchType=image"}`);
  const results = await data.json();
  return{
    props : {results}
  }
}

export default Search
