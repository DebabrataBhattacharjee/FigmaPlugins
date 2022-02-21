import colors from "./../theme/colors";
export const getNativeColorCode = (color) => {
  if (color) {
    let nativeVal, val: any;
    val = color;
    let mainColor, mainColorObj, colorVal;
    Object.keys(colors).forEach((key) => {
      mainColor = key;
      mainColorObj = colors[key];
      if (typeof mainColorObj == "string") {
        if (mainColorObj == val) {
          nativeVal = key;
        }
      } else if (typeof mainColorObj == "object") {
        colorVal = Object.keys(mainColorObj).find(
          (objKey) => mainColorObj[objKey] === val
        );
        if (colorVal) {
          nativeVal = mainColor + "." + colorVal;
        }
      }
    });
    return nativeVal ? nativeVal : "";
  } else {
    return "";
  }
};
