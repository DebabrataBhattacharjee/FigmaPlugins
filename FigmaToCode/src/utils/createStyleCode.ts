export const createStyleCode = (childStyles) => {
    // console.log(childStyles)
    if (childStyles) {
    let styleCode = "";
        Object.keys(childStyles).forEach(key => {
            if (childStyles[key]) {
                const value = `'${childStyles[key]}'`;
                styleCode += ' ' + key + '=' + value
            }
    });
    return styleCode;
  }
  return "";
};
