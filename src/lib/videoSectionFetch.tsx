import { request } from "graphql-request";
import { QUERY } from "@/config/graph-query.config";

const API_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_API || "https://wp-api.sheraa.network/graphql";

export type VideoSectionResponse = {
  landingVideos: {
    nodes: {
      databaseId: number;
      landingVideoFields: {
        title: string;
        description: string;
        youtubeLink?: string;
        videoFile?: {
          node: {
            mediaItemUrl: string;
            fileSize?: string;
            mimeType?: string;
          };
        };
      };
    }[];
  };
};

export const videoSectionFetch = async (): Promise<VideoSectionResponse> => {
  const query = QUERY.VIDEO_SECTION.query().root;
  return request<VideoSectionResponse>(API_URL, query);
};
