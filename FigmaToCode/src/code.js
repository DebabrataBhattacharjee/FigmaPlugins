import { getChildrenTree } from "./utils/createDomTree";
import { getColorCodes } from "./utils/createColorCodes";
figma.showUI(__html__);
figma.on("run", () => {
    let divCssProperties = {
        pos_x: null,
        pos_y: null,
        position: "absolute",
        width: null,
        height: null,
        color: null,
        paddingBottom: null,
        paddingLeft: null,
        paddingRight: null,
        paddingTop: null,
    };
    const DomTree = figma.currentPage.children.map((childElement) => {
        // console.log("ChildElementJson", JSON.stringify(childElement, null, 4));
        console.log("ChildElement", childElement);
        divCssProperties = {
            position: "absolute",
            pos_x: `${childElement.x}px`,
            pos_y: `${childElement.y}px`,
            width: `${childElement.width}px`,
            height: `${childElement.height}px`,
            paddingBottom: `${childElement.paddingBottom}px`,
            paddingLeft: `${childElement.paddingLeft}px`,
            paddingRight: `${childElement.paddingRight}px`,
            paddingTop: `${childElement.paddingTop}px`,
            children: getChildrenTree(childElement),
            color: getColorCodes(childElement),
        };
        return divCssProperties;
    });
    console.log(figma.currentPage.children);
    figma.ui.postMessage({
        type: "CREATE_ELEMENTS",
        components: DomTree,
    });
});
