import Link from "next/link";
const Searchresults = ({ result, timing, results }: any) => {
    console.log(results);
    return (
      <>
        <div className="text-white opacity-70 px-15 text-sm m-2 lg:pl-48 md:pl-20 sm:pl-10">
          <p>About {result} results ({timing} seconds)</p>
          <div className="results">
            {results.map((result: any) => (
              <div key={result.formattedUrl}>
                <Link href={result.formattedUrl}>
                <div className="searchheadercontainer">
                  <p >{result.formattedUrl}</p>
                  <h1 className="text-blue-800 brightness-200 text-xl">{result.title}</h1>
                </div>
                </Link>
                <p className="searchresultpara">{result.snippet}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default Searchresults;