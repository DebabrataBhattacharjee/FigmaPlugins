import spacing from "./../theme/sizes";
import fontSize from "./../theme/fontSize";
import createPropNames from "./createPropNames";
import { getNativeColorCode } from "./getNativeColorCode";
export const createStyleCode = (props) => {
  if (props) {
    let styleCode = "";
    let value = "";
    Object.keys(props).forEach((key) => {
      if (props[key]) {
        const spacing_mode = isNaN(props[key]) ? fontSize : spacing;
        const spacing_value = Object.keys(spacing_mode).find(
          (objKey) => spacing_mode[objKey] === props[key]
        );
        value = spacing_value
          ? `'${spacing_value}'`
          : isNaN(props[key])
          ? `'${props[key].toLowerCase()}'`
          : `'${props[key]}px'`;
        const name = createPropNames[key] ? createPropNames[key] : key;
        value =
          name == "bg" || name == "color"
            ? `'${getNativeColorCode(props[key])}'`
            : value;
        value = name == "source" ? `{{ uri : '${props[key]}' }}` : value;
        styleCode += " " + name + "=" + value;
      }
    });
    return styleCode;
  }
  return "";
};
