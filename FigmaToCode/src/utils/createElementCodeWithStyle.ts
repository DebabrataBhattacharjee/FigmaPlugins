import { createStyleCode } from "./createStyleCode";
export const createElementCodeWithStyle = (element) => {
  let divHtml;
  if (element) {
    // if (element.type == "Button" || element.type == "Input") {
    divHtml = `
      <${element.type}
      `;
    divHtml += createStyleCode(element.props);
    divHtml += `>`;
    divHtml += element.content ? element.content : "";
    if (element.children) {
      //   console.log('ppp', element.children)
      element.children.forEach((child) => {
        divHtml += `<${child.type}`;
        divHtml += createStyleCode(child.props);
        divHtml += `>`;
        divHtml += child.content ? child.content : "";
        divHtml += `</${child.type}>`;
      });
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
