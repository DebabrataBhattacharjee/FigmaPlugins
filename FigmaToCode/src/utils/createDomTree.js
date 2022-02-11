export const getChildrenTree = (parentNode) => {
    return (parentNode.children &&
        parentNode.children
            .map((childElement) => {
            if (childElement.name !== parentNode.name) {
                return {
                    pos_x: childElement.x,
                    pos_y: childElement.y,
                    position: "absolute",
                    width: `${childElement.width}px`,
                    height: `${childElement.height}px`,
                    children: getChildrenTree(childElement),
                    color: {
                        r: childElement.fills[0].color.r * 255,
                        g: childElement.fills[0].color.g * 255,
                        b: childElement.fills[0].color.b * 255,
                    },
                };
            }
        })
            .filter((element) => element !== undefined));
};
