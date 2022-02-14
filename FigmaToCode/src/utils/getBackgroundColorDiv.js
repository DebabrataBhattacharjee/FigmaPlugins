export const getBackgroundColor = (element) => {
    if (element.color) {
        return `rgb(${element.color.r},${element.color.g},${element.color.b})`;
    }
    return "none";
};
