import { createImageBytes } from "./createImageBytes";
import { getColorCodes } from "./createColorCodes";
import { styleKeys } from "./../theme/styleKeys";
export const getFilteredProperties = async (child_name, childElement) => {
  let props, content, keys, type;
  let styleProps = styleKeys(child_name, childElement.type);
  keys = styleProps.keys;
  type = styleProps.type;
  props = keys.reduce(
    (result, key) => ({ ...result, [key]: childElement[key] }),
    {}
  );
  if (childElement.variantProperties) {
    props = {};
    props.Sizes = childElement.variantProperties.Sizes;
    props.States = childElement.variantProperties.States;
    props.Style = childElement.variantProperties.Style;
  }
  if (type == "Text") {
    props.color = getColorCodes(childElement.fills);
    content = childElement.characters;
  } else {
    props.bg = getColorCodes(childElement.fills);
  }
  if (type == "Image") {
    props.source = await createImageBytes(childElement);
  }
  // props.name = childElement.name;
  // props.position = "absolute";
  // props.width = childElement.width;
  // props.height = childElement.height;
  // props.top = childElement.y;
  // props.left = childElement.x;
  // props.child = (childElement.children) ? childElement.children : [];
  // console.log("from prop", childElement.name);
  return {
    type: type,
    name: childElement.name,
    props: props,
    content: content,
  };
};
