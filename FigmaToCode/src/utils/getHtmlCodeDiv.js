import { createDiv } from "./createDivElement";
export const getHtmlCodeDiv = (element) => {
    if (element) {
        // const divHtml = `
        // <div
        //     style='
        //     background-color: ${getBackgroundColor(element)};
        //     width:${element.width};
        //     height:${element.height};
        //     position:${element.position};
        //     top:${element.pos_y};
        //     left:${element.pos_x};
        //     padding-bottom:${element.paddingBottom};
        //     padding-left:${element.paddingLeft};
        //     padding-right:${element.paddingRight};
        //     padding-top:${element.paddingTop};
        //     '>
        //           ${createDiv(element.children)}
        // </div>
        // `;
        const divHtml = `
    <Button
        width = '${element.width}'
        height  = '${element.height}'
        pb = ${element.paddingBottom}
        pl = ${element.paddingLeft}
        pr = ${element.paddingRight}
        pt = ${element.paddingTop}
        >
              ${createDiv(element.children)}
    </Button>
    `;
        return divHtml;
    }
    return null;
};
