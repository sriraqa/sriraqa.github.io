import { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";

import Button from "../components/Button";

import sparkles from "../assets/sparkles.png";
import illustration from "../assets/illustration.png";
import illustrationActive from "../assets/illustration-active.png";
import scrapcard from "../assets/scrapcard.png";
import navcare from "../assets/navcare.png";
import interac from "../assets/interac.png";
import newsbear from "../assets/newsbear.png";
import art from "../assets/art.png";
import { FaGithub, FaLinkedinIn, FaPaperPlane } from "react-icons/fa6";

export default function Home() {
  const [clicked, setClicked] = useState<boolean>(false);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const reset = async () => {
      await timeout(800);
      setClicked(false);
    };
    if (clicked) {
      reset();
    }
  }, [clicked]);

  return (
    <div
      id="top"
      className="flex flex-col pb-20 w-full min-[930px]:px-28 sm:px-16 items-center"
    >
      {/* Header */}
      <div className="md:h-[90vh] items-center pb-20 flex flex-col-reverse min-[833px]:flex-row md:space-x-8 mx-auto">
        <div className="flex flex-col space-y-2 max-w-[560px]">
          <div className="flex flex-row sm:space-x-2 items-center ">
            <img
              className="h-[32px] hidden sm:block"
              src={sparkles}
              alt="Sparkles"
            />
            <h1 className="text-[32px] sm:text-[36px] font-medium">
              Hi there, I'm Sarah
            </h1>
          </div>
          <div className="flex flex-col space-y-8">
            <p className="text-[24px]">
              I'm a systems design engineering student with the goal of
              intersecting <a>design</a> and <a>development</a> to make tech
              more usable and accessible. I current work at StackAdapt as a
              software engineer intern.
            </p>
          </div>
          <div
            style={{
              textAlign: "right",
              display: "flex",
              gap: "16px",
              paddingTop: "12px",
            }}
          >
            <span>
              <a
                className="icon"
                href="https://www.linkedin.com/in/sarah-qiao/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={20} />
              </a>
            </span>
            <span>
              <a
                className="icon"
                href="https://github.com/sriraqa"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </span>
            <span>
              <a
                className="icon"
                href="mailto: syqiao@uwaterloo.ca"
                target="_blank"
                rel="noreferrer"
              >
                <FaPaperPlane size={20} />
              </a>
            </span>
          </div>
        </div>
        <div className="mt-4 mb-10 bg-illustration-bg max-h-[200px] max-w-[220px] min-h-[200px] min-w-[220px] cursor-pointer">
          {clicked ? (
            <img
              className="button max-h-[200px] max-w-[220px] min-h-[200px] min-w-[220px]"
              src={illustrationActive}
              alt="Website Illustration"
            />
          ) : (
            <img
              onClick={() => setClicked(true)}
              className="button max-h-[200px] max-w-[220px] min-h-[200px] min-w-[220px]"
              src={illustration}
              alt="Website Illustration"
            />
          )}
        </div>
      </div>

      {/* Projects */}
      <div
        id="portfolio"
        className="flex flex-col space-y-12 w-full max-w-[812px] pt-24"
      >
        <Button>
          {/* <NavHashLink to="/interac#top" className="menu-item"> */}
          <div className="flex flex-row space-x-6 items-center">
            <div className="sm:w-3/5 flex flex-col space-y-4">
              <div className="flex flex-col">
                <h2 className="text-[32px] font-semibold">Scrap Card</h2>
                <p className="text-body/60 font-medium text-[16px]">
                  Current Personal Project
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="100%"
                  height="7"
                  fill="none"
                >
                  <path
                    d="M1 1.443C1 2.62951 9.46221 2.93638 11.78 3.00711C17.7839 3.19034 22.5205 1.66631 28.3678 1.30178C34.6693 0.908937 41.2777 0.90344 47.5801 1.26304C61.1552 2.0376 72.817 5.40653 86.6614 5.40653C94.0403 5.40653 100.192 3.94417 107.22 3.23356C114.035 2.54454 121.24 2.30799 128.216 2.10134C134.023 1.9293 140.041 1.8355 145.765 2.31478C152.264 2.85887 157.952 4.3334 164.188 5.20808C170.033 6.02785 177.046 6.15322 183.145 5.84767C190.172 5.49564 195.551 4.04813 202.096 3.14583C215.163 1.34432 228.874 0.285019 242.328 1.95262C251.72 3.11676 260.041 4.69472 269.95 5.06561C280.891 5.47513 291.036 4.05845 301 2.28879"
                    stroke="#46464A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h6 className="text-[16px]">
                Mobile app project that I am building from scratch! Helping
                people reflect and maintain meaningful relationships online
              </h6>
              <p className="text-primary text-[16px]">In Progress 🔒</p>
            </div>
            <div className="w-2/5 hidden sm:block">
              <img src={scrapcard} alt="Scrap Card Project" />
            </div>
          </div>
          {/* </NavHashLink> */}
        </Button>
        <Button>
          <NavHashLink to="/interac#top" className="menu-item">
            <div className="flex flex-row space-x-6 items-center">
              <div className="sm:w-3/5 flex flex-col space-y-4">
                <div className="flex flex-col">
                  <h2 className="text-[32px] font-semibold">
                    Interac Verified
                  </h2>
                  <p className="text-body/60 font-medium text-[16px]">
                    Fall 2023 Internship
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="100%"
                    height="7"
                    fill="none"
                  >
                    <path
                      d="M1 1.443C1 2.62951 9.46221 2.93638 11.78 3.00711C17.7839 3.19034 22.5205 1.66631 28.3678 1.30178C34.6693 0.908937 41.2777 0.90344 47.5801 1.26304C61.1552 2.0376 72.817 5.40653 86.6614 5.40653C94.0403 5.40653 100.192 3.94417 107.22 3.23356C114.035 2.54454 121.24 2.30799 128.216 2.10134C134.023 1.9293 140.041 1.8355 145.765 2.31478C152.264 2.85887 157.952 4.3334 164.188 5.20808C170.033 6.02785 177.046 6.15322 183.145 5.84767C190.172 5.49564 195.551 4.04813 202.096 3.14583C215.163 1.34432 228.874 0.285019 242.328 1.95262C251.72 3.11676 260.041 4.69472 269.95 5.06561C280.891 5.47513 291.036 4.05845 301 2.28879"
                      stroke="#46464A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="text-[16px]">
                  Case study of my product design experience on the Interac
                  Verified team!
                </h6>
                <p className="text-primary text-[16px]">
                  View case study overview→
                </p>
              </div>
              <div className="w-2/5 hidden sm:block">
                <img src={interac} alt="Interac Projects" />
              </div>
            </div>
          </NavHashLink>
        </Button>
        <Button>
          <NavHashLink to="/navcare#top" className="menu-item">
            <div className="flex flex-row space-x-6 items-center">
              <div className="sm:w-3/5 flex flex-col space-y-4">
                <div className="flex flex-col">
                  <h2 className="text-[32px] font-semibold">Navcare</h2>
                  <p className="text-body/60 font-medium text-[16px]">
                    (Team Navcare) Hack the North 2022
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="100%"
                    height="7"
                    fill="none"
                  >
                    <path
                      d="M1 1.443C1 2.62951 9.46221 2.93638 11.78 3.00711C17.7839 3.19034 22.5205 1.66631 28.3678 1.30178C34.6693 0.908937 41.2777 0.90344 47.5801 1.26304C61.1552 2.0376 72.817 5.40653 86.6614 5.40653C94.0403 5.40653 100.192 3.94417 107.22 3.23356C114.035 2.54454 121.24 2.30799 128.216 2.10134C134.023 1.9293 140.041 1.8355 145.765 2.31478C152.264 2.85887 157.952 4.3334 164.188 5.20808C170.033 6.02785 177.046 6.15322 183.145 5.84767C190.172 5.49564 195.551 4.04813 202.096 3.14583C215.163 1.34432 228.874 0.285019 242.328 1.95262C251.72 3.11676 260.041 4.69472 269.95 5.06561C280.891 5.47513 291.036 4.05845 301 2.28879"
                      stroke="#46464A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="text-[16px]">
                  Winning project from Hack the North! Responsive web app that
                  optimizes PSW schedules.
                </h6>
                <p className="text-primary text-[16px]">View case study→</p>
              </div>
              <div className="w-2/5 hidden sm:block">
                <img src={navcare} alt="Navcare Logo" />
              </div>
            </div>
          </NavHashLink>
        </Button>
        {/* <Button>
          <NavHashLink to="/newsbear#top" className="menu-item">
            <div className="flex flex-row space-x-6 items-center">
              <div className="sm:w-3/5 flex flex-col space-y-4">
                <div className="flex flex-col">
                  <h2 className="text-[32px] font-semibold">
                    NewsBear Mobile App
                  </h2>
                  <p className="text-body/60 font-medium text-[16px]">
                    (Team QMK DEL) Technovation Girls 2021
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="100%"
                    height="7"
                    fill="none"
                  >
                    <path
                      d="M1 1.443C1 2.62951 9.46221 2.93638 11.78 3.00711C17.7839 3.19034 22.5205 1.66631 28.3678 1.30178C34.6693 0.908937 41.2777 0.90344 47.5801 1.26304C61.1552 2.0376 72.817 5.40653 86.6614 5.40653C94.0403 5.40653 100.192 3.94417 107.22 3.23356C114.035 2.54454 121.24 2.30799 128.216 2.10134C134.023 1.9293 140.041 1.8355 145.765 2.31478C152.264 2.85887 157.952 4.3334 164.188 5.20808C170.033 6.02785 177.046 6.15322 183.145 5.84767C190.172 5.49564 195.551 4.04813 202.096 3.14583C215.163 1.34432 228.874 0.285019 242.328 1.95262C251.72 3.11676 260.041 4.69472 269.95 5.06561C280.891 5.47513 291.036 4.05845 301 2.28879"
                      stroke="#46464A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="text-[16px]">
                  An Android app created using Java that identifies fake news
                  articles
                </h6>
                <p className="text-primary text-[16px]">View case study→</p>
              </div>
              <div className="w-2/5 hidden sm:block">
                <img src={newsbear} alt="NewsBear Logo" />
              </div>
            </div>
          </NavHashLink>
        </Button> */}
        <Button>
          <NavHashLink to="/art#top" className="menu-item">
            <div className="flex flex-row space-x-6 items-center">
              <div className="sm:w-3/5 flex flex-col space-y-4">
                <div className="flex flex-col">
                  <h2 className="text-[32px] font-semibold">Art Projects</h2>
                  <p className="text-body/60 font-medium text-[16px]">
                    2019 - Present
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="100%"
                    height="7"
                    fill="none"
                  >
                    <path
                      d="M1 1.443C1 2.62951 9.46221 2.93638 11.78 3.00711C17.7839 3.19034 22.5205 1.66631 28.3678 1.30178C34.6693 0.908937 41.2777 0.90344 47.5801 1.26304C61.1552 2.0376 72.817 5.40653 86.6614 5.40653C94.0403 5.40653 100.192 3.94417 107.22 3.23356C114.035 2.54454 121.24 2.30799 128.216 2.10134C134.023 1.9293 140.041 1.8355 145.765 2.31478C152.264 2.85887 157.952 4.3334 164.188 5.20808C170.033 6.02785 177.046 6.15322 183.145 5.84767C190.172 5.49564 195.551 4.04813 202.096 3.14583C215.163 1.34432 228.874 0.285019 242.328 1.95262C251.72 3.11676 260.041 4.69472 269.95 5.06561C280.891 5.47513 291.036 4.05845 301 2.28879"
                      stroke="#46464A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="text-[16px]">
                  A collection of my favourite recent art pieces
                </h6>
                <p className="text-primary text-[16px]">View projects→</p>
              </div>
              <div className="w-2/5 hidden sm:block">
                <img src={art} alt="Art Project Drawing" />
              </div>
            </div>
          </NavHashLink>
        </Button>
      </div>
    </div>
  );
}
