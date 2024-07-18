interface Props {
  name?: string;
  aliases?: string[];
  died?: string;
}

export const SwornMemberItem = ({
  name = "",
  died = "",
  aliases = [],
}: Props) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-between my-2">
        <h2 className="text-xl font-semibold">
          Name:{" "}
          <span className="font-normal">
            {name !== "" ? name : aliases.length > 0 ? aliases[0] : "No name"}
          </span>
        </h2>
        <div
          className={`rounded-full ${
            died === "" ? "bg-green-600" : "bg-red-600"
          } text-white px-8 text-center flex justify-center items-center`}
        >
          <div className="font-semibold">{died === "" ? "Alive" : "Died"}</div>
        </div>
      </div>
      {died !== "" && <div className="text-sm w-full">{`Died: ${died}`}</div>}
      <hr className="mt-1 rounded-2xl border-t-2 border-gray-300 opacity-60" />
    </div>
  );
};
