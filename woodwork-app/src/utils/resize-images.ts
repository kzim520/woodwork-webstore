import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "../../public/assets";
const outputDir = "../../public/resized";
const width = 500;
const height = 500;

// Ensure output directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Loop through all files in the input directory
fs.readdirSync(inputDir).forEach(async (file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  try {
    const image = sharp(inputPath);

    // Get metadata to skip very small files
    const metadata = await image.metadata();

    if (metadata.width && metadata.height && (metadata.width < width && metadata.height < height)) {
      // Just copy the image without resizing
      fs.copyFileSync(inputPath, outputPath);
      console.log(`⚠️ Skipped resizing (too small): ${file}`);
      return;
    }

    await image
      .rotate() // 🔁 Auto-correct rotation using EXIF
      .resize(width, height, {
        fit: "cover",      // Uniform 500x500 box, cropped
        position: "center" // Center cropping
      })
      .jpeg({
        quality: 100,            // Max quality
        progressive: true,
        chromaSubsampling: "4:4:4" // Higher fidelity color
      })
      .toFile(outputPath);

    console.log(`✅ Resized ${file}`);
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err);
  }
});