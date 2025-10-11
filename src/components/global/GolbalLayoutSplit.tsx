import React, { ReactNode } from "react";
import { SplitPageLayout } from "@primer/react";

type GolbalLayoutSplitProps = {
  className?: string;
  hidden?: boolean;
  childrenNav?: ReactNode;
  children?: ReactNode;
};

function GolbalLayoutSplit(props: GolbalLayoutSplitProps) {
  return (
    <SplitPageLayout>
      <SplitPageLayout.Pane position="start" hidden={props.hidden} className="bg-[var(--bgColor-success-emphasis)]">
        {props.childrenNav}
      </SplitPageLayout.Pane>
      <SplitPageLayout.Content
        width="full"
        padding="none"
        className={`${props.className} bg-[var(--bgColor-success-muted)]`}
      >
        {props.children}
      </SplitPageLayout.Content>
    </SplitPageLayout>
  );
}

export default GolbalLayoutSplit;