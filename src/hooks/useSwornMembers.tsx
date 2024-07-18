import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
import { Character } from '../interfaces';

const fetchSwornMember = async (url: string): Promise<Character> => {
  const { data } = await axios.get<Character>(url);
  return data;
};

export const useSwornMembers = (urls: string[]) => {
  const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;

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