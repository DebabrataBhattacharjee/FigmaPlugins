import colors from "./../theme/colors";
export const getColorCodes = (element) => {
  if (element && element.length > 0) {
    if (element[0].color) {
      const r = element[0].color.r * 255;
      const g = element[0].color.g * 255;
      const b = element[0].color.b * 255;
      const colorCode = `'rgb(${r},${g},${b})'`;
      let a: any = colorCode.split("(")[1].split(")")[0];
      a = a.split(",");
      let val: any = a.map(function (x) {
        //For each array element
        x = parseInt(x).toString(16); //Convert to a base16 string
        return x.length == 1 ? "0" + x : x; //Add zero if we get only one character
      });
      val = "#" + val.join("");
      // let mainColor, mainColorObj, colorVal;
      // Object.keys(colors).forEach((key) => {
      //   mainColor = key;
      //   mainColorObj = colors[key];
      //   if (typeof mainColorObj == "string") {
      //     if (mainColorObj == val) {
      //       val = key;
      //     }
      //   } else if (typeof mainColorObj == "object") {
      //     colorVal = Object.keys(mainColorObj).find(
      //       (objKey) => mainColorObj[objKey] === val
      //     );
      //     if (colorVal) {
      //       val = mainColor + "." + colorVal;
      //     }
      //   }
      // });
      return val;
    }
    return "";
  } else {
    return "";
  }
};
