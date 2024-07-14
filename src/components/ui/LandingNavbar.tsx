"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

const SlideTabsExample = () => {
  return (
    <div className="mt-6">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const { isSignedIn, user } = useUser();

  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>User</Tab>
      <Tab setPosition={setPosition}>Admin</Tab>
      <Tab setPosition={setPosition}>Librarian</Tab>
      <Tab setPosition={setPosition}>
        {isSignedIn ? <SignOutButton /> : <SignInButton />}
      </Tab>

      {isSignedIn &&
        (<>Dashboard</> ? (
          <Tab setPosition={setPosition}>Dashboard</Tab>
        ) : null)}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  onClick?: any;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs  text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

export default SlideTabsExample;
