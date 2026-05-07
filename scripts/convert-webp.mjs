import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const dirs = [
  'public',
  'public/certification-badges',
  'public/company-logos',
];

for (const dir of dirs) {
  const files = await readdir(dir);
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const input = join(dir, file);
    const output = join(dir, basename(file, ext) + '.webp');
    const before = (await stat(input)).size;

    await sharp(input).webp({ quality: 82 }).toFile(output);

    const after = (await stat(output)).size;
    const saved = (((before - after) / before) * 100).toFixed(1);
    console.log(`${file} → ${basename(output)}  ${(before/1024).toFixed(1)}KB → ${(after/1024).toFixed(1)}KB  (-${saved}%)`);
  }
}
