onmessage = ({ data }) => {
    const { pluginMessage: { components }, } = data;
    console.log("****", components);
    let htmlCode = createDiv(components);
    htmlCode = "<!DOCTYPE html>\n<html>\n<body>" + htmlCode + "</body>\n</html>";
    document.getElementById("div-container").innerText = htmlCode;
    createDiv(components);
};
function createDiv(components) {
    if (components && components.length) {
        let htmlCode = "";
        components.forEach((element) => {
            htmlCode = htmlCode + getHtmlCodeDiv(element);
        });
        return htmlCode;
    }
    return "";
}
function getHtmlCodeDiv(element) {
    if (element) {
        const divHtml = `
  <div
      style='
      background-color: ${getBackgroundColor(element)};
      width:${element.width};
      height:${element.height};
      position:${element.position};
      top:${element.pos_y};
      left:${element.pos_x}
      '>
            ${createDiv(element.children)}
  </div>
  `;
        return divHtml;
    }
    return null;
}
function getBackgroundColor(element) {
    if (element.color) {
        return `rgb(${element.color.r},${element.color.g},${element.color.b})`;
    }
    return "none";
}
// document.getElementById("create").onclick = () => {
//   const textbox = document.getElementById("count") as HTMLInputElement;
//   const count = parseInt(textbox.value, 10);
//   parent.postMessage(
//     { pluginMessage: { type: "create-rectangles", count } },
//     "*"
//   );
// };
// document.getElementById("cancel").onclick = () => {
//   parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
// };
