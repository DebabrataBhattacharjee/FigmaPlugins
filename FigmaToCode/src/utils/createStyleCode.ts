import spacing from './../theme/sizes'
import fontSize from './../theme/fontSize'
import createPropNames from './createPropNames'
export const createStyleCode = (props) => {
    if (props) {
        // console.log(props)
    let styleCode = "";
        Object.keys(props).forEach(key => {
            if (props[key]) {
                const spacing_mode = isNaN(props[key]) ? fontSize : spacing;
                const spacing_value = Object.keys(spacing_mode).find(objKey => spacing_mode[objKey] === props[key]);
                const value = (spacing_value) ? `'${spacing_value}'` : isNaN(props[key]) ? `'${props[key].toLowerCase()}'` : `'${props[key]}px'`;
                const name = createPropNames[key] ? createPropNames[key] : key;
                styleCode += ' ' + name + '=' + value
            }
    });
    return styleCode;
  }
  return "";
};
