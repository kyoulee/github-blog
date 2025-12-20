import path from "path";

import config from "@/../config.json";
import { getAllDirList, getAllFileList } from "@/components/libs/file/searchFile";

/**
 * 모든 MDX/Markdown 포스트 파일 경로를 스캔하여 Next.js의 동적 라우팅
 * (`generateStaticParams`)에 필요한 'slug' 형식으로 변환합니다.
 *
 * @returns {{ slug: string[] }[]} Next.js `params` 형식에 맞는 포스트 slug 배열.
 * @example posts/category/post.md -> { slug: ['category', 'post'] }
 */
export function getPostSlugs(): { slug: string[] }[] {
  const isDev = process.env.NODE_ENV == 'development';
  const postSlugs = getAllFileList(config.PostDir, [".md", ".mdx"]).map((filePath) => {
    const filesRelativePath = path.relative(path.join(process.cwd(), "src", "posts"), filePath);
    const fileNameWithoutExt = filesRelativePath.replace(/\.(md|mdx)$/, "");
    const normalizedPath = fileNameWithoutExt.replace(/\\/g, '/');
    const slugArray = normalizedPath.split('/');

    const encodedSlugArray = slugArray.map(segment => {
      if (isDev)
        return encodeURIComponent(segment)
      else
        return segment;
    });

    return { slug: encodedSlugArray };
  });

  return postSlugs;
}

/**
 * 주어진 파일 경로로부터 slug 배열을 생성합니다.
 * PostDir를 기준으로 상대 경로를 계산하고, 파일 확장자를 제거한 뒤 경로를 분할합니다.
 * @param filePath - slug를 생성할 파일의 전체 경로.
 * @returns 생성된 slug 배열. 예: ['samples', 'Markdown Test']
 */
export function createSlugFromFilePath(filePath: string): string[] {
  const postDirAbsolutePath = path.join(process.cwd(), config.PostDir);
  const relativePath = path.relative(postDirAbsolutePath, filePath);
  const { dir, name } = path.parse(relativePath)
  const normalizedDir = dir.replace(/\\/g, '/');
  let slugArray: string[];

  if (normalizedDir) {
    slugArray = [...normalizedDir.split('/'), name];
  } else {
    slugArray = [name];
  }
  const encodedSlugArray = slugArray.map(segment => encodeURIComponent(segment));

  return dir ? [...dir.split(path.sep), encodeURIComponent(name)] : [encodeURIComponent(name)];
}

export function getCategorySlugs(): { slug: string[] }[] {
  const isDev = process.env.NODE_ENV === 'development';

  const categorySlugs = getAllDirList(config.PostDir).map((dirPath) => {
    const dirsRelativePath = path.relative(path.join(process.cwd(), "src", "posts"), dirPath);
    const dirNameWithoutExt = dirsRelativePath.replace(/\.(md|mdx)$/, "");
    const normalizedPath = dirNameWithoutExt.replace(/\\/g, '/');
    const slugArray = normalizedPath.split('/');

    const encodedSlugArray = slugArray.map(segment => {
      if (isDev)
        return encodeURIComponent(segment)
      else
        return segment;
    });

    return { slug: encodedSlugArray };
  })

  return categorySlugs;
}