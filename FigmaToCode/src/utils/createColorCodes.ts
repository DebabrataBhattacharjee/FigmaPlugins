export const getColorCodes = (element) => {
  // if (element.type === "COMPONENT") {
  // }
  return {
    r: element.fills[0].color.r * 255,
    g: element.fills[0].color.g * 255,
    b: element.fills[0].color.b * 255,
  };
};
