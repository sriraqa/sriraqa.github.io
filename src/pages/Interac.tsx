import headerImage from "../assets/interac_header.png";
import oldDesign from "../assets/interac/interac_nov2023.png";
import newDesign from "../assets/interac/interac_finaldesign.png";

export default function Interac() {
  return (
    <div className="md:px-32 flex flex-col items-center">
      <div className="flex flex-row md:space-x-12 items-center">
        <div className="py-16 flex flex-col space-y-4">
          <div className="flex flex-row sm:space-x-2 items-center">
            <h1 className="text-[44px] sm:text-[48px] font-semibold">
              Interac Verification Service
            </h1>
          </div>
          <div className="flex flex-col space-y-6 max-w-[800px]">
            <p className="text-[16px]">
              Project that I worked on while I was an intern on the Interac Verified team. Goal of this project was to 
              improve the user experience on the Interac Verification Service.
            </p>
            <div className="pl-4 flex flex-col space-y-2 border-l-2 border-primary">
              <p><span className="font-medium">Role:</span> Product designer</p>
              <p><span className="font-medium">Team:</span> 2 Designers, 1 Product Manager</p>
              <p><span className="font-medium">Date:</span> November 2023 (4 Weeks)</p>
              <p><span className="font-medium">Skills:</span> UI/UX Design (Figma), UX Research (UserTesting)</p>
            </div>
          </div>
        </div>
        <img src={headerImage} className="max-w-[400px] object-contain hidden md:block"/>
      </div>

      <div className="pb-20 max-w-[800px] flex flex-col space-y-12">
        <p className="font-semibold italic">
          Please Note: The following information is only an overview of the full case study because of a non-disclosure 
          agreement with the employer. The full case study and further details can be requested or presented by reaching 
          out to <a href="mailto: syqiao@uwaterloo.ca" target="_blank">syqiao@uwaterloo.ca</a>.
        </p>
        <div className="flex flex-col space-y-2">
          <h1 className="text-[28px] sm:text-[32px] font-semibold">
            Overview
          </h1>
          <div className="flex flex-col space-y-6 max-w-[800px]">
            <p className="text-[16px]">
              The <a href="https://www.interac.ca/en/consumers/products/interac-verification-solutions/verification-service/" target="_blank">Interac verification service</a>{" "}
              is a solution designed to help verify someone's identity online or in-person. Interac verification service allows them to access digital services by establishing a 
              connection with their financial institution using bank login information.
            </p>
            <p className="text-[16px]">
              This service is often used by Canadians as an option to sign into the Canada Revenue Agency (CRA) without needing to create a CRA account. These are the landing 
              screens that user would have seen as of November 2023:
            </p>
            <img src={oldDesign} width="100%"/>
            <p className="text-[16px]">
              The goal of this project was to improve the current design to become more user-friendly. I worked with a senior UX designer to gain supporting feedback on my designs. I was also directed by a product manager for timelines and additional feedback.
            </p>
            <p className="text-[16px]">
              Based on findings from user research, I created the final design:
            </p>
            <img src={newDesign} width="100%"/>
            <p className="text-[16px]">
              Overall, I was able to learn a lot about different areas of design that had never been exposed to or conducted on my own. Through collaboration on the designs with a 
              more experienced designer and product manager, I was able to make design decisions based on what I had learned theoretically in courses that also aligned with constraints that were specific to this task and company. The 
              other designer was my main guide for outlining constraints that I was unaware of and helping me to problem solve through them. For example, there were many legal constraints that I was unaware about for the copy that 
              prevented the use of certain words or phrases that initially seemed intuitive to me.
            </p>
            <p className="text-[16px]">
              Moreover, this was my first self-directed user test, so I learned to conduct 
              A/B tests and analyze the nuances from the user recordings on my own. I learned to be a better problem solver that goes through an iterative process and a better researcher that can 
              properly create tests and analyze the results.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};