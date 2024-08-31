import headerImage from "../assets/color-palette.png";

import "../css/ArtProjects.css";

import { FaInstagram } from "react-icons/fa";

export default function ArtProjects() {
  return (
    <div id="top" className="md:px-32">
      <div className="flex flex-row space-x-4 justify-between items-center">
        <div className="py-16 flex flex-col space-y-4">
          <div className="flex flex-row sm:space-x-2 items-center ">
            <h1 className="text-[44px] sm:text-[48px] font-medium">
              Art projects
            </h1>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-[16px]">
              I have always loved to create art, whether that be through digital painting or physical drawings.
            </p>
            <p className="text-[16px]">
            I use art as a way to relax and express my feelings to others. Below, you can see a mix of my favourite art projects created in various media.
            </p>
            <p className="text-[16px]">
              Hover over each to see more details!
            </p>
          </div>
          <a href="https://www.instagram.com/sriraqa/" target="_blank" className="flex flex-row space-x-1 items-center cursor-pointer">
            <FaInstagram />
            <p className="text-[16px] font-medium">
              sriraqa
            </p>
          </a>
        </div>
        <img src={headerImage} className="w-[40%] max-w-[320px] aspect-auto hidden md:block"/>
      </div>

      <div className="gallery-row pb-20">
        <div className="gallery-column">
            <div className="gallery-container">
                <img src={require("../assets/art/iu_painting.JPG")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  January 2023 - Acrylic
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/taesan.JPG")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  September 2023 - Adobe Fresco
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/kewl2.png")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  December 2020 - Photoshop
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/scratch and ink.jpg")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  December 2020 - Scratch and Ink
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/pewds.png")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  January 2021 - Photoshop
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/firecrackers.png")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  August 2020 - Photoshop
                </div>
            </div>
        </div>    
        <div className="gallery-column">
            <div className="gallery-container">
                <img src={require("../assets/art/hand holding rose.png")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  August 2020 - Photoshop
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/somePose.JPG")} className="gallery-img w-full;"/>
                <div className="middle-gallery-text">
                  August 2022 - Acrylic
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/coca cola.png")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  August 2020 - Photoshop
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/birbs.png")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  August 2020 - Photoshop
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/girl in fantasy world.JPG")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  May 2021 - Pencil Crayon
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/mob.JPG")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  February 2021 - Acrylic Paint
                </div>
            </div>
        </div>
        <div className="gallery-column">
            <div className="gallery-container">
                <img src={require("../assets/art/jisung_painting.JPG")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  April 2023 - Acrylic
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/sneakers.JPG")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  August 2023 - Acrylic
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/hand reaching down.png")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  July 2021 - Photoshop
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/pastel_cup.JPG")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  May 2022 - Acrylic
                </div>
            </div>
            <div className="gallery-container">
                <img src={require("../assets/art/chill_frog.JPG")} className="gallery-img w-full"/>
                <div className="middle-gallery-text">
                  May 2022 - Acrylic
                </div>
            </div>
        </div>
      </div>
    </div>
  )
};