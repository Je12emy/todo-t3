import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string | undefined;
};

const AddTaskInput: FC<Props> = ({ error, ...props }) => {
  return (
    <div className="relative w-full">
      <p className="absolute -top-8 left-2 text-base text-red-500">{error}</p>
      <input
        className="w-full rounded-full border-2 border-gray-700 bg-gray-900 py-3 px-4 accent-blue-300 shadow-md"
        placeholder="Buy more milk..."
        {...props}
      />
    </div>
  );
};

export default AddTaskInput;
