import { getChildrenTree } from "./utils/createDomTree";
import { getColorCodes } from "./utils/createColorCodes";

figma.showUI(__html__);
figma.on("run", () => {
  let divCssProperties: CssProperties = {
    pos_x: null,
    pos_y: null,
    name: null,
    position: "absolute",
    width: null,
    height: null,
    color: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null,
    paddingTop: null,
  };
  const DomTree = figma.currentPage.children.map((childElement:any) => {
    // console.log("ChildElementJson", JSON.stringify(childElement, null, 4));
    // console.log("ChildElement", childElement);
    // console.log("name", childElement.name.split('/')[0]);
    // console.log("und", childElement.paddingBottom);
    // return false
    divCssProperties = {  
      position: "absolute", 
      name: childElement.name.split('/')[0], 
      pos_x: `${childElement.x}px`,
      pos_y: `${childElement.y}px`,
      width: `${childElement.width}px`,
      height: `${childElement.height}px`,
      paddingBottom: (childElement.paddingBottom) ? `${childElement.paddingBottom}px` :'',
      paddingLeft:  (childElement.paddingBottom) ? `${childElement.paddingLeft}px` : '',
      paddingRight:  (childElement.paddingBottom) ? `${childElement.paddingRight}px` : '',
      paddingTop:  (childElement.paddingBottom) ? `${childElement.paddingTop}px` : '',
      children: getChildrenTree(childElement),
      color: getColorCodes(childElement),
    };
    return divCssProperties;
  });
  console.log(figma.currentPage.children);
  figma.ui.postMessage({
    type: "CREATE_ELEMENTS",
    components: DomTree,
  });
});

export interface CssProperties {
  pos_x: string;
  pos_y: string;
  name: string;
  position: string;
  width: string;
  height: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  borderRadius?: string;
  children?: Array<CssProperties>;
  color: object;
}
