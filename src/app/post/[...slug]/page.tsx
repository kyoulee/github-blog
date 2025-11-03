import path from 'path'
import config from '@/../config.json'
import { getAllFileList } from '@/components/libs/file/searchFile';

type PostSlugPageProps = {
  params: Promise<{ slug: string[] }>
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const slug = (await params).slug;
  const slugPath = slug.join('/')

  try {
    const { default: Post } = await import(`@/posts/${slugPath}.md`)
    return <Post />
  } catch (e) {
    return <h1>Post Not Found</h1>
  }
}

function getPostSlugs(): { slug: string[] }[] {
  const postSlugs = getAllFileList(config.PostUrl, [".md", ".mdx"])
    .map(filePath => {
      const filesRelativePath = path.relative(path.join(process.cwd(), "src", "posts"), filePath);
      const fileNameWithoutExt = filesRelativePath.replace(/\.(md|mdx)$/, '');
      const slugArray = fileNameWithoutExt.split(path.sep);
      return { slug: slugArray };
    });

  return postSlugs;
}


export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs;
}