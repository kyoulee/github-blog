import { MarkdownModuleType } from "@/types/markdown";

export async function getPostModule(
  params: Promise<{ slug: string[] }> | { slug: string[] },
): Promise<MarkdownModuleType> {
  const slug = (await params).slug;
  const slugPath = slug.join("/");
  const decodedPath = decodeURIComponent(slugPath);
  const markdownModule = (await import(`@/posts/${decodedPath}.md`)) as MarkdownModuleType;

  return markdownModule;
}
