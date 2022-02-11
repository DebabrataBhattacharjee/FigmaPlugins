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
        // color: {
        //   r: child.fills.color.r,
        //   g: child.fills.color.g,
        //   b: child.fills.color.b,
        // }
      });
    }
  });
  let divCssProperties: CssProperties = {
    pos_x: null,
    pos_y: null,
    position: " absolute",
    width: null,
    height: null,
  };
  const childrenArray = figma.currentPage.children.map((childElement) => {
    console.log(childElement.x);
    divCssProperties = {
      pos_x: childElement.x,
      pos_y: childElement.y,
      position: "absolute",
      width: `${childElement.width}px`,
      height: `${childElement.height}px`,
    };
    return divCssProperties;
  });
  console.log(childrenArray);
  figma.ui.postMessage({
    type: "CREATE_ELEMENTS",
    components: childrenArray,
  });
});
  

interface CssProperties {
  pos_x: number;
  pos_y: number;
  position: string;
  width: string;
  height: string;
}
