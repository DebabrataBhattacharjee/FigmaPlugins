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
        position: " absolute",
        width: null,
        height: null,
    };
    const DomTree = figma.currentPage.children.map((childElement) => {
        divCssProperties = {
            pos_x: childElement.x,
            pos_y: childElement.y,
            position: "absolute",
            width: `${childElement.width}px`,
            height: `${childElement.height}px`,
            children: getChildrenTree(childElement),
        };
        return divCssProperties;
    });
    figma.ui.postMessage({
        type: "CREATE_ELEMENTS",
        components: DomTree,
    });
});
