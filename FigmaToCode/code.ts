const getChildrenTree = (parentNode) => {
  return (
    parentNode.children &&
    parentNode.children
      .map((childElement: ComponentNode) => {
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
      .filter((element: CssProperties) => element !== undefined)
  );
};

figma.showUI(__html__);
figma.on("run", () => {
  let divCssProperties: CssProperties = {
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

interface CssProperties {
  pos_x: number;
  pos_y: number;
  position: string;
  width: string;
  height: string;
  borderRadius?: string;
  children?: Array<CssProperties>;
}
