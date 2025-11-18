import GiscusSetting from "@/components/post/giscus/GiscusSetting";
import { getPostModule } from "@/systems/libs/slugifyPathUrl";
import { MarkdownModuleType } from "@/types/markdown";

type PostSlugPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  try {
    const markdownModule = await getPostModule(params);
    const Post = markdownModule.default;
    const id: string | undefined = markdownModule.frontmatter?.id;

    return (
      <div>
        <article className="markdown-body">
          <Post />
        </article>
        <GiscusSetting id={id} />
      </div>
    );
  } catch (e) {
    return <h1>Post Not Found</h1>;
  }
}
