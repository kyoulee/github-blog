import React from "react";
import styles from "@/styles/global/profiles.module.css";
import config from "@/../config.json";

interface GithubProfile {
  login: string;
  avatar_url: string;
  bio: string | null;
  description: string;
  html_url: string;
}

const TARGET_USERNAME = config.githubId || 'kyoulee';
const GITHUB_API_URL: string = `https://api.github.com/users/${TARGET_USERNAME}`;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const get3DContributionsGraphUrl = (username: string) => {
  return `https://raw.githubusercontent.com/yoshi389111/github-profile-3d-contrib/main/profile-ogp.png?username=${username}`;
};

async function GithubProfileSidebarComponent() {
  let profile: GithubProfile | null = {
    login: TARGET_USERNAME || 'DummyUser',
    avatar_url: 'https://avatars.githubusercontent.com/u/155470241?v=4',
    bio: '@kyoulee',
    description: config.profileDescription || 'being remembered by someone',
    html_url: `https://github.com/${TARGET_USERNAME}`,
  };

  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    try {
      const headers: HeadersInit = { 'Accept': 'application/vnd.github.v3+json' };
      if (GITHUB_TOKEN) {
        headers['Authorization'] = `token ${GITHUB_TOKEN}`;
      }
      const res = await fetch(GITHUB_API_URL, { headers, cache: 'force-cache' });
      if (res.ok) {
        profile = (await res.json()) as GithubProfile;
      }
      profile.description = config.profileDescription || 'being remembered by someone';
    } catch (error) {
      console.error("[GithubProfileSidebar] Fetch failed:", error);
    }
  }

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.profileHeader}>
        <img
          src={profile.avatar_url}
          alt={`${profile.login} Avatar`}
          className={styles.avatar}
        />
        <h2 className={styles.name}>{profile.login}</h2>
        <p className={styles.bio}>{profile.bio}</p>
      </div>

      <div className={styles.sectionDivider} />

      <p className={styles.description}>
        {profile.description || "GitHub description를 설정하여 자신을 소개해보세요."}
      </p>

      <div className={styles.sectionDivider} />

      {/* 추후 3D GitHub 잔디 그래프 추가 */}
      {/* <div>
        <h3 className={styles.contributionsTitle}>🔥 3D Contributions</h3>
        <a href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img 
                src={contributionsUrl} 
                alt={`${profile.login}'s 3D Contributions`} 
                className={styles.contributionsGraph} 
                loading="lazy"
            />
        </a>
      </div> */}

      {/* ✨ Follow 버튼 컨테이너 사용 및 버튼 스타일 적용 */}
      <a href={`https://github.com/${profile.login}?tab=followers`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.followButtonContainer} // 컨테이너 클래스 사용
      >
        <div className={styles.followButton}>
          Follow
        </div>
      </a>
    </div>
  );
}

export default GithubProfileSidebarComponent;