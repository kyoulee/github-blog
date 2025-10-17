import React, { RefObject, useEffect, useState } from "react";

import { Header } from "@primer/react";
import { BellIcon, MarkGithubIcon, PlusIcon } from "@primer/octicons-react";
type GlobalLayoutHeaderProps = {
  content: RefObject<HTMLDivElement | null>;
};

function GlobalLayoutHeader(props: GlobalLayoutHeaderProps) {
  const [translateYValue, setTranslateYValue] = useState<number>(0);
  const [opacityValue, setOpacityValue] = useState<number>(1.0);

  useEffect(() => {
    const contentDiv = props.content.current;
    if (!contentDiv) return;
    const scrollHandler = handleScroll({ content: props.content, setTranslateYValue, setOpacityValue });
    contentDiv.addEventListener("scroll", scrollHandler);

    return () => {
      if (!contentDiv) return;
      contentDiv.removeEventListener("scroll", scrollHandler);
    };
  }, [props.content]);

  return (
    <Header
      className="absolute w-full"
      style={{
        transform: `translateY(${-translateYValue}px)`,
        opacity: opacityValue,
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

type handleScrollProps = {
  content: RefObject<HTMLDivElement | null>;
  setTranslateYValue: React.Dispatch<React.SetStateAction<number>>;
  setOpacityValue: React.Dispatch<React.SetStateAction<number>>;
};

function handleScroll(props: handleScrollProps) {
  return function (e: Event) {
    if (!props.content.current) return;

    const currentScrollTop = props.content.current.scrollTop;
    const offsetHeight = props.content.current.offsetHeight;

    console.log("scrollTop:", currentScrollTop, "offsetHeight:", offsetHeight);
    if (currentScrollTop > offsetHeight) {
      props.setTranslateYValue(0);
      props.setOpacityValue(Math.min((currentScrollTop - offsetHeight) * 0.01, 1));
      return;
    }
    props.setOpacityValue(1);
    props.setTranslateYValue(Math.max(currentScrollTop, 0));
  };
}

export default GlobalLayoutHeader;
