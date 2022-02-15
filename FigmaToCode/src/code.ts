import { getChildrenTree } from "./utils/createDomTree";
import { getColorCodes } from "./utils/createColorCodes";

figma.showUI(__html__);
figma.on("run", () => {
  let childProperties: CssProperties = {
    name: null,
    childStyles: {
      // pos_x: null,
      // pos_y: null,
      // position: "absolute",
      // width: null,
      // height: null,
      paddingBottom: null,
      paddingLeft: null,
      paddingRight: null,
      paddingTop: null,
      topLeftRadius: null,
      topRightRadius: null,
      bottomLeftRadius: null,
      bottomRightRadius: null,
      // color: null,
    },
  };
  const DomTree = figma.currentPage.children.map((childElement:any) => {
    // console.log("ChildElementJson", JSON.stringify(childElement, null, 4));
    console.log("ChildElement", childElement);
    // console.log("name", childElement.name.split('/')[0]);
    // console.log("und", childElement.paddingBottom);
    // return false
    childProperties = {
      name: childElement.name.split('/')[0], 
      childStyles: {
        // pos_x: `${childElement.x}px`,
        // pos_y: `${childElement.y}px`,
        paddingBottom: (childElement.paddingBottom) ? childElement.paddingBottom :'',
        paddingLeft:  (childElement.paddingBottom) ? childElement.paddingLeft : '',
        paddingRight:  (childElement.paddingBottom) ? childElement.paddingRight : '',
        paddingTop:  (childElement.paddingBottom) ? childElement.paddingTop : '',
        topLeftRadius:  (childElement.topLeftRadius) ? childElement.topLeftRadius : '',
        topRightRadius:  (childElement.topRightRadius) ? childElement.topRightRadius : '',
        bottomLeftRadius:  (childElement.bottomLeftRadius) ? childElement.bottomLeftRadius : '',
        bottomRightRadius:  (childElement.bottomRightRadius) ? childElement.bottomRightRadius : '',
        // color: getColorCodes(childElement),
        // children: getChildrenTree(childElement),
      }
    };
    return childProperties;
  });
  console.log(figma.currentPage.children);
  figma.ui.postMessage({
    type: "CREATE_ELEMENTS",
    components: DomTree,
  });
});

export interface CssProperties {
  name: string;
  childStyles: {
    // pos_x: string;
    // pos_y: string;
    // position: string;
    // width: string;
    // height: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    topLeftRadius?: string;
    topRightRadius?: string;
    bottomLeftRadius?: string;
    bottomRightRadius?: string;
    // children?: Array<CssProperties>;
    // color: object;    
  };
}
