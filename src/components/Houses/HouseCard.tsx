import { useSwornMembers } from '../../hooks/useSwornMembers';

interface Props {
  name: string;
  region: string;
  swornMembers: string[];
}

export const HouseCard = ({ name, region, swornMembers }: Props) => {
  const {swornMembersQueries} = useSwornMembers(swornMembers);
  return (
    <div className="bg-gray-400 w-full rounded-lg flex flex-col overflow-hidden">
      <div className="p-6 bg-gray-200 h-full m-2 rounded-lg">
        <div>
          {/*TODO: change font */}
          <h2 className="mb-1 text-2xl text-blue-900 hover:text-blue-600 font-semibold">
            {name}
          </h2>
          <p className="text-sky-800 text-base">{region}</p>
        </div>
        <div>
          { 
            swornMembersQueries.map((query) => (
              <div key={query.data?.name}>
                {query.data?.name}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
