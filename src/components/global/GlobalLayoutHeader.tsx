"use client";

import React, { RefObject, useEffect, useState } from "react";
import { Header } from "@primer/react";
import { BellIcon, MarkGithubIcon, PlusIcon } from "@primer/octicons-react";

import useParentWidth from "@/components/libs/view/useParentWidth";

type GlobalLayoutHeaderProps = {
  content: RefObject<HTMLDivElement | null>;
};

function GlobalLayoutHeader(props: GlobalLayoutHeaderProps) {
  const [translateYValue, setTranslateYValue] = useState<number>(0);
  const [opacityValue, setOpacityValue] = useState<number>(1.0);
  const [parentWidth, setParentWidth] =  useState<number>(0);
  
  useParentWidth({ content: props.content, setParentWidth : setParentWidth });
  
  function handleScroll(e: Event) {
    if (e.type !== "scroll") return;

    const currentScrollTop = window.scrollY;
    const offsetHeight = window.innerHeight;

    if (currentScrollTop > offsetHeight) {
      setTranslateYValue(0);
      setOpacityValue(Math.min((currentScrollTop - offsetHeight) * 0.01, 1));
      return;
    }
    setOpacityValue(1);
    setTranslateYValue(Math.max(currentScrollTop, 0));
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header
      className="fixed"
      style={{
        transform: `translateY(${-translateYValue}px)`,
        opacity: opacityValue,
        width: `${parentWidth}px`
      }}
    >
      {/* ------------------ 왼쪽 영역: 로고 및 검색 ------------------ */}
      <Header.Item>
        <Header.Link href="#">
          <MarkGithubIcon size={32} />
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#">left</Header.Link>
      </Header.Item>

      {/* ------------------ 중앙 영역: 네비게이션 링크 ------------------ */}
      <Header.Item full className="justify-center">
        <Header.Item>
          <Header.Link href="#">center</Header.Link>
        </Header.Item>
      </Header.Item>

      {/* ------------------ 오른쪽 영역: 알림 및 기타 액션 ------------------ */}
      <Header.Item>
        <Header.Link href="#">right</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#" aria-label="Notifications">
          <BellIcon />
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#" aria-label="Create new...">
          <PlusIcon />
        </Header.Link>
      </Header.Item>
    </Header>
  );
}

export default GlobalLayoutHeader;
