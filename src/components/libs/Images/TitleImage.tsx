"use client";

import React, { ReactElement, useEffect, useState } from "react";

type TitleImageProps = {
  imageUrl?: string;
  className?: string;
};

/**
 * @Description 타이틀 이미지를 표시하는 컴포넌트입니다.
 */
function TitleImage(props: TitleImageProps) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(offsetY);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`absolute w-full h-full -z-100 ${props.className}`}
      style={{
        transform: `translateY(${offsetY}px)`,
      }}
    >
      <img className="w-full h-full object-cover" src={props.imageUrl} alt="title image" />
    </div>
  );
}

export default TitleImage;
