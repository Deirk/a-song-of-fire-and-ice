import { useSwornMembers } from '../../hooks';
import { Loader } from '../Loader';
import { SwornMemberItem } from './SwornMemberItem';


interface SwornMembersProps {
  membersUrls: string[];
}

export const SwornMembersList: React.FC<SwornMembersProps> = ({ membersUrls }) => {
  const {swornMembersQueries} = useSwornMembers(membersUrls);

  return (
    <div className="w-full pt-5">
      {/*TODO: change font */}
      <h3 className="text-xl font-semibold text-center text-gray-500" >Sworn Members</h3>
      <hr className="m-4 rounded-2xl border-t-2"/>
      {
        membersUrls.length === 0 && (
          <p className="text-blue-800 text-center">"This house has no sworn members"</p>
        )
      }
      {swornMembersQueries.map((query, index) => {
        const {data, isLoading} = query;
        if (isLoading) return <Loader key={`loader-meber-list-${index}`}/>;

        return (
          <SwornMemberItem name={data?.name} died={data?.died} aliases={data?.aliases} key={index} />
        );
      })}
    </div>
  );
};
