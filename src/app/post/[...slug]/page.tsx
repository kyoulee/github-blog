import { getPostModule } from "@/systems/libs/slugifyPathUrl";

type PostSlugPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  
  const slugOrigin = (await params).slug;
  const slug: string[] = slugOrigin.map(segment => decodeURIComponent(segment));
  
  try {
    const markdownModule = await getPostModule(slug);
    const Post = markdownModule.default;

    return (
      <div>
        <article className="markdown-body">
          <Post />
        </article>
      </div>
    );
  } catch (e) {
    return <h1>Post Not Found</h1>;
  }
}
