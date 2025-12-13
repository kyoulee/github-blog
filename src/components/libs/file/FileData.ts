import { createSlugFromFilePath } from "@/components/Hook/slugHook";
import { getPostModule } from "@/systems/libs/slugifyPathUrl";

export async function getPostsData(fileNames: string[]) {
  return await Promise.all(
    fileNames.map(async (filePath) => {
      const slug = createSlugFromFilePath(filePath);
      try {
        const { frontmatter } = await getPostModule(slug);
        return { slug, frontmatter };
      } catch (e) {
        console.error(`Error processing post module for slug: ${slug}`, e);
        return null;
      }
    }),
  );
}
