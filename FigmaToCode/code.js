const getChildrenTree = (parentNode) => {
    return (parentNode.children &&
        parentNode.children
            .map((childElement) => {
            if (childElement.name !== parentNode.name) {
                return {
                    pos_x: childElement.x,
                    pos_y: childElement.y,
                    position: "absolute",
                    width: `${childElement.width}px`,
                    height: `${childElement.height}px`,
                    children: getChildrenTree(childElement),
                };
            }
        })
            .filter((element) => element !== undefined));
};
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
            color: {
                r: childElement.fills[0].color.r * 255,
                g: childElement.fills[0].color.g * 255,
                b: childElement.fills[0].color.b * 255,
            },
        };
        return divCssProperties;
    });
    figma.ui.postMessage({
        type: "CREATE_ELEMENTS",
        components: DomTree,
    });
});
