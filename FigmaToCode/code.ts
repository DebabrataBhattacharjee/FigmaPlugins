// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.on("run", () => {
  const parent = figma.currentPage.children;
  Array.prototype.forEach.call(parent, child => {
    if (child.absoluteRenderBounds) {
      figma.ui.postMessage({
        type: "CREATE_ELEMENTS",
        name: child.name,
        height: child.absoluteRenderBounds.height,
        width: child.absoluteRenderBounds.width,
        x: child.absoluteRenderBounds.x,
        y: child.absoluteRenderBounds.y,
        color: {
          r: child.fills.color.r,
          g: child.fills.color.g,
          b: child.fills.color.b,
        }
      });
    }
  });
});
