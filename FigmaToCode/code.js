// This shows the HTML page in "ui.html".
figma.showUI(__html__);
console.log(figma.currentPage.children);
console.log("color");
console.log(figma.currentPage.children[0].fills);
figma.on("run", () => {
    const parent = figma.currentPage.children;
    Array.prototype.forEach.call(parent, child => {
        if (child.absoluteRenderBounds) {
            figma.ui.postMessage({
                type: "CREATE_ELEMENTS",
                height: child.absoluteRenderBounds.height,
                width: child.absoluteRenderBounds.width,
                x: child.absoluteRenderBounds.x,
                y: child.absoluteRenderBounds.y,
            });
        }
    });
});
