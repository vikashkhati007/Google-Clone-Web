import Link from "next/link";
import Pagination from "./Pagination";
const Searchresults = ({results}) => {
  const items = results.items;
    return (
      <>
        <div className="text-white px-15 text-sm m-2 lg:pl-48 md:pl-20 sm:pl-10">
          <p className="text-gray-500">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>
          <div className="results">
            {items.map((result) => (
              <div key={result.link}>
                <Link href={result.link}>
                <div className="searchheadercontainer">
                  <p >{result.link}</p>
                  <h1 className="text-blue-800 brightness-200 text-xl">{result.title}</h1>
                </div>
                </Link>
                <p className="searchresultpara">{result.snippet}</p>
              </div>
            ))}
            <div className="paginationcontainer">
                <Pagination/>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Searchresults;