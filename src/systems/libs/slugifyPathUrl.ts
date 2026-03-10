import { MarkdownModuleType } from "@/types/markdown";

export async function getPostModule(
  slug: string[]
): Promise<MarkdownModuleType> {
  const slugPath = slug.join("/");
  const decodedPath = decodeURIComponent(slugPath);
  const markdownModule = (await import(`@/posts/${decodedPath}.md`)) as MarkdownModuleType;

  return markdownModule;
}
