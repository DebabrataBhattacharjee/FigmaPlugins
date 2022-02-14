export const getColorCodes = (element) => {
  // if (element.type === "COMPONENT") {
  // }
  if (element.fills.length >0) {
    return {
      r: element.fills[0].color.r * 255,
      g: element.fills[0].color.g * 255,
      b: element.fills[0].color.b * 255,
    };    
  } else {
    return {
      r: 0,
      g: 0,
      b: 0,
    };    
  }
};
