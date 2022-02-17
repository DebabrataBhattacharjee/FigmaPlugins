import { getColorCodes } from "./createColorCodes";
import { styleKeys } from "./../theme/styleKeys";
export const getFilteredProperties = (child_name, childElement) => {
  let props, content, keys, type;
  let styleProps = styleKeys(child_name);
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

  // props.width = childElement.width;
  // props.height = childElement.height;
  props.top = childElement.y;
  props.left = childElement.x;
  return {
    type: type,
    props: props,
    content: content,
  };
};
