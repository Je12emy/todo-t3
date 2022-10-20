import { FC } from "react";

const CreateTask: FC<unknown> = () => {
  return (
    <section className="mx-2 my-3 flex-[0]">
      <form>
        <div className="flex flex-row space-x-1">
          <input
            type="text"
            name="new todo"
            className="w-full rounded-full border-2 border-gray-700 bg-gray-900 py-3 px-4 accent-blue-300 shadow-md"
            maxLength={40}
            placeholder="Buy more milk..."
          />
          <button className="p-1 text-blue-300 transition-colors hover:text-blue-100 active:text-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateTask
