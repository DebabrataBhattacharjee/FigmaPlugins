import { getFilteredChildProperties } from "./utils/getFilteredChildProperties";
import { getFilteredProperties } from "./utils/getFilteredProperties";

figma.showUI(__html__);
figma.on("run", () => {
  let childProperties: CssProperties = {
    type: null,
    content: null,
    props: null,
    children: null,
  };
  let filteredProperties;
  const DomTree = figma.currentPage.children.map((childElement: any) => {
    // console.log("ChildElement", childElement);
    const child_name = childElement.name.split("/")[0];
    filteredProperties = getFilteredProperties(child_name, childElement);
    childProperties = {
      type: filteredProperties.type ? filteredProperties.type : child_name,
      props: filteredProperties.props,
      content: filteredProperties.content,
      children: getFilteredChildProperties(childElement),
    };
    console.log("childProperties", childProperties);
    return childProperties;
  });
  console.log(figma.currentPage.children);
  figma.ui.postMessage({
    type: "CREATE_ELEMENTS",
    components: DomTree,
  });
});

export interface Children {
  type: string;
  content: string;
  props: object;
}
export interface CssProperties {
  type: string;
  content: string;
  props: object;
  children: Array<Children>;
}
