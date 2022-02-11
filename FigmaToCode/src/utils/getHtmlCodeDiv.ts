import { createDiv } from "./createDivElement";
import { getBackgroundColor } from "./getBackgroundColorDiv";

export const getHtmlCodeDiv = (element) => {
  if (element) {
    const divHtml = `
    <div
        style='
        background-color: ${getBackgroundColor(element)};
        width:${element.width};
        height:${element.height};
        position:${element.position};
        top:${element.pos_y};
        left:${element.pos_x}
        '>
              ${createDiv(element.children)}
    </div>
    `;
    return divHtml;
  }
  return null;
};
