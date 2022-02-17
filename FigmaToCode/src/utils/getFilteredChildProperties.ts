import { getFilteredProperties } from "./getFilteredProperties";
export const getFilteredChildProperties = (childElement) => {
  let children,child;
  children = [];
  if (childElement.children) {
    child = childElement.children;
    while (child) {
      // console.log('child', child)
      child.forEach(element => {
        // console.log('element', element)
        children.push(getFilteredProperties(element.name, element))
      });
      child = (child[0].children) ? child[0].children : null;
    }
  }
  return children;
};
