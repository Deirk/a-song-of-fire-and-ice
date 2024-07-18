interface Props {
  handleClick: () => void;
  isDisabled: boolean;
  text: string;
}

export const Button = ({ handleClick, isDisabled, text }: Props) => {
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg disabled:opacity-40"
    >
      {text}
    </button>
  );
};
