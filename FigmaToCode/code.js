// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.on("run", () => {
    let divCssProperties = {
        pos_x: null,
        pos_y: null,
        position: "absolute",
        width: null,
        height: null,
    };
    const childrenArray = figma.currentPage.children.map((childElement) => {
        divCssProperties = {
            pos_x: childElement.x,
            pos_y: childElement.y,
            position: "absolute",
            width: `${childElement.width}px`,
            height: `${childElement.height}px`,
        };
        return divCssProperties;
    });
    // console.log("childrenArray");
    // console.log(childrenArray);
    figma.ui.postMessage({
        type: "CREATE_ELEMENTS",
        components: childrenArray,
    });
});
