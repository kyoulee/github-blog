
import React from 'react';

import BlogInfoBase from '@/components/blog/info/BlogInfoBase';
import { CalendarIcon } from '@primer/octicons-react';
import config from "@/../config.json"

const GITHUB_REPO_URL = `https://api.github.com/repos/${config.githubId}/${config.githubRepo}`;

/**
 * GitHub REST API를 사용하여 블로그 개시일(created_at)을 가져오고,
 * 현재 날짜와의 차이를 계산하여 총 운영 일수를 반환합니다.
 * * - 데이터는 Next.js의 ISR 기능을 이용해 1시간마다 재검증됩니다.
 *
 * @returns {Promise<number>} 블로그가 운영된 총 경과 일수 (Day). API 호출 실패 시 0을 반환합니다.
 */
export async function getBlogDaysSinceCreation(): Promise<number> {
  const response = await fetch(GITHUB_REPO_URL, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    console.error(`GitHub API 호출 실패: ${response.statusText}`);
    return 0;
  }

  const data = await response.json();
  const createdAtString: string = data.created_at;

  if (!createdAtString) {
    console.error("created_at 필드를 찾을 수 없습니다.");
    return 0;
  }

  const createdDate = new Date(createdAtString);
  const currentDate = new Date();

  const timeDifferenceMs = currentDate.getTime() - createdDate.getTime();

  // 밀리초를 일(Day)로 변환
  const daysDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));

  return daysDifference;
}

/**
 * 블로그 운영 일수를 계산하여 'BlogInfoBase' 컴포넌트를 사용하여 표시하는 서버 컴포넌트입니다.
 *
 * 이 컴포넌트는 서버 측에서 'getBlogDaysSinceCreation' 함수를 호출하여
 * 데이터를 가져오고 렌더링합니다.
 *
 * @returns React.JSX.Element (BlogInfoBase 컴포넌트)
 */
async function BlogInfoDay() {

  const isDev = process.env.NODE_ENV == "development";
  let totalDays = 1;

  if (!isDev)
    totalDays = await getBlogDaysSinceCreation();

  return (
    <BlogInfoBase
      data={totalDays}
      description='운영일'
      icon={CalendarIcon}
      unit='일'
    />
  );
}

export default BlogInfoDay;