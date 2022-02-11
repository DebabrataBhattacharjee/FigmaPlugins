// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.on("run", () => {
  let divCssProperties: CssProperties = {
    pos_x: null,
    pos_y: null,
    position: "absolute",
    width: null,
    height: null,
    color: null,
  };
  const childrenArray = figma.currentPage.children.map((childElement) => {
    // console.log(childElement.fills[0].color.r);
    divCssProperties = {
      pos_x: childElement.x,
      pos_y: childElement.y,
      position: "absolute",
      width: `${childElement.width}px`,
      height: `${childElement.height}px`,
      color: {
          r: childElement.fills[0].color.r,
          g: childElement.fills[0].color.g,
          b: childElement.fills[0].color.b,
        }
    };
    return divCssProperties;
  });
  // console.log("childrenArray");
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
  color: object;
}
