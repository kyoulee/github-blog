
import type { Metadata, ResolvingMetadata } from 'next'
import { createPostMetadata, MetadataProps } from "@/components/Hook/frontMatterHook";
import { getPostSlugs } from '@/components/Hook/slugHook';
import { PostFrontMatter } from '@/types/frontmatter';
 
 
export async function generateMetadata(
  matadataProps: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const metadata = createPostMetadata(matadataProps, parent);
  return (metadata);
}

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs;
}

type PostSlugPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const slug = (await params).slug;
  const slugPath = slug.join("/");
  try {
    const markdownModule = (await import(`@/posts/${slugPath}.md`)) as { default: React.ComponentType, frontmatter : PostFrontMatter};
    const Post = markdownModule.default;

    return <Post />;
  } catch (e) {
    return <h1>Post Not Found</h1>;
  }
}
