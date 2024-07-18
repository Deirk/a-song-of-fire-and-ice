import { useState } from 'react';
import { useHouses } from "../../hooks";
import { Loader } from "../Loader";
import { HouseCard } from "./HouseCard";
import { Button } from '../Button';

export const HousesGrid = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useHouses(page);

  const handleNextPage = () => {
    if (data && data.length < 10) return;
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    if (page === 1) return;
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loader isWhite />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data?.map((item) => (
          <HouseCard
            key={item.name}
            name={item.name}
            region={item.region}
            swornMembers={item.swornMembers}
          />
        ))}
      </div>
      <div className="flex justify-between mt-5 mx-10">
        <Button
          handleClick={handlePreviousPage}
          isDisabled={page === 1}
          text="Prev"
        />
        <Button
          handleClick={handleNextPage}
          isDisabled={!!data && data.length < 10}
          text="Next"
        />
      </div>
    </>
  );
};
