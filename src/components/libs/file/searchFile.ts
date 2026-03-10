import fs from "fs";
import path from "path";

function searchFileList(dir: string, fileList: Array<string>, extensions: Array<string>) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (file.startsWith("_")) return;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fileList = searchFileList(fullPath, fileList, extensions);
    } else if (extensions.includes(path.extname(file))) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

function searchFiles(dir: string, fileList: Array<string>, extensions: Array<string>) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (file.startsWith("_")) return;
    const fullPath = path.join(dir, file);
    if (extensions.includes(path.extname(file))) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

function searchDirList(dir: string, dirList: Array<string> = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (file.startsWith("_") || file === "images") return;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      dirList.push(fullPath);
      searchDirList(fullPath, dirList);
    }
  });

  return dirList;
}

export function getAllFileCount(dir: string, extensions: Array<string>): number {
  return searchFileList(path.join(process.cwd(), dir), [], extensions).length;
}

export function getAllFileList(dir: string, extensions: Array<string>): Array<string> {
  return searchFileList(path.join(process.cwd(), dir), [], extensions);
}

export function getFileListInDirectory(dir: string, extensions: Array<string>): Array<string> {
  return searchFiles(path.join(process.cwd(), dir), [], extensions);
}

export function getAllDirList(dir: string): Array<string> {
  return searchDirList(path.join(process.cwd(), dir), [])
}