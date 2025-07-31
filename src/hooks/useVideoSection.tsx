import { useQuery } from "@tanstack/react-query";
import {
  videoSectionFetch,
  VideoSectionResponse,
} from "@/lib/videoSectionFetch";
import { QUERY } from "@/config/graph-query.config";

export const useVideoSection = () => {
  return useQuery<VideoSectionResponse>({
    queryKey: [QUERY.VIDEO_SECTION.queryKey],
    queryFn: videoSectionFetch,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
