import { useQuery } from '@tanstack/react-query';
import { QUERY } from '@/config/graph-query.config';
import { memberCategoryListFetch, MemberCategoryListResponse } from '@/lib/memberCategoryListFetch';

export const useMemberCategoryList = () => {
  return useQuery<MemberCategoryListResponse>({
    queryKey: [QUERY.MEMBER_CATEGORY.GET_ALL.queryKey],
    queryFn: memberCategoryListFetch,
  });
};
