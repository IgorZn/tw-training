import fs from 'fs/promises'
import path from 'path'

export async function getPrjFolders(): Promise<string[]> {
  try {
    const dirPath = './src/app/'
    const items = await fs.readdir(dirPath);
    const folders = [];

    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = await fs.stat(itemPath);

      if (stat.isDirectory()) {
        folders.push(item);
      }
    }

    return folders;
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}