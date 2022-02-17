export const styleKeys = (elementName) => {
  let keys = ["height", "width"];
  let type = "Box";
  if (elementName == "Buttons") {
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
  }
  if (elementName == "Text label") {
    keys = [];
    type = "Text";
  }
  if (elementName == "Input") {
    keys = ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"];
    type = "Input";
  }
  return {
    keys: keys,
    type: type,
  };
};
