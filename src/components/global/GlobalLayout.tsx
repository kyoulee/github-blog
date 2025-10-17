"use client";

import { ReactNode, useRef } from "react";

import GlobalLayoutHeader from "./GlobalLayoutHeader";
import GlobalLayoutNav from "./GlobalLayoutNav";
import GolbalLayoutSplit from "./GolbalLayoutSplit";

function GlobalLayout({ children }: { children: ReactNode }) {
  const content = useRef<HTMLDivElement>(null);

  return (
    <GolbalLayoutSplit childrenNav={GlobalLayoutNav()} className="relative ">
      <GlobalLayoutHeader content={content} />
      <div className="overflow-scroll h-screen" ref={content}>
        {children}
      </div>
    </GolbalLayoutSplit>
  );
}

export default GlobalLayout;
