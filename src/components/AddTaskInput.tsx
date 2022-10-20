import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {};

const AddTaskInput: FC<Props> = ({ ...props }) => (
  <input
    className="w-full rounded-full border-2 border-gray-700 bg-gray-900 py-3 px-4 accent-blue-300 shadow-md"
    placeholder="Buy more milk..."
    {...props}
  />
);

export default AddTaskInput;
