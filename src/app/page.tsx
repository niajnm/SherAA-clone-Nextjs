"use client";

import { redirect } from "next/navigation";
import ImageCarousel from "./component/slidder";
import ClimateSection from "./section/ClimateSection";
import ClimateHero from "./section/videoClimate";
import CoalitionMembers from "./section/memberCard";
import NewsEventsSection from "./section/NewsEventSec";
import PublicationsSection from "./section/Publication";
import MobilizingSection from "./section/Mobilizing";
import VideoSection from "./section/test";


export default function Home() {

  //redirect("/login");
  return (
    <div className="flex flex-col ">
      <div>
        <ImageCarousel />
        <div className="flex h-2 w-full">

          <div className="flex-1 bg-cyan-600"></div>
          <div className="flex-1 bg-cyan-400"></div>
          <div className="flex-1 bg-pink-600"></div>
          <div className="flex-1 bg-purple-400"></div>
          <div className="flex-1 bg-rose-400"></div>
        </div>

        <div className=" items-center justify-center">
          <ClimateSection />
        </div>

        <ClimateHero

        />
        <div>
          <CoalitionMembers />
        </div>
        <PublicationsSection />

        {/* other sections */}
        <NewsEventsSection />
        <MobilizingSection />

        <div>
          <VideoSection />
        </div>

      </div>
    </div>
  );
}


function colorDiv(colorDiv: String) {

  return (
    <div className="flex-1 bg-cyan-600"></div>
  );

}


// export default function Login() {
//   return (
//     <>
//       <Login/>
//     </>
//   );
// }
