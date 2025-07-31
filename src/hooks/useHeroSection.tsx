import { useQuery } from "@tanstack/react-query";
import { heroSectionFetch, HeroSectionResponse } from "@/lib/heroSectionFetch";
import { QUERY } from "@/config/graph-query.config";

export const useHeroSection = () =>
  useQuery<HeroSectionResponse>({
    queryKey: [QUERY.HERO_SECTION.queryKey],
    queryFn: heroSectionFetch,
    // Reduce flicker / disappearing on focus or refresh:
    staleTime: 5 * 60 * 1000,           // 5 minutes
    refetchOnWindowFocus: false,
    retry: 1,
  });
