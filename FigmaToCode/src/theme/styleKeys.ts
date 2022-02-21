export const styleKeys = (elementName, childType) => {
  let keys = ["height", "width"];
  let type = "Box";
  let imageValue;
  if (elementName == "Buttons" || elementName == "Button") {
    keys = [
      "paddingBottom",
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "topLeftRadius",
      "topRightRadius",
      "bottomLeftRadius",
      "bottomRightRadius",
    ];
    type = "Button";
  } else if (elementName == "Text" || childType == "TEXT") {
    keys = [];
    type = "Text";
  } else if (elementName == "Input") {
    keys = ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"];
    type = "Input";
  } else if (elementName == "image") {
    keys = ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"];
    type = "Image";
  } else if (childType == "FrameNode") {
    keys = [
      "paddingBottom",
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "topLeftRadius",
      "topRightRadius",
      "bottomLeftRadius",
      "bottomRightRadius",
    ];
  }
  return {
    keys: keys,
    type: type,
  };
};
