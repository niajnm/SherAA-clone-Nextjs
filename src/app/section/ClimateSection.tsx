
import Image from "next/image";
import Link from "next/link";

export default function ClimateSection() {
  return (
   <div className="max-w-7xl mx-auto h-[700px] px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
      {/* Left: Image + Stats */}
      <div className="relative">
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/bg.png" // Place your image in /public/
            alt="Boat"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Stats Box */}
        <div className="mt-[-40px] mx-auto bg-cyan-800 text-white rounded-xl shadow-lg flex flex-col md:flex-row justify-between text-center md:text-left p-6 max-w-[90%] md:max-w-[95%]">
          <div className="flex-1 px-4">
            <p className="text-2xl font-bold">152M</p>
            <p className="text-xs">Adversely affected by floods since 1990</p>
          </div>
          <div className="flex-1 px-4">
            <p className="text-2xl font-bold">60.8M</p>
            <p className="text-xs">Coastal Bangladeshis will be at risk by 2050</p>
          </div>
          <div className="flex-1 px-4">
            <p className="text-2xl font-bold">13.3M</p>
            <p className="text-xs">Bangladeshis will be displaced by 2050</p>
          </div>
        </div>
      </div>

      {/* Right: Text */}
      <div className="space-y-4">
        <p className="text-sm uppercase text-purple-600 font-semibold tracking-widest">
          Background
        </p>
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          Climate change in Bangladesh
        </h2>
        <p className="text-gray-700">
          Climate change has profoundly impacted Bangladesh, leading to increased flooding, cyclones,
          sea-level rise, and crop vulnerabilities, threatening livelihoods and infrastructure.
        </p>
        <p className="text-gray-700">
          Bangladesh is among the countries most vulnerable to climate change, and its government has
          been actively engaged in climate adaptation and mitigation efforts. International cooperation
          is also crucial to help Bangladesh cope with these challenges and build resilience against
          future climate impacts.
        </p>
        <Link
          href="#"
          className="text-cyan-700 font-semibold inline-flex items-center gap-1 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
