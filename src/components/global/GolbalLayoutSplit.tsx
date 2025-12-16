import React, { ReactNode } from "react";
import { SplitPageLayout } from "@primer/react";

import styles from "@/styles/global/globalLayoutSplite.module.css"

type GolbalLayoutSplitProps = {
  className?: string;
  hidden?: boolean;
  childrenNav?: ReactNode;
  childrenFooter?: ReactNode;
  children?: ReactNode;
};

function GolbalLayoutSplit(props: GolbalLayoutSplitProps) {
  return (
    <SplitPageLayout className="h-auto">
      <SplitPageLayout.Pane position="start" hidden={{ wide: props.hidden, narrow: true, regular: true }} className={styles.pane} style={{backgroundColor : "#0d1117" }}>
        {props.childrenNav}
      </SplitPageLayout.Pane>
      <SplitPageLayout.Content width="full" padding="none" className={`${props.className}`}>
        {props.children}
      </SplitPageLayout.Content>
      <SplitPageLayout.Footer padding="none">
        {props.childrenFooter}
      </SplitPageLayout.Footer>
    </SplitPageLayout>
  );
}

export default GolbalLayoutSplit;
