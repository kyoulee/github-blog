import { MarkdownModuleType } from "@/types/markdown";

export async function getPostModule(
  slug: string[]
): Promise<MarkdownModuleType> {
  const slugPath = slug.join("/");
  const decodedPath = decodeURIComponent(slugPath);
  const markdownModule = (await import(`@/posts/${decodedPath}.md`)) as MarkdownModuleType;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = markdownModule.frontmatter?.image || "/post/templates/images/default-og-image.jpg";

  if (markdownModule.frontmatter && imagePath.startsWith("/")) {
    markdownModule.frontmatter.image = `${basePath}${imagePath}`;
  }

  return markdownModule;
}
