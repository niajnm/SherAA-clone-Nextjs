// hooks/useNewsEventList.ts
import { useQuery } from '@tanstack/react-query';
import { QUERY } from '@/config/graph-query.config';
import { fetcher } from '@/lib/fetcher';


type NewsEventListResponse = {
  newsEvents: {
    nodes: {
      databaseId: number;
      slug: string;
      date: string;
      newsEventFields: {
        title: string;
        description: string;
        seoKeywords: string;
        image: {
          node: {
            sourceUrl: string;
            caption: string;
          };
        };
      };
    }[];
    pageInfo: {
      startCursor: string;
      endCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
};

export const useNewsEventList = (
  pageSize = 10,
  endCursor = '',
  startCursor = '',
  searchText = ''
) => {
  const queryStr = QUERY.NEWS_EVENT.GET_ALL.query(
    pageSize,
    endCursor,
    startCursor,
    searchText
  );

  return useQuery<NewsEventListResponse>({
    queryKey: [QUERY.NEWS_EVENT.GET_ALL.queryKey, pageSize, endCursor, startCursor, searchText],
    queryFn: () => fetcher(queryStr),
  });
};
