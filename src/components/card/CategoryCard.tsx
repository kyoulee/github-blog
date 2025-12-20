import React from "react";
import Link from "next/link";
import { RepoIcon } from "@primer/octicons-react";
import { getCategorySlugs } from "../Hook/slugHook";

import styles from "@/styles/category/categoryCard.module.css";

interface CategoryCardProps {
  name: string;
  href: string;
}

export function CategoryCard({ name, href }: CategoryCardProps) {
  return (
    <Link href={href} className={styles.categoryCard}>
      <div className={styles.iconWrapper}>
        <RepoIcon size={24} className={styles.folderIcon} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.categoryName}>{name}</h3>
        <span className={styles.viewLink}>Explore ➔</span>
      </div>
    </Link>
  );
}


export function CategoryLists() {
  const categories = getCategorySlugs();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>📁 Categories</h2>
        <p className={styles.sectionDesc}>관심 있는 주제를 선택하여 탐색해보세요.</p>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <CategoryCard
            key={`category-${i}`}
            name={cat.slug.join('/')}
            href={`/category/${cat.slug.join('/')}`}
          />
        ))}
      </div>
    </section>
  );
}