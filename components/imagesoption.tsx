import Pagination from "./Pagination";
import Link from "next/link";
const Imagesoption = ({ results }) => {
  const items = results.items;

  return (
    <>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 m-10">
      {items.map((data) => {
        console.log(data);
        return (
          <div className="imagebox overflow-hidden">
              <a className="hover:underline" href={data.image.contextLink}>
                <img
                  className=" shadow shadow-md w-full lg:h-60 md:h-50 sm:h-40 object-cover rounded-md"
                  src={data.link}
                  alt={data.title}
                  width={150} height={150} />
              </a>
              <Link className="hover:underline text-white text-sm" href={data.image.contextLink}>
              {data.title}
              </Link>
            </div>
            );
        })}
          </div >
          <Pagination/>
          </>
    );
  };

      export default Imagesoption;