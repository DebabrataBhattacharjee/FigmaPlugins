// This shows the HTML page in "ui.html".
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
    const childrenArray = figma.currentPage.children.map((childElement) => {
        divCssProperties = {
            pos_x: `${childElement.x}px`,
            pos_y: `${childElement.y}px`,
            position: "absolute",
            width: `${childElement.width}px`,
            height: `${childElement.height}px`,
            color: {
                r: childElement.fills[0].color.r * 255,
                g: childElement.fills[0].color.g * 255,
                b: childElement.fills[0].color.b * 255,
            }
        };
        return divCssProperties;
    });
    figma.ui.postMessage({
        type: "CREATE_ELEMENTS",
        components: childrenArray,
    });
});
