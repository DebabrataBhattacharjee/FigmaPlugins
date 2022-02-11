import { getHtmlCodeDiv } from "./getHtmlCodeDiv";

export const createDiv = (components) => {
  if (components && components.length) {
    let htmlCode = "";
    components.forEach((element) => {
      htmlCode = htmlCode + getHtmlCodeDiv(element);
    });
    return htmlCode;
  }
  return "";
};
