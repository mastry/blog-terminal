import fs from 'fs'
import path from 'path';

const pagesFolder = './pages/';
const postsFolder = './posts/';

copyDir(pagesFolder, './public/pages');
copyDir(postsFolder, './public/posts');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
      let srcPath = path.join(src, entry.name);
      let destPath = path.join(dest, entry.name);

      entry.isDirectory() ?
          copyDir(srcPath, destPath) :
          fs.copyFileSync(srcPath, destPath);
  }
}