import { createStyleCode } from "./createStyleCode";
import { getRecursiveChildElements } from "./getRecursiveChildElements";
export const createElementCodeWithStyle = (element) => {
  let divHtml, child;
  if (element) {
    // if (element.type == "Button" || element.type == "Input") {
    divHtml = `
      <${element.type}
      `;
    divHtml += createStyleCode(element.props);
    divHtml += `>`;
    divHtml += element.content ? element.content : "";
    if (element.children) {
      divHtml += getRecursiveChildElements(element.children);
    }
    divHtml += `</${element.type}>
        `;
    // } else {
    //   divHtml = `
    //     <Box
    //     `;
    //   divHtml += createStyleCode(element.props);
    //   divHtml += `>
    //       </Box>
    //       `;
    // }
    return divHtml;
  }
  return "";
};
