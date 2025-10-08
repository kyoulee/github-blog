export type Theme = 'dark' | 'light';
export type ThemeChangeCallback = (newTheme: Theme) => void;

/**
 * @author kyoulee
 * @description 브라우저 환경이 아닐 경우(SSR 등)에는 'light'를 기본값으로 반환
 */
export function getSystemPreference(): Theme {
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
}

/**
 * @author kyoulee
 * @description 시스템 테마 설정 변경을 감시하고, 변경될 때마다 콜백 함수를 실행합니다.
 */
export function watchSystemThemeChanges(callback: ThemeChangeCallback): () => void {
  if (typeof window === 'undefined' || !window.matchMedia)
    return () => { };

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handler = (event: MediaQueryListEvent) => {
    const newTheme: Theme = event.matches ? 'dark' : 'light';
    callback(newTheme);
  };

  mediaQuery.addEventListener('change', handler);

  return () => {
    mediaQuery.removeEventListener('change', handler);
  };
}
