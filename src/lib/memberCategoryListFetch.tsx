import { request } from 'graphql-request';
import { QUERY } from '@/config/graph-query.config';

const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API || 'https://wp-api.sheraa.network/graphql';

export type MemberCategoryListResponse = {
  memberCategories: {
    nodes: {
      databaseId: number;
      memberCategoryFields: {
        name: string;
        description: string;
        image?: {
          node: {
            sourceUrl: string;
            caption: string;
          };
        };
        members?: {
          nodes: {
            databaseId: number;
            memberFields: {
              name: string;
              description: string;
              image?: {
                node: {
                  sourceUrl: string;
                  caption: string;
                };
              };
            };
          }[];
        };
      };
    }[];
  };
};

/**
 * Fetch member category list.
 */
export const memberCategoryListFetch = async (): Promise<MemberCategoryListResponse> => {
  const query = QUERY.MEMBER_CATEGORY.GET_ALL.query;
  return await request(API_URL, query);
};
