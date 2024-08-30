import aboutPhoto from "../assets/about_photo.jpeg";
import sparkles from "../assets/sparkles2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import SmallButton from "../components/SmallButton";

export default function About() {
  return (
    <div className="min-[980px]:pt-16 px-0 min-[980px]:px-32 min-[1600px]:px-52 flex flex-col min-[980px]:flex-row items-center min-[980px]:space-x-8">
      <div className="w-full min-[980px]:w-2/5">
        <img className="max-h-[450px] w-full object-cover mb-8 min-[980px]:mb-0" src={aboutPhoto} alt="Photo at a Fountain"/>
      </div>
      <div className="w-full min-[980px]:w-3/5 flex flex-col space-y-4">
        <div className="flex flex-row space-x-2 items-center ">
          <img className="h-[28px]" src={sparkles}/>
          <h2 className="text-[28px] sm:text-[32px] font-medium">
            About me
          </h2>
        </div>
        <div className="flex flex-col space-y-2 text-md">
          <p>
            I am a Systems Design Engineering student at the University of Waterloo with experience as a product 
            designer and developer. I love to get involved by joining hackathons like Hack the North and joining 
            design teams like UW Blueprint!
          </p>
          <p>
            I most recently worked at UW Blueprint as a product designer and at Magi Inc. as software engineer intern. 
            I have previously worked at Interac as a product design intern and Imagine Communications as a full 
            stack intern.
          </p>
          <p>
            In my free time, I love to work on art projects, listen to r&b and k-pop, and try out good food spots! 
            I try to keep an open mindset, so I am always looking and eager to learn new things.
          </p>
        </div>
        <div className="flex flex-col space-y-2 text-md">
          <h3 className="text-lg font-medium">
            Want to find out more?
          </h3>
          <div className="flex flex-row space-x-4">
            <SmallButton>
              <a href="https://www.linkedin.com/in/sarah-qiao/" target="_blank" className="flex flex-row space-x-1 items-center w-full justify-center">
                <FaLinkedin />
                <p>Linkedin</p>
                <GoArrowUpRight />
              </a>
            </SmallButton>
            <SmallButton>
              <a href="https://github.com/sriraqa" target="_blank" className="flex flex-row space-x-1 items-center w-full justify-center">
                <FaGithub />
                <p>Github</p>
                <GoArrowUpRight />
              </a>
            </SmallButton>
            <SmallButton>
              <a href="mailto: syqiao@uwaterloo.ca" target="_blank" className="flex flex-row space-x-1 items-center w-full justify-center">
                <FaPaperPlane />
                <p>Email</p>
                <GoArrowUpRight />
              </a>
            </SmallButton>
          </div>
        </div>
      </div>
    </div>
  )
};