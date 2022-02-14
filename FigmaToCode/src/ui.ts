import { createDiv } from "./utils/createDivElement";

onmessage = ({ data }) => {
  const {
    pluginMessage: { components },
  } = data;
  // console.log("****", components);
  // console.log("str", JSON.stringify(components, null, 4));
  
  let htmlCode = createDiv(components);
  // console.log("****", htmlCode);
  
  // htmlCode = "<!DOCTYPE html>\n<html>\n<body>" + htmlCode + "</body>\n</html>";
  htmlCode = "<Box>" + htmlCode + "</Box>";
  document.getElementById("div-container").innerText = htmlCode;
};
