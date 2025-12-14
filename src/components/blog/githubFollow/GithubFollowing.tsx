import React from "react";
import styles from "@/styles/blog/githubFollow/githubFollowing.module.css";
import config from "@/../config.json";
import Link from "next/link";

interface GithubProfile {
  login: string;
  location: string;
  avatar_url: string;
  name: string | null;
  followers: number;
  html_url: string;
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const TARGET_USERNAME = config.githubId;
const GITHUB_API_URL: string = `https://api.github.com/users/${TARGET_USERNAME}/following?per_page=100`;

async function GithubFollowing() {

  let profiles: GithubProfile[] = [
    {
      login: 'kyoulee',
      location: 'Republic of Korea',
      avatar_url: 'https://avatars.githubusercontent.com/u/155470241?v=4',
      name: 'kyoulee',
      followers: 123,
      html_url: 'https://github.com/kyoulee'
    },
    {
      login: 'github',
      location: 'San Francisco, CA',
      avatar_url: 'https://avatars.githubusercontent.com/u/9919?v=4',
      name: 'Github',
      followers: 64778,
      html_url: 'https://github.com/github'
    },

  ];
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) {
    try {
      const headers: HeadersInit = { 'Accept': 'application/vnd.github.v3+json' };
      if (GITHUB_TOKEN) {
        headers['Authorization'] = `token ${GITHUB_TOKEN}`;
      }
      const res = await fetch(GITHUB_API_URL, { headers, cache: 'force-cache' });
      if (res.ok) {
        profiles = (await res.json()) as GithubProfile[];
      } else {
        console.error(`[GithubProfileCard] API Error: ${res.status}`);
      }
    } catch (error) {
      console.error("[GithubProfileCard] Fetch failed:", error);
    }
  }

  if (!profiles) {
    return <div className={styles.cardContainer} style={{ background: '#f0f0f0', color: '#333' }}>Error loading profiles.</div>;
  }

  // CSS에 배경 이미지 URL 주입

  return (
    <div className={styles.cardGallery}>
      {
        profiles.map((profile) => {
          return (
            <div className={styles.cardContainer}>
              <div className={styles.background} style={{ backgroundImage: `url('${profile.avatar_url}')` }} />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <h2 className={styles.mainTitle}>{profile.name || profile.login}</h2>
                <span className={styles.subTitle}>{profile.location}</span>
                <div className={styles.infoBar}>
                  <img src={profile.avatar_url} alt={profile.login} className={styles.infoAvatar} />

                  <div className={styles.infoText}>
                    <span className={styles.loginText}>{profile.login}</span>
                    <span className={styles.metaText}>❤️{profile.followers}</span>
                  </div>

                  <Link className={styles.followButton} href={profile.html_url} target="_blank">
                    + Follow User
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default GithubFollowing;