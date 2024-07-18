import { useQuery } from "@tanstack/react-query";
import { oneWeekInMs } from "../config/constants";
import { iceAndFireApi } from "../config/api";
import { House } from "../interfaces/House";

const getHouses = async (page: number): Promise<House[]> => {
  const { data } = await iceAndFireApi.get(`/houses?page=${page}`);

  return data;
};

export const useHouses = (page: number = 1) => {
  const housesQuery = useQuery({
    queryKey: ["houses", page],
    queryFn: () => getHouses(page),
    staleTime: oneWeekInMs,
  });

  return housesQuery;
};
