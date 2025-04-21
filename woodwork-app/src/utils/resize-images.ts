import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "../../public/assets";
const outputDir = "./resized";
const width = 300;
const height = 200;

fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach((file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  sharp(inputPath)
    .resize(width, height, {
      fit: "inside",
      withoutEnlargement: true, // 👈 avoids scaling up small images
    })
    .toFile(outputPath)
    .then(() => console.log(`✅ Resized ${file}`))
    .catch((err) => console.error(`❌ Error resizing ${file}:`, err));
});