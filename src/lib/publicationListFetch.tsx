// lib/fetchers/publicationListFetch.ts
import { request } from 'graphql-request';
import { QUERY } from '@/config/graph-query.config';

const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API || 'https://wp-api.sheraa.network/graphql';

export type PublicationListResponse = {
  publications: {
    nodes: {
      databaseId: number;
      slug: string;
      date: string;
      publicationFields: {
        title: string;
        description: string;
        seoKeywords: string;
        authorName: string;
        publishDate: string;
        image?: {
          node: {
            sourceUrl: string;
            caption: string;
          };
        };
        documentFileNo1Name?: string;
        documentFileNo1?: { node: { mediaItemUrl: string; mimeType: string } };
        documentFileNo2Name?: string;
        documentFileNo2?: { node: { mediaItemUrl: string; mimeType: string } };
        documentFileNo3Name?: string;
        documentFileNo3?: { node: { mediaItemUrl: string; mimeType: string } };
      };
    }[];
  };
};

export const publicationListFetch = async (): Promise<PublicationListResponse> => {
  const query = QUERY.PUBLICATION.GET_ALL.query(8, '', '', '');
  return await request(API_URL, query);
};
