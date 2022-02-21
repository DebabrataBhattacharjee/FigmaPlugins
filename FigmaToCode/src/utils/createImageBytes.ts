import { Buffer } from "buffer";
export const createImageBytes = async (element) => {
  const image = figma.getImageByHash(element.fills[0].imageHash);
  const source = await image.getBytesAsync();
  const b64 = await Buffer.from(source).toString("base64");
  const base64img = `data:image/png;base64,` + b64;
  // console.log("bs64", base64img);
  return base64img;
};
