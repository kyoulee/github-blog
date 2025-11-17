const slugifyPath = (p: string): string => {
  if (!p) return "";
  let slug = p.replace(/\\/g, "/");
  slug = slug
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-{2,}/g, "-");
  return slug;
};

type WikiLinkUrlResolverProps = {
  filePath: string;
  isEmbed: boolean;
  heading: string;
};
const workspaceFiles: Set<string> = new Set();

export function wikiLinskUrlResolver(props: WikiLinkUrlResolverProps): string {
  const slugifiedPath = slugifyPath(props.filePath);
  let url = `/post/${slugifiedPath}`;

  if (props.heading) {
    url += `#${encodeURIComponent(props.heading)}`;
  }
  return url;
}
