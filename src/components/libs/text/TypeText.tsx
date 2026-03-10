'use client'

import { useState, useEffect } from 'react';
import styles from './TypeText.module.css'

type TypingTextProps = {
  texts?: string[];
  fontClassName?: string;
  className?: string;
}

/**
 * @description 타이핑 효과를 구현하는 React 컴포넌트입니다.
 * @author kyoulee
 * @example
 * <TypeText texts={['Hello', 'World']} />
 */
export default function TypeText({
  texts = ["**Typewriting effect**"],
  fontClassName = "bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient",
  className = ""
}: TypingTextProps,
  ...props: any
) {
  const [displayText, setDisplayText] = useState('⠀');
  const [animationStatus, setAnimationStatus] = useState(true);

  useEffect(() => {
    setAnimationStatus(true)
    typingAnimation({ texts, displayText, setDisplayText, animationStatus } as TypingAnimationProps);
    return (
      setAnimationStatus(false)
    );
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span className={fontClassName}>{displayText}</span>
    </div>
  );
}


type TypingAnimationProps = {
  texts: string[];
  displayText: string;
  setDisplayText: React.Dispatch<React.SetStateAction<string>>;
  animationStatus: boolean;
}

/**
 * @description 이 함수는 내부적으로 무한 루프를 사용하여 타이핑을 반복합니다.
 * @author kyoulee
 * @important
 * setanumationStatus(false)로 애니메이션을 중지할 수 있습니다.
 * @example
 * typingAnimation({ texts, displayText, setDisplayText, animationStatus });
 */
async function typingAnimation(
  props: TypingAnimationProps
): Promise<void> {
  let typingSpeed = 10;
  let delayBetweenTexts = 2000;
  let currentTextIndex = 0;
  let currentIndex = 0;

  while (props.animationStatus) {
    const currentText = props.texts[currentTextIndex];
    for (let i = currentIndex; i <= currentText.length; i++) {
      props.setDisplayText("⠀" + currentText.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, typingSpeed + (Math.random() * 70)));
      currentIndex = i;
    }
    await new Promise(resolve => setTimeout(resolve, delayBetweenTexts));
    currentIndex = 0;
    currentTextIndex = (currentTextIndex + 1) % props.texts.length;
  }
};
