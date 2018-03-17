function higlightiing(selector) {
    let targetSelector = $(selector);
    depthFirstSearch(targetSelector);

    function depthFirstSearch(currentNode) {
        let currentNodeChildren = currentNode.children();
        for (let child of currentNodeChildren) {
            console.log($(child).children());
            if ($(child).children() === 0) {
                return;
            }
            depthFirstSearch($(child));
        }
    }
}

higlightiing('#content');