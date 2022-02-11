import { createDiv } from "./utils/createDivElement";

onmessage = ({ data }) => {
  const {
    pluginMessage: { components },
  } = data;
  console.log("****", components);
  let htmlCode = createDiv(components);
  htmlCode = "<!DOCTYPE html>\n<html>\n<body>" + htmlCode + "</body>\n</html>";
  document.getElementById("div-container").innerText = htmlCode;
};
