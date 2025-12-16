"use client";

import { ReactNode, useRef } from "react";

import GlobalLayoutHeader from "./GlobalLayoutHeader";
import GlobalLayoutNav from "./GlobalLayoutNav";
import GolbalLayoutSplit from "./GolbalLayoutSplit";
import GlobalLayoutFooter from "./GlobalLayoutFooter";

function GlobalLayout({ children }: { children: ReactNode }) {
  const content = useRef<HTMLDivElement>(null);

  return (
    <GolbalLayoutSplit childrenNav={GlobalLayoutNav()} childrenFooter={GlobalLayoutFooter()} className="relative ">
      <GlobalLayoutHeader content={content} />
      <div style={{color : '#c9d1d9'}} ref={content}>
        {children}
      </div>
    </GolbalLayoutSplit>
  );
}

export default GlobalLayout;
