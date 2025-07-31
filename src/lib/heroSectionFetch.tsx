import { request } from "graphql-request";
import { QUERY } from "@/config/graph-query.config";

const API_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_API || "https://wp-api.sheraa.network/graphql";

export type HeroSectionResponse = {
  heroSections: {
    nodes: Array<{
      databaseId: number;
      heroSectionFields: {
        sectionTitle: string;
        sectionDescription: string;
        buttonOneText?: string;
        buttonOneLink?: string;
        buttonTwoText?: string;
        buttonTwoLink?: string;
        backgroundImage?: { node?: { sourceUrl?: string; caption?: string } };
        slideNumber?: number;
      };
    }>;
  };
};

export const heroSectionFetch = async (): Promise<HeroSectionResponse> => {
  const query = QUERY.HERO_SECTION.query().root;
  return request<HeroSectionResponse>(API_URL, query);
};
