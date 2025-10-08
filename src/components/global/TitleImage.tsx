"use client"

import React, { ReactElement, useEffect, useState } from "react";

type titleImageProps = {
  imageUrl?: string
}

/**
 * @author kyoulee
 * @Description 타이틀 이미지를 표시하는 컴포넌트입니다.
 */
function TitleImage({ imageUrl }: titleImageProps) {

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='absolute h-50 bg-red-500 -z-100'>
      <img className='w-full object-cover' src={imageUrl} alt='title image' />
    </div>
  )
}

export default TitleImage