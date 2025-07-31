import { useQuery } from "@tanstack/react-query";
import { heroSectionFetch, HeroSectionResponse } from "@/lib/heroSectionFetch";
import { QUERY } from "@/config/graph-query.config";

export const useHeroSection = () => {
  return useQuery<HeroSectionResponse>({
    queryKey: [QUERY.HERO_SECTION.queryKey],
    queryFn: heroSectionFetch,
  });
};
