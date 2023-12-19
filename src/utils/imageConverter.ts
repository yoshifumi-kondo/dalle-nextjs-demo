import Jimp from "jimp";
import fs from "fs";

export const convertToPngRGBA = async (path: string) => {
  let jImage = await Jimp.read(path);

  // Ensure image has an alpha channel
  if (!jImage.hasAlpha()) {
    jImage = jImage.opacity(1);
  }

  // Convert to RGBA format
  jImage = jImage.rgba(true);

  // Write the processed image to a temporary file
  const tempFilePath = "/tmp/processed_image.png";
  await jImage.writeAsync(tempFilePath);

  return fs.createReadStream(tempFilePath);
};
