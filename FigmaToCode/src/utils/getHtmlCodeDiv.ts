import { createDiv } from "./createDivElement";
import { getBackgroundColor } from "./getBackgroundColorDiv";

export const getHtmlCodeDiv = (element) => {
  if (element) {
    let divHtml;
    // console.log(element.name)
    if (element.name == 'Buttons') {
      divHtml = `
      <Button
        width = '${element.width}'
        height  = '${element.height}'
        pb = '${element.paddingBottom}'
        pl = '${element.paddingLeft}'
        pr = '${element.paddingRight}'
        pt = '${element.paddingTop}'
        >
        </Button>
        `;  
    } else if (element.name == 'Input') {
      divHtml = `
      <Input
        width = '${element.width}'
        height  = '${element.height}'
        pb = '${element.paddingBottom}'
        pl = '${element.paddingLeft}'
        pr = '${element.paddingRight}'
        pt = '${element.paddingTop}'
        >
        </Input>
        `;  
    }  else {
      divHtml = `
        <div
          width = '${element.width}'
          height  = '${element.height}'
          pb = '${element.paddingBottom}'
          pl = '${element.paddingLeft}'
          pr = '${element.paddingRight}'
          pt = '${element.paddingTop}'
          >
          </div>
          `;
    }
        // ${createDiv(element.children)}
    return divHtml;
  }
  return null;
};
