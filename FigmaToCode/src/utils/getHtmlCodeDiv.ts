import { createDiv } from "./createDivElement";
import { createElementCodeWithStyle } from "./createElementCodeWithStyle";
export const getHtmlCodeDiv = (element) => {
  if (element) {
    let divHtml = createElementCodeWithStyle(element);
    return divHtml;
  }
  return null;
};
