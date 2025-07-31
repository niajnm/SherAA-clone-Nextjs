

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useHeroSection } from "@/hooks/useHeroSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FALLBACK_SLIDES = [
  {
    src: "https://picsum.photos/id/1015/1600/800",
    title: "Empowering Women in Climate Action",
    description:
      "Despite their critical roles in climate resilience, women’s considerations are often sidelined.",
  },
  {
    src: "https://picsum.photos/id/1016/1600/800",
    title: "Sustainable Futures in Rural Communities",
    description: "Community-led solutions for long-term resilience and growth.",
  },
  {
    src: "https://picsum.photos/id/1018/1600/800",
    title: "Grassroots Leadership and Change",
    description: "Building leadership capacity at the local level.",
  },
];

export default function HeroCarousel() {
  const { data, isLoading, isError } = useHeroSection();

  // Custom nav refs
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Map API safely to UI shape and sort
  const apiSlides =
    data?.heroSections?.nodes
      ?.map((n) => {
        const f = n?.heroSectionFields;
        const src = f?.backgroundImage?.node?.sourceUrl || "";
        const title = f?.sectionTitle || "";
        const description = f?.sectionDescription || "";
        const slideNumber =
          typeof f?.slideNumber === "number" ? f.slideNumber : Number.MAX_SAFE_INTEGER;
        if (!src) return null; // require image
        return { src, title, description, slideNumber };
      })
      .filter(Boolean)
      // @ts-ignore
      .sort((a, b) => a.slideNumber - b.slideNumber)
      // @ts-ignore
      .map(({ src, title, description }) => ({ src, title, description })) || [];

  const slides = apiSlides.length > 0 && !isError ? apiSlides : FALLBACK_SLIDES;

  return (
    <div className="w-screen relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // attach custom buttons
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore – Swiper types allow mutation here
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px]">
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay like your screenshot */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-start">
                <div className="max-w-4xl ms-12 md:ms-24">
                  <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
                    {slide.title}
                  </h2>

                  <div
                    className="text-white text-lg md:text-xl leading-relaxed max-w-3xl"
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Nav Buttons */}
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="
            absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30
            h-12 w-12 rounded-full bg-white/80 backdrop-blur
            flex items-center justify-center
            hover:bg-white transition
            shadow
          "
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        <button
          ref={nextRef}
          aria-label="Next slide"
          className="
            absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30
            h-12 w-12 rounded-full bg-white/80 backdrop-blur
            flex items-center justify-center
            hover:bg-white transition
            shadow
          "
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </Swiper>

      {/* Optional small loading bar overlay (keeps section visible) */}
      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div className="h-full w-1/3 bg-white/60 animate-pulse" />
        </div>
      )}
    </div>
  );
}
