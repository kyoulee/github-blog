import path from "path";

import config from "@/../config.json";
import { getAllFileList } from "@/components/libs/file/searchFile";
 
/**
 * 모든 MDX/Markdown 포스트 파일 경로를 스캔하여 Next.js의 동적 라우팅
 * (`generateStaticParams`)에 필요한 'slug' 형식으로 변환합니다.
 *
 * @returns {{ slug: string[] }[]} Next.js `params` 형식에 맞는 포스트 slug 배열.
 * @example posts/category/post.md -> { slug: ['category', 'post'] }
 */
export function getPostSlugs(): { slug: string[] }[] {
  const postSlugs = getAllFileList(config.PostUrl, [".md", ".mdx"]).map((filePath) => {
    const filesRelativePath = path.relative(path.join(process.cwd(), "src", "posts"), filePath);
    const fileNameWithoutExt = filesRelativePath.replace(/\.(md|mdx)$/, "");
    const slugArray = fileNameWithoutExt.split(path.sep);
    return { slug: slugArray };
  });

  return postSlugs;
}