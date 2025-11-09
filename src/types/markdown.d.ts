import { PostFrontMatter } from "./frontmatter"

type MarkdownModuleType = {
  default: React.ComponentType,
  frontmatter: PostFrontMatter | undefined
}