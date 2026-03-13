"use client";

import React, { RefObject, useEffect, useState } from "react";
import { Header } from "@primer/react";
import { BellIcon, CodeOfConductIcon, MarkGithubIcon, HeartIcon } from "@primer/octicons-react";
import config from "@/../config.json"

import { usePathname } from "next/navigation";

import styles from "@/styles/global/globalLayoutHeader.module.css"
type GlobalLayoutHeaderProps = {
  content: RefObject<HTMLDivElement | null>;
};

function GlobalLayoutHeader(props: GlobalLayoutHeaderProps) {
  const [translateYValue, setTranslateYValue] = useState<number>(0);
  const [opacityValue, setOpacityValue] = useState<number>(1.0);
  const nickName = config.githubId;
  const pathname = usePathname();
  const isPostPage = pathname?.startsWith('/post/');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
    <Header className={`${styles.headerContainer}`}
      style={{
        transform: `translateY(${-translateYValue}px)`,
        opacity: opacityValue,
      }}
    >
      {/* ------------------ 왼쪽 영역 ------------------ */}
      <div className="flex">
        <Header.Item>
          <Header.Link href={`${basePath}`}>
            <MarkGithubIcon size={32} />
          </Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link href={`${basePath}/post`}>Post</Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link href={`${basePath}/profile`}>Profile</Header.Link>
        </Header.Item>
      </div>
      {/* ------------------ 중앙 영역 ------------------ */}
      <Header.Item full className="justify-center">
        <Header.Item>
          <Header.Link href={`${basePath}`}>{nickName} Blog</Header.Link>
        </Header.Item>
      </Header.Item>
      {/* ------------------ 오른쪽 영역 ------------------ */}
      {isPostPage ?
        <div>
          <Header.Item>
            <Header.Link>
              <HeartIcon />
            </Header.Link>
          </Header.Item>
        </div>
        :
        <div className="flex">
          <Header.Item>
            <Header.Link href={`https://github.com/${nickName}?tab=followers`}>
              <CodeOfConductIcon />
            </Header.Link>
          </Header.Item>
          <Header.Item>
            <Header.Link >
              <BellIcon />
            </Header.Link>
          </Header.Item>
        </div>
      }
    </Header>
  );
}

export default GlobalLayoutHeader;
