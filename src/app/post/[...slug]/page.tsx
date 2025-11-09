import GiscusSetting from "@/components/post/giscus/GiscusSetting";
import { MarkdownModuleType } from "@/types/markdown";

type PostSlugPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const slug = (await params).slug;
  const slugPath = slug.join("/");
  try {
    const markdownModule = (await import(`@/posts/${slugPath}.md`)) as MarkdownModuleType;
    const Post = markdownModule.default;
    const id: string | undefined = markdownModule.frontmatter?.id;

    return (
      <div>
        <Post />
        <GiscusSetting id={id} />
      </div>
    )
  } catch (e) {
    return <h1>Post Not Found</h1>;
  }
}
