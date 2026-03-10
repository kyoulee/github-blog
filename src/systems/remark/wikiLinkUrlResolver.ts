type WikiLinkUrlResolverProps = {
  filePath: string;
  isEmbed: boolean;
  heading: string;
};
const workspaceFiles: Set<string> = new Set();

export function wikiLinskUrlResolver(props: WikiLinkUrlResolverProps): string {
  const slugifiedPath = encodeURIComponent(props.filePath.toLowerCase());
  
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  let url = `${basePath}/post/${slugifiedPath}`;
  
  if (props.heading) {
    url += `#${encodeURIComponent(props.heading)}`;
  }
  return url;
}
