import aboutPhoto from "../assets/about_photo.jpeg";
import sparkles from "../assets/sparkles2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import SmallButton from "../components/SmallButton";

export default function About() {
  return (
    <div id="top" className="min-[980px]:pt-16 pb-20 px-0 min-[980px]:px-32 min-[1600px]:px-52 flex flex-col min-[980px]:flex-row items-center min-[980px]:space-x-8">
      <div className="w-full min-[980px]:w-2/5">
        <img className="max-h-[450px] w-full object-cover mb-8 min-[980px]:mb-0" src={aboutPhoto} alt="Photo at a Fountain"/>
      </div>
      <div className="w-full min-[980px]:w-3/5 flex flex-col space-y-6">
        <div className="flex flex-row space-x-2 items-center ">
          <img className="h-[28px]" src={sparkles}/>
          <h2 className="text-[28px] sm:text-[32px] font-medium">
            About me
          </h2>
        </div>
        <div className="flex flex-col space-y-4 text-md">
          <p>
            I am a <a href="https://uwaterloo.ca/future-students/programs/systems-design-engineering" target="_blank">systems design engineering</a> student at the University of Waterloo with experience as a product designer and developer.
          </p>
          <p>
            I most recently worked at <a href="https://uwblueprint.org/about" target="_blank">UW Blueprint</a> as a product designer and at <a href="https://www.magi.inc/" target="_blank">Magi Inc.</a> as a software engineer intern
            I have previously worked at <a href="https://www.interac.ca/en/about/" target="_blank">Interac</a> as a product design intern.
          </p>
          <p>
            In my free time, I love to work on <a href="https://sriraqa.github.io/#/art" target="_blank">art projects</a>, listen to r&b and k-pop, and try out good food spots! 
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