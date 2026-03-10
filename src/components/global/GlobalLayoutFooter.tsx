import React from "react";
import SocialLinks from "@/components/libs/social/SocialLinks";

import styles from "@/styles/global/globalLayoutFooter.module.css";

function GlobalLayoutFooter() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentWrapper}>
        <p className={styles.copyrightText}>github-blog-with-obsidian © 2024. Powered by Kyoulee.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default GlobalLayoutFooter;
