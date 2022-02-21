import { getFilteredProperties } from "./getFilteredProperties";
export const getFilteredChildProperties = async (childElement) => {
  let children, dummy, properties, filtered;
  children = [];
  // console.log("getsCalled");
  if (childElement.children) {
    // console.log("childProp", childElement.children);
    dummy = await Promise.all(
      childElement.children.map(async (element) => {
        // console.log("name", element.name);
        properties = {};
        let child_name = element.name.split("/")[0];
        child_name = child_name.substr(0, child_name.indexOf(" "));
        filtered = await getFilteredProperties(child_name, element);
        properties = { ...filtered };
        console.log("properties ab", properties);
        properties.children = await getFilteredChildProperties(element);
        console.log("final props", properties);
        // children.push(properties);
        return properties;
      })
    );
    return dummy;
  }
  // console.log("exit child", children);
  console.log("exit", dummy);
  return dummy;
};
