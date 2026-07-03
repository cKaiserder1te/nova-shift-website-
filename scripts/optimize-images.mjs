#!/usr/bin/env node
import fs from 'fs';
import { readdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'bilder');

async function run() {
  try {
    const files = await readdir(imagesDir);
    const images = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

    if (!images.length) {
      console.log('No PNG/JPEG images found in', imagesDir);
      return;
    }

    for (const file of images) {
      const inputPath = path.join(imagesDir, file);
      const base = path.parse(file).name;
      const avifOut = path.join(imagesDir, `${base}.avif`);
      const webpOut = path.join(imagesDir, `${base}.webp`);

      try {
        if (!fs.existsSync(avifOut)) {
          await sharp(inputPath)
            .resize({ width: 1600 })
            .avif({ quality: 60 })
            .toFile(avifOut);
          console.log('Created', path.relative(process.cwd(), avifOut));
        } else {
          console.log('Skipping existing', path.relative(process.cwd(), avifOut));
        }

        if (!fs.existsSync(webpOut)) {
          await sharp(inputPath)
            .resize({ width: 1600 })
            .webp({ quality: 75 })
            .toFile(webpOut);
          console.log('Created', path.relative(process.cwd(), webpOut));
        } else {
          console.log('Skipping existing', path.relative(process.cwd(), webpOut));
        }
      } catch (err) {
        console.error('Failed to process', inputPath, err);
      }
    }
  } catch (err) {
    console.error('Image optimization failed', err);
    process.exit(1);
  }
}

run();
