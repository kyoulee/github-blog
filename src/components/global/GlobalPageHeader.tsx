import React from "react";

type GlobalPageHeaderProps = {
  className?: string;
  children: React.ReactNode;
};

function GlobalPageHeader(props: GlobalPageHeaderProps) {
  return <div className={`h-2 overflow-hidden ${props.className}`}>
    {props.children}
    </div>;
}

export default GlobalPageHeader;
