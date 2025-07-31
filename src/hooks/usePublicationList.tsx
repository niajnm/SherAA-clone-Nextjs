// hooks/usePublicationList.ts

import { useQuery } from '@tanstack/react-query';
import { publicationListFetch, PublicationListResponse } from '@/lib/publicationListFetch';
import { QUERY } from '@/config/graph-query.config';

export const usePublicationList = () => {
  return useQuery<PublicationListResponse>({
    queryKey: [QUERY.PUBLICATION.GET_ALL.queryKey],
    queryFn: publicationListFetch,
  });
};
