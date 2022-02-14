import { CssProperties } from "../code";
export const getChildrenTree = (parentNode: any) => {
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
            paddingBottom: `${childElement.paddingBottom}px`,
            paddingLeft: `${childElement.paddingLeft}px`,
            paddingRight: `${childElement.paddingRight}px`,
            paddingTop: `${childElement.paddingTop}px`,
            children: getChildrenTree(childElement),
            color: {
              r: childElement.fills[0].color.r * 255,
              g: childElement.fills[0].color.g * 255,
              b: childElement.fills[0].color.b * 255,
            },
          };
        }
      })
      .filter((element: CssProperties) => element !== undefined)
  );
};
