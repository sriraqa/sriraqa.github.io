import { RiSlideshowFill } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import headerImage from "../assets/navcare_header.png";
import news from "../assets/navcare/navcare_news.png";
import mobile1 from "../assets/navcare/navcare_mobile1.png";
import mobile2 from "../assets/navcare/navcare_mobile2.png";
import desktop from "../assets/navcare/navcare_desktop.png";
import versionA from "../assets/navcare/navcare_versionA.png";
import versionB from "../assets/navcare/navcare_versionB.png";

export default function Navcare() {
  return (
    <div className="md:px-32 flex flex-col items-center">
      <div className="flex flex-row md:space-x-12 items-center">
        <div className="py-16 flex flex-col space-y-4">
          <div className="flex flex-row sm:space-x-2 items-center">
            <h1 className="text-[44px] sm:text-[48px] font-semibold">
              Navcare
            </h1>
          </div>
          <div className="flex flex-col space-y-6 max-w-[800px]">
            <p className="text-[16px]">
              Responsive web app that improves the scheduling and travelling experience for Personal Support Workers. Created for {" "}
              <a href="https://hackthenorth2022.devpost.com/" target="_blank">Hack the North 2022</a>. Placed as a {" "}
              <a href="https://hackthenorth2022.devpost.com/project-gallery" target="_blank">winning team</a> in the competition.
            </p>
            <div className="pl-4 flex flex-col space-y-2 border-l-2 border-primary">
              <p><span className="font-medium">Role:</span> UI/UX Designer, Front-End Developer</p>
              <p><span className="font-medium">Team:</span> 1 UI/UX Designer, 3 Front-End Developers, and 1 Back-End Developer</p>
              <p><span className="font-medium">Date:</span> 16 Sep 2022 - 18 Sep 2022 (36 Hours)</p>
              <p><span className="font-medium">Skills:</span> UI/UX Design (Figma), Branding (Photoshop), ReactJS, HTML/CSS</p>
            </div>
            <div className="flex flex-row space-x-2">
              <a href="https://github.com/KennethRuan/navcare" className="flex flex-row space-x-1 items-center">
                <FaGithub />
                <p>Repo</p>
              </a>
              <p>·</p>
              <a href="https://devpost.com/software/navcare" className="flex flex-row space-x-1 items-center">
                <FaTrophy />
                <p>Devpost</p>
              </a>
              <p>·</p>
              <a href="https://docs.google.com/presentation/d/1zjoD35NGiSy1QLiBCAW0OKeNHgjszM8TK7PEo0UFax4/edit?usp=sharing" className="flex flex-row space-x-1 items-center">
                <RiSlideshowFill />
                <p>Pitch slides</p>
              </a>
            </div>
          </div>
        </div>
        <img src={headerImage} className="max-h-[400px] object-contain hidden md:block"/>
      </div>

      <div className="pb-20 max-w-[800px] flex flex-col space-y-12">
        <div className="flex flex-col space-y-2">
          <h1 className="text-[28px] sm:text-[32px] font-semibold">
            Introduction
          </h1>
          <div className="flex flex-col space-y-6 max-w-[800px]">
            <p className="text-[16px]">
              As we settle back into normalcy following the COVID-19 pandemic, we see that there are still lingering effects in our healthcare system. These effects not only affect 
              healthcare employees, but also anyone else in need of healthcare. In Canada, Personal Support Workers (PSWs) are healthcare workers that travel between personal and nursing homes 
              to provide healthcare for the elderly and disabled. Despite being an important backbone for the healthcare system, PSWs are given unrealistic shifts and 
              are lacking representation in healthcare.
            </p>
            <img src={news} width="100%"/>
            <p className="text-[16px]">
              Based on these findings, a problem statement was created that condensed these issues into a user-centered question:
            </p>
            <div className="pl-4 border-l-2 border-primary font-medium">
              How might our app improve the scheduling and travelling experience for Personal Support Workers in Canada to help them better schedule their work time and, in turn, mitigate the growing staffing problem in hospitals?
            </div>
            <p className="text-[16px]">
            Created by a team of four members, Navcare is our way of improving the scheduling and travelling experience for Personal Support Workers to help mitigate the growing staffing problem in healthcare.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-[28px] sm:text-[32px] font-semibold">
            User research
          </h1>
          <div className="flex flex-col space-y-6 max-w-[800px]">
            <p className="text-[16px]">
              I first heard about this issue because my grandparent is visited by PSWs daily. From speaking to the PSWs, I learned more about the issues that come with scheduling shifts and travel time. These issues are further 
              supported by staistics from a survey of Ontario PSWs in home and community care. This survey was conducted by the Canadian Research Network for Care in the Community:
            </p>
            <div className="px-4 flex flex-col space-y-4">
              <h4 className="text-[20px] sm:text-[24px] font-semibold">Statistic summary:</h4>
              <ol className="flex flex-col space-y-2 list-decimal pl-4">
                <li>64.2% of respondents stated that their schedule was not always flexible enough to address clients with different care needs.</li>
                <li>45% of respondents stated that a job with better pay/schedule would persuade them to stop working as a PSW.</li>
                <li>65% of respondents say that the pay is too low, and 45% say that there are too few hours.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-[28px] sm:text-[32px] font-semibold">
            The solution
          </h1>
          <div className="flex flex-col space-y-6 max-w-[800px]">
            <p className="text-[16px]">
              Based on the research conducted, I worked with the developers in my team to create a general plan for the app: to create a responsive web app 
              that aids in scheduling shifts by optimizing travel plans and prodiving PSWs with necessary information in one app. Employing the responsive function, 
              we aimed to create two types of interfaces:
            </p>

            <div className="flex flex-col space-y-2">
              <p className="text-[16px] font-semibold">
                1. Mobile interface
              </p>
              <p className="text-[16px]">
                Aimed towards PSWs that are travelling and planning their schedule while working.
              </p>
              <div className="flex flex-row justify-center space-x-8 py-4">
                <img src={mobile1} width="30%"/>
                <img src={mobile2} width="30%"/>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-[16px] font-semibold">
                1. Desktop interface
              </p>
              <p className="text-[16px]">
                Aimed towards PSWs that are travelling and planning their schedule while working.
              </p>
              <img className="w-full py-4" src={desktop}/>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-[28px] sm:text-[32px] font-semibold">
            Wireframes
          </h1>
          <div className="flex flex-col space-y-6 max-w-[800px]">
            <p className="text-[16px]">
              Wanting to present a familiar environment to the users, I first looked at apps with 
              similar mapping and scheduling functions to find elements with positive UX designs 
              that could be used for Navcare.
            </p>

            <div className="flex flex-row justify-center space-x-8 py-4">
              <img className="w-[20%] object-contain" src={require("../assets/navcare/navcare_mapref.JPG")}/>
              <div className="w-full flex flex-col space-y-2">
                <p className="text-[16px] font-medium">
                  Map reference:
                </p>
                <ol className="flex flex-col space-y-2 list-disc pl-4">
                  <li>Map is main focus on screen</li>
                  <li>Further details seen by swiping up</li>
                  <li>GPS and route mapping functions</li>
                </ol>
              </div>
              <img className="w-[20%] object-contain" src={require("../assets/navcare/navcare_scheduleref.JPG")}/>
              <div className="w-full flex flex-col space-y-2">
                <p className="text-[16px] font-medium">
                  Schedule reference:
                </p>
                <ol className="flex flex-col space-y-2 list-disc pl-4">
                  <li>Listed based on wait times and availability of rides</li>
                  <li>Schedule can be edited by user</li>
                  <li>Listed chronologically and clearly</li>
                </ol>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-[16px]">
              Two Figma wireframes were also created and presented to the team members to show the potential functionality of each design:
              </p>
              <div className="flex flex-row justify-center space-x-8 py-4">
              <img className="w-[20%] object-contain" src={versionA}/>
              <div className="w-full flex flex-col space-y-2">
                <div className="w-full flex flex-col space-y-0">
                  <p className="text-[16px] font-medium">
                    Version A:
                  </p>
                  <p className="text-[16px] font-medium">
                    Modified Google Maps
                  </p>
                </div>
                <ol className="flex flex-col space-y-2 list-disc pl-4">
                  <li>Map is main focus on screen</li>
                  <li>Further details seen by swiping up</li>
                  <li>GPS and route mapping functions</li>
                </ol>
              </div>
              <img className="w-[20%] object-contain" src={versionB}/>
              <div className="w-full flex flex-col space-y-2">
                <div className="w-full flex flex-col space-y-0">
                  <p className="text-[16px] font-medium">
                    Version B:
                  </p>
                  <p className="text-[16px] font-medium">
                    "All In One" App
                  </p>
                </div>
                <ol className="flex flex-col space-y-2 list-disc pl-4">
                  <li>Listed based on wait times and availability of rides</li>
                  <li>Schedule can be edited by user</li>
                  <li>Listed chronologically and clearly</li>
                </ol>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-2">
              <h1 className="text-[28px] sm:text-[32px] font-semibold">
                App features
              </h1>
              <ol className="flex flex-col space-y-2 list-disc pl-4">
                <li>Log in page for either PSWs or doctors/managers that would be inputting patient information into the database.</li>
                <li>Logo designed to reflect the objectives and target users of the app.</li>
                <li>Homepage with map and schedule features.</li>
                <li>Map feature does procedural location scans around a given PSW and determines the most optimal patient home based on travel time.</li>
                <ol className="flex flex-col space-y-2 list-disc pl-6">
                  <li>Map feature uses Google Maps API to display the map and locations of patients/PSWs.</li>
                  <li>Schedule feature adds jobs based on location accessibility and finds efficient routes.</li>
                  <li>Schedule is displayed chronologically with the times displayed.</li>
                </ol>
              </ol>
            </div>

            <div className="w-full flex flex-col space-y-2">
              <h1 className="text-[28px] sm:text-[32px] font-semibold">
                Next steps
              </h1>
              <p className="text-[16px]">
                To make this project a functional app, we plan to incorporate feedback and user testing to improve 
                the user experience. We plan to add more features such as in-app notes or forms that PSWs can fill 
                out to share patients' needs with other PSWs that would work with them. Moreover, improvements on 
                the location algorithm can make the app more efficient.
              </p>
            </div>

            <div className="w-full flex flex-col space-y-2">
              <h1 className="text-[28px] sm:text-[32px] font-semibold">
                Outcomes and lessons
              </h1>
              <p className="text-[16px]">
                Despite all members of the team being in first year with less experience and technical innovation from 
                other contentants, I believe that we were able to stand out because of the in-depth UX research and design 
                that was conducted. From the start, our goal was to spread awareness about these vital members of our 
                healthcare system and show our connection and passion for supporting these workers.
              </p>
              <p className="text-[16px]">
                Overall, this hackathon was a unique experience that allowed me to learn about creating healthcare-based 
                technology and working in a team as the leading designer. As a result from two sleepless nights, our team 
                placed as one of the 12 <a href="https://hackthenorth2022.devpost.com/project-gallery" target="_blank">Hack the North 2022 Finalists</a> among 222 other projects that were submitted.
              </p>
            </div>
      </div>
    </div>
  )
};