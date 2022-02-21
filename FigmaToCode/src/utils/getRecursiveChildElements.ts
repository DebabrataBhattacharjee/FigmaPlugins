import { createStyleCode } from "./createStyleCode";
export const getRecursiveChildElements = (child) => {
  let divHtml;
  divHtml = "";
  // console.log("ppp", child);
  child.forEach((child) => {
    divHtml += `<${child.type}`;
    divHtml += createStyleCode(child.props);
    divHtml += `>`;
    divHtml += child.content ? child.content : "";
    if (child.children) {
      divHtml += getRecursiveChildElements(child.children);
    }
    divHtml += `</${child.type}>`;
  });
  return divHtml;
};
