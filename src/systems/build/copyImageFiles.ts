import fs from "fs";
import path from "path";

const SOURCE_ROOT = path.join(process.cwd(), "src", "posts");
const DEST_ROOT = path.join(process.cwd(), "public", "post");

function imagesDir(itemPath: string, relativePathFromSource: string) {
  const parentFolder = relativePathFromSource;
  const finalDestDir = path.join(DEST_ROOT, parentFolder);

  if (!fs.existsSync(finalDestDir)) {
    fs.mkdirSync(finalDestDir, { recursive: true });
  }
  const filesToCopy = fs.readdirSync(itemPath);

  filesToCopy.forEach((file: string) => {
    const srcFile = path.join(itemPath, "/", file);
    const slugifiedFileName = file.toLowerCase();
    const destFile = path.join(finalDestDir, slugifiedFileName);
    if (fs.statSync(srcFile).isFile()) {
      console.log(`[Asset Copy] Copying image from \"${srcFile}\" to \"${destFile}\"`);
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

function copyImagesRecursively(currentDir: string) {
  const items: string[] = fs.readdirSync(currentDir);
  const relativePathFromSource: string = path.relative(SOURCE_ROOT, currentDir).replace(/\\/g, "/");

  items.forEach((item: string) => {
    const itemPath = path.join(currentDir, item);
    if (!fs.existsSync(itemPath)) return;
    const stat = fs.statSync(itemPath);
    if (!stat.isDirectory()) return;
    if (item.toLowerCase() === "images") {
      imagesDir(itemPath, path.join(relativePathFromSource, "images"));
    } else {
      copyImagesRecursively(itemPath);
    }
  });
}
/**
 * 특정 소스 디렉토리에서 'images' 폴더를 찾아 대상 디렉토리로 구조를 유지하며 복사합니다.
 * @param sourceRoot 원본 폴더의 절대 경로입니다. (예: /project/src/posts)
 * @param destRoot 대상 public 폴더의 절대 경로입니다. (예: /project/public/post/images)
 */
function copyImages(sourceRoot: string, destRoot: string) {
  if (!fs.existsSync(destRoot)) {
    fs.mkdirSync(destRoot, { recursive: true });
  }

  try {
    console.log("[Asset Copy] Image copy started...");
    copyImagesRecursively(sourceRoot);
    console.log("[Asset Copy] Image copy complete.");
  } catch (error) {
    console.error("[Asset Copy] Error during image copy:", error);
    throw error;
  }
}

copyImages(SOURCE_ROOT, DEST_ROOT);
