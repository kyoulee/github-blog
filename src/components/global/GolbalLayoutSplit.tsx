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
    <SplitPageLayout className="h-auto">
      <SplitPageLayout.Pane position="start" hidden={{ wide: props.hidden, narrow: true, regular: true }}>
        {props.childrenNav}
      </SplitPageLayout.Pane>
      <SplitPageLayout.Content width="full" padding="none" className={`${props.className}`}>
        {props.children}
      </SplitPageLayout.Content>
    </SplitPageLayout>
  );
}

export default GolbalLayoutSplit;
