import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
import { Character } from '../interfaces';
import { oneWeekInMs } from '../config/constants';

const fetchSwornMember = async (url: string): Promise<Character> => {
  const { data } = await axios.get<Character>(url);
  return data;
};

export const useSwornMembers = (urls: string[]) => {

  const swornMembersQueries = useQueries({
    queries: urls.map((url) => ({
      queryKey: ['swornMember', url],
      queryFn: () => fetchSwornMember(url),
      staleTime: oneWeekInMs,
    })),
  });

  return {
    swornMembersQueries
  };
};