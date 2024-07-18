import { HousesGrid } from "./components";

export const IceAndFireApp = () => {
  return (
    <div className="bg-gray-900 w-full min-h-screen px-6 pb-10">
      <div className="py-4">
        <div className="pl-[116px] pr-[205px] py-8">
          {/*TODO: change font */}
          <div className="text-7xl text-center text-gray-200 font-bold">
            Song of <span className="text-teal-400">Ice</span> and
            <span className="text-red-400">{" Fire"}</span>
          </div>
          <div className="text-4xl font-normal text-amber-500 pt-5 text-center">
            Character cheat sheet
          </div>
        </div>
        <HousesGrid />
        <div className="grid grid-cols-3 gap-4"></div>
      </div>
    </div>
  );
};
