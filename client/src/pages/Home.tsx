import { useEffect, useState } from "react";

import Button from "../components/Button";

import sparkles from "../assets/sparkles.png";
import illustration from "../assets/illustration.png";
import illustrationActive from "../assets/illustration-active.png";

export default function Home() {
  const [clicked, setClicked] = useState<boolean>(false);

  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
  }

  useEffect(() => {
    const reset = async () => {
      await timeout(800);
      setClicked(false);
    }
    reset();
  }, [clicked]);

  return (
    <div className="flex flex-col space-y-4 pb-20 w-full min-[930px]:px-28 sm:px-16 items-center">
      {/* Header */}
      <div className="md:h-[90vh] items-center pb-20 flex flex-col-reverse min-[833px]:flex-row md:space-x-8 items-start mx-auto">
        <div className="flex flex-col space-y-2 max-w-[560px]">
          <div className="flex flex-row sm:space-x-2 items-center ">
            <img className="h-[32px] hidden sm:block" src={sparkles}/>
            <p className="text-[32px] sm:text-[36px] font-medium">
              Hi there, I'm Sarah
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            <p className="text-[24px]">
              I'm a systems design engineering student with the goal of intersecting {" "}
              design and development to make tech more usable and accessible. I most recently 
              worked at Magi Inc. as a software engineer intern.
            </p>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="324" height="23" viewBox="0 0 324 23" fill="none">
              <path d="M3.76788 17.3029C1.7146 17.8065 1.10261 18.8285 3.82793 18.8285C11.7404 18.8285 20.0071 12.5479 27.6738 9.97735C34.5105 7.68509 41.8527 4.62189 48.9006 4.78377C52.9358 4.87646 49.1994 13.7475 48.8122 16.2963C47.5041 24.907 62.3282 19.2042 64.5697 18.4746C76.5963 14.56 88.5737 9.98809 100.773 7.44871C104.307 6.71321 113.222 3.32874 115.636 9.49854C117.899 15.2816 119.093 16.8704 124.005 16.9219C136.235 17.0504 148.454 11.2848 160.48 8.4378C166 7.13122 171.566 6.22699 177.138 5.64442C179.224 5.42632 182.862 4.33911 184.847 5.75364C187.053 7.32632 184.92 13.5299 188.5 14.5C197.29 16.8821 207.556 12.2783 216.187 9.82008C226.692 6.82775 237.263 2.31455 248.017 2.31455C249.699 2.31455 252.881 1.83664 253.795 4.82659C254.351 6.64522 254.033 8.85428 254.548 10.7218C257.372 20.9621 276.057 12.92 280.688 11.7406C294.409 8.24632 308.218 4.86777 322 2" stroke="#46464A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}
          </div>
        </div>
        <div className="mt-4 mb-10 bg-illustration-bg max-h-[200px] max-w-[220px] min-h-[200px] min-w-[220px] cursor-pointer">
          {clicked ? (
            <img className="button max-h-[200px] max-w-[220px] min-h-[200px] min-w-[220px]" src={illustrationActive}/>
          ) : (
            <img onClick={() => setClicked(true)} className="button max-h-[200px] max-w-[220px] min-h-[200px] min-w-[220px]" src={illustration}/>
          )}
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col space-y-12 w-full max-w-[812px]" id="portfolio">
        <Button>
          Hi
        </Button>
        <Button>
          Hi
        </Button>
        <Button>
          Hi
        </Button>
        <Button>
          Hi
        </Button>
      </div>
    </div>
  )
};