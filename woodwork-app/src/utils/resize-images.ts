import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "../../public/assets";
const outputDir = "../../public/resized";
const width = 500;
const height = 500;

fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach((file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  sharp(inputPath)
  sharp(inputPath)
  .resize(width, height, {
    fit: "inside",
    withoutEnlargement: true,
  })
  .toFormat("jpeg", {
    quality: 90,
    progressive: true,
    chromaSubsampling: '4:4:4',
  })
    .toFile(outputPath)
    .then(() => console.log(`✅ Resized ${file}`))
    .catch((err) => console.error(`❌ Error resizing ${file}:`, err));
});