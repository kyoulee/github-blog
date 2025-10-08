import React, { useState, useEffect } from 'react';
import { getSystemPreference, watchSystemThemeChanges, Theme } from '@/components/global/system-color-scheme/getSystemPreference'; // 같은 디렉토리에 있다고 가정

import GithubFrontierDarkGif from '^/images/title/github-frontier/github-frontier-dark.gif';
import GithubFrontierDarkToLightGif from '^/images/title/github-frontier/github-frontier-dark-to-light.gif';
import GithubFrontierLightGif from '^/images/title/github-frontier/github-frontier-light.gif';
import GithubFrontierLightToDarkGif from '^/images/title/github-frontier/github-frontier-light-to-dark.gif';

const GIF_DURATION_MS = 1000;

export function ThemeSwitcher(): React.ReactNode {
  const [theme, setTheme] = useState<Theme>(getSystemPreference);
  const [animationState, setAnimationState] = useState<'idle' | 'toDark' | 'toLight'>('idle');

  useEffect(() => {
    const cleanup = watchSystemThemeChanges((nextSystemTheme) => {
      if (theme !== nextSystemTheme) {
        setAnimationState(nextSystemTheme === 'dark' ? 'toDark' : 'toLight');

        setTimeout(() => {
          setTheme(nextSystemTheme);
          setAnimationState('idle');
        }, GIF_DURATION_MS);
      }
    });
    return cleanup;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';

    setAnimationState(theme === 'light' ? 'toDark' : 'toLight');

    setTimeout(() => {
      setTheme(nextTheme);
      setAnimationState('idle');
    }, GIF_DURATION_MS);
  };

  const getCurrentImage = (): string => {
    switch (animationState) {
      case 'toDark':
        return GithubFrontierLightToDarkGif.src;
      case 'toLight':
        return GithubFrontierDarkToLightGif.src;
      case 'idle':
      default:
        return (theme === 'light' ? GithubFrontierLightGif : GithubFrontierDarkGif).src;
    }
  };

  return (
    <button onClick={toggleTheme}>
      <img
        className='w-full h-full object-cover'
        src={getCurrentImage()}
        alt={`Current theme is ${theme}. Click to toggle.`}
      />
    </button>
  );
}
