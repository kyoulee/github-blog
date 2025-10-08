import React, { ReactElement } from 'react'
import config from '@/../config.json'
import TypeWriter from './TypeText'
import TitleImage from './TitleImage'

/**
 * @author kyoulee
 * @Description 타이틀 컴포넌트입니다.
 */
function Title() {
  const titleImageUrl = config.titleImageUrl

  return (
    <div className='w-full h-dvh relative'>
      <TitleImage imageUrl={titleImageUrl} />
      <TitleBoard />
    </div>
  )
}


/**
 * @author kyoulee
 * @Description 타이틀 메시지를 표시하는 컴포넌트입니다.
 */
function TitleBoard() {

  return (
    <div className='relative w-full h-dvh'>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10'>
      </div>
      <div className='flex flex-col w-full h-full 
      justify-center z-100'>s
        <div className='text-white flex justify-center items-center w-full
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
        font-extrabold'>
          나의 이야기
        </div>
        <div className='w-full'>
          <TypeWriter
            texts={config.titleMessages}
            className='flex justify-center items-center w-full h-full'
            fontClassName={`
              'bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient'
              ${style.text}

          `}
          />
        </div>
      </div>

    </div>
  )
}

export default Title

