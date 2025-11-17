/**
 * in use
 * - src/systems/libs/copyImageToPost.ts
 * - src/systems/libs/wikilinkUrlResolver.ts
 *  */
export const slugifyPath = (p: string): string => {
  if (!p) return "";
  let slug = p.replace(/\\/g, "/");
  slug = slug
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-{2,}/g, "-");
  return slug;
};