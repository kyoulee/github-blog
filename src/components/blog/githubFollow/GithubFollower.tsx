import React from "react";
import styles from "@/styles/blog/githubFollow/githubFollower.module.css";
import config from "@/../config.json";

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
}

// 최대 100명까지 가져오도록 명시
const GITHUB_API_URL: string = `https://api.github.com/users/${config.githubId}/followers?per_page=100`;

async function GithubFollowersList() {
  let users: GithubUser[] = [
    { login: 'github', avatar_url: 'https://avatars.githubusercontent.com/u/9919?v=4', html_url: 'https://github.com/github' },
    { login: 'kyoulee', avatar_url: 'https://avatars.githubusercontent.com/u/155470241?v=4', html_url: 'https://github.com/kyoulee' },
    { login: 'kyoulee', avatar_url: 'https://avatars.githubusercontent.com/u/155470241?v=4', html_url: 'https://github.com/kyoulee' },
    { login: 'kyoulee', avatar_url: 'https://avatars.githubusercontent.com/u/155470241?v=4', html_url: 'https://github.com/kyoulee' },
  ];

  const isProduction = process.env.NODE_ENV === 'production';
  const githubToken: string | undefined = process.env.GITHUB_TOKEN;

  if (isProduction) {
    try {
      const res = await fetch(GITHUB_API_URL, {
        headers: {
          // 토큰이 없으면 빈 문자열 대신 undefined를 보내는 것이 낫지만, 
          // 현재 로직상 빈 문자열도 Authorization 헤더가 전송되므로 주의가 필요합니다.
          // 여기서는 토큰이 있을 때만 헤더를 추가하는 방식이 가장 안전합니다.
          ...(githubToken && { 'Authorization': `token ${githubToken}` }),
          'Accept': 'application/vnd.github.v3+json'
        },
        cache: 'force-cache',
      });

      if (!res.ok) {
        const remaining = res.headers.get("X-RateLimit-Remaining");
        if (res.status === 403 && remaining === "0") {
          console.error(`GitHub API 속도 제한에 걸렸습니다.`);
        } else {
          console.error(`API 호출 실패: ${res.status} ${res.statusText}`);
        }
        // 에러 발생 시 users를 빈 배열로 초기화하여 렌더링 오류 방지
        users = [];
      } else {
        const data = await res.json();
        // API가 배열을 주는지 확인 (가끔 에러 객체가 올 수 있음)
        if (Array.isArray(data)) {
            users = data;
        }
        console.log("Follower count :", users.length);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      users = [];
    }
  }

  return (
    <div className={styles.listContainer}>
      <div className={styles.userList}>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.login} className={styles.imageWrapper}>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                title={user.login}
                className={styles.link}
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  width={40}
                  height={40}
                  className={styles.avatarImage}
                  loading="lazy"
                />
              </a>
            </div>
          ))
        ) : (
          <div style={{ color: '#57606a', fontSize: '14px' }}>표시할 팔로워가 없습니다.</div>
        )}
      </div>
    </div>
  );
}

function GithubFollower() {
  return (
    <div className={styles.container}>
      {/* GitHub 스타일 헤더 추가 */}
      <div className={styles.header}>
        <h2 className={styles.title}>Followers</h2>
        {/* 장식용 뱃지 (실제 개수는 아님, 느낌만 내기) */}
        <span className={styles.countBadge}>All</span>
      </div>
      <GithubFollowersList />
    </div>
  );
}

export default GithubFollower;