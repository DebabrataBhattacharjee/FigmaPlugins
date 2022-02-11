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
    };
    const DomTree = figma.currentPage.children.map((childElement) => {
        console.log("ChildElement", childElement);
        divCssProperties = {
            pos_x: `${childElement.x}px`,
            pos_y: `${childElement.y}px`,
            position: "absolute",
            width: `${childElement.width}px`,
            height: `${childElement.height}px`,
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
