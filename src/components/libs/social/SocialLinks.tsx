import React from "react";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaTwitter,
  FaQuestion,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import config from "@/../config.json";
import styles from "@/styles/global/socialLink.module.css";

// 모든 플랫폼에 대한 아이콘을 일관되게 정의하고, 폴백(fallback)을 추가합니다.
export const IconMap = {
  default: FaQuestion,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  twitch: FaTwitch,
  email: MdOutlineEmail,
};

type socialLinkItemProps = {
  keyName: string;
  href: string;
  IconMap: typeof IconMap;
  styles: typeof styles;
};

function SocialLinkItem({ keyName, href, IconMap, styles }: socialLinkItemProps) {
  if (!href) return null; // href가 없으면 렌더링하지 않음

  const IconComponent = IconMap[keyName as keyof typeof IconMap] || IconMap.default;

  const linkName = keyName.charAt(0).toUpperCase() + keyName.slice(1);
  const isExternal = keyName !== "email";

  return (
    <div key={keyName} className={styles.socialLinkItem}>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={`${linkName} 프로필 링크`}
      >
        <IconComponent
          className={styles.socialLink}
          size={24}
          title={linkName}
        />
      </a>
    </div>
  );
}

function SocialLinks() {
  const socialLinks = config.socialLinks;
  const linksArray = Object.entries(socialLinks);

  return (
    <div className={styles.socialLinksContainer}>
      {linksArray.map(([key, href]) => {
        return <SocialLinkItem key={key} keyName={key} href={href} IconMap={IconMap} styles={styles} />;
      })}
    </div>
  );
}

export default SocialLinks;
