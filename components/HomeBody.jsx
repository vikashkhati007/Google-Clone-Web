import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

const HomeBody = () => {
  const inputsearchref = useRef(null);
  const router = useRouter();

  function searchhandler(e) {
    e.preventDefault();
    const term = inputsearchref.current.value;
    if (!term.trim()) return;
    router.push(`/search?query=${term.trim()}&searchType=`);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") { // execute the searchhandler function when the "Enter" key is pressed
      searchhandler(e);
    }
  }

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center">
        <div className="bodycontainer w-full h-screen flex justify-center items-center flex-col gap-6">
          <Image
            src={
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            }
            width={270}
            height={80}
            alt="google-logo"
          />
          <div className="inputcontainer flex justify-between items-center">
            <Image
              className="absolute mx-2 my-2"
              src={"/searchicon.png"}
              width={25}
              height={25}
              alt="searchicon"
            />
            <div className="inputbox m-auto">
              <input
                ref={inputsearchref}
                className="googleinput w-96 rounded-full h-10 bg-transparent border text-white px-10"
                type="search"
                onKeyPress={handleKeyPress}
              />
            </div>
            <Image
              className="-translate-x-10 cursor-pointer"
              src={"/google-voice.png"}
              width={25}
              height={25}
              alt="searchicon"
            />
          </div>
          <div className="buttoncontainer flex gap-5 text-white text-sm shadow-gray-500 ">
            <button
              onClick={searchhandler}
              className="googlebutton w-40 h-10 rounded-md hover:border"
            >
              Google Search
            </button>
            <button className="googlebutton w-40 h-10 rounded-md hover:border">
              I&#39;m Feeling Lucky
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeBody;