import { getFilteredChildProperties } from "./utils/getFilteredChildProperties";
import { getFilteredProperties } from "./utils/getFilteredProperties";

figma.showUI(__html__);
figma.on("run", async () => {
  let childProperties: CssProperties = {
    type: null,
    content: null,
    props: null,
    children: null,
  };
  let filteredProperties;
  const DomTree = await Promise.all(
    figma.currentPage.children.map(async (childElement: any) => {
      console.log("ChildElement", childElement);
      // console.log("type", childElement.type);
      // return false;
      let child_name = childElement.name.split("/")[0];
      child_name = child_name.substr(0, child_name.indexOf(" "));
      filteredProperties = await getFilteredProperties(
        child_name,
        childElement
      );
      // console.log("filteredProperties", filteredProperties);
      childProperties = {
        type: filteredProperties.type ? filteredProperties.type : child_name,
        props: filteredProperties.props,
        content: filteredProperties.content,
        children: await getFilteredChildProperties(childElement),
      };
      console.log("childProperties", childProperties);
      return await childProperties;
    })
  );
  console.log(figma.currentPage.children);
  // console.log("DomTree", DomTree);
  figma.ui.postMessage({
    type: "CREATE_ELEMENTS",
    components: await DomTree,
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
