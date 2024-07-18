import { data } from '../../config/data/mockData';
import { HouseCard } from './HouseCard';

export const HousesGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((item) => (
        <HouseCard key={item.name} name={item.name} region={item.region} />
      ))}
    </div>
  );
};
