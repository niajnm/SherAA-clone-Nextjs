"use client";

import { redirect } from "next/navigation";
import ImageCarousel from "./component/slidder";
import ClimateSection from "./section/ClimateSection";
import ClimateHero from "./section/videoClimate";
import CoalitionMembers from "./section/memberCard";
import NewsEventsSection from "./section/NewsEventSec";
import PublicationsSection from "./section/Publication";
import MobilizingSection from "./section/Mobilizing";

const items = [
  {
    id: 1,
    title: "Item 1",
    description: "This is the first item.",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "Item 2",
    description: "This is the second item.",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "Item 3",
    description: "This is the third item.",
    image: "https://picsum.photos/200",
  },
];

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
          title="Custom Climate Title"
          subtitle="Your custom subtitle here"
        />
        <div>
          <CoalitionMembers />
        </div>
      <PublicationsSection />

      {/* other sections */}
      <NewsEventsSection />
            <MobilizingSection />

  

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
