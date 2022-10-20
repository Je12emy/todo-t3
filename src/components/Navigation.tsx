import { signIn, useSession, signOut } from "next-auth/react";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <nav className="flex min-h-[3.5rem] min-w-max flex-col bg-gray-800 p-2 shadow-md transition-all">
        <div className="flex flex-row items-center justify-between">
          <button onClick={() => setShow(!show)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <UserInfo />
        </div>
        <div
          className={`grid-cols-1 grid-rows-2 items-start justify-start space-y-2 ${
            show ? "grid" : "hidden"
          } transition-all`}
        >
          <Link href="/about">
            <a className="font-medium underline"> About </a>
          </Link>
          <button
            onClick={() => signOut()}
            className="justify-self-center font-semibold text-rose-500"
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

const UserInfo: FC = () => {
  const { data, status } = useSession();

  if (status === "unauthenticated" || !data?.user) {
    return <button onClick={() => signIn()}> Sign in </button>;
  }

  return (
    <section className="flex flex-row items-center justify-center space-x-2">
      <div className="h-10 w-10">
        <Image
          src={`${
            data.user.image !== null
              ? data.user.image
              : "/profile-image-placeholder.png"
          }`}
          className="rounded-full shadow-md"
          alt={`${data.user.name}'s profile image`}
          layout="responsive"
          height="128"
          width="128"
        />
      </div>
      <h1 className="hidden text-sm font-semibold md:block">
        {data.user.name}
      </h1>
    </section>
  );
};

export default Navigation;
