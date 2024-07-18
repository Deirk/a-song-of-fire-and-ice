import { useHouses } from "../../hooks/useHouses";
import { Loader } from "../Loader";
import { HouseCard } from "./HouseCard";

export const HousesGrid = () => {
  const { data, isLoading } = useHouses();
  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loader isWhite/>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        {data?.map((item) => (
          <HouseCard
            key={item.name}
            name={item.name}
            region={item.region}
            swornMembers={item.swornMembers}
          />
        ))}
      </div>
    </>
  );
};
