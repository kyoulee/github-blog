import React, { RefObject, useEffect, useState } from "react";

type useParentWidthProps = {
  content: RefObject<HTMLDivElement | null>;
  setParentWidth : React.Dispatch<React.SetStateAction<number>>
};

function useParentWidth(props: useParentWidthProps) {
  const contentRef = props.content;

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      props.setParentWidth(entries[0].contentRect.width);
    });
    observer.observe(element);
    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [contentRef]);
}

export default useParentWidth;
