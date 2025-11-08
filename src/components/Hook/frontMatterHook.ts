import type { Metadata, ResolvingMetadata } from "next";

import config from "@/../config.json";


export type MetadataProps = {
  params: Promise<{ slug: string[] }>;
};

/**
 * MDX 파일의 Frontmatter를 파싱하여 동적인 Next.js Metadata 객체를 생성합니다.
 *
 * @param {MetadataProps} props - Next.js 라우트에서 제공되는 params와 searchParams 객체.
 * @param {ResolvingMetadata} parent - 상위 레이아웃에서 resolve된 메타데이터.
 * @returns {Promise<Metadata>} 생성된 Metadata 객체 또는 에러 시 기본값.
 *
 * @note 🚨 중요: MDX 파일을 동적으로 import 하는 이 구문은
 * Next.js의 빌드 시스템(Webpack/MDX Loader)에 의존하며,
 * 해당 파일이 빌드 시 존재하고 컴파일된 경우에만 정상 작동합니다.
 */
export async function createPostMetadata(props: MetadataProps): Promise<Metadata> {
  const slug = (await props?.params).slug;
  const slugPath = slug.join("/");

  const PROD_URL =
    config.BlogBaseUrl || process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000";

  try {
    const { frontmatter } = (await import(`@/posts/${slugPath}.md`)) as MarkdownModuleType;

    const ogTitle = frontmatter ? frontmatter.title || config.BlogTitle : config.BlogTitle;
    const description = frontmatter ? frontmatter.description || config.BlogDescription : config.BlogDescription;
    const ogImage = frontmatter ? frontmatter.image || config.BlogImageUrl : config.BlogImageUrl;

    return {
      metadataBase: new URL(PROD_URL),
      title: ogTitle,
      description: description,
      openGraph: {
        title: ogTitle,
        description: description,
        images: [{ url: ogImage }],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: ogTitle,
        description: description,
        images: [ogImage],
      },
    };
  } catch (e) {
    console.error(`Error loading frontmatter for post: ${slugPath}`, e);
    return {
      title: "Post Not Found",
      description: "요청하신 포스트를 찾을 수 없습니다.",
    };
  }
}
