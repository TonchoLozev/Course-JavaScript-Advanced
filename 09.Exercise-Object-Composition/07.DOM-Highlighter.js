function colorize(selector) {
    let target = $(selector);
    let maxDepth = 0;
    let deptestNode = target;

    depthFirstSearch(0, target);
    colorizeParents(maxDepth, deptestNode);
    function colorizeParents(remainingNodes, currendNode) {
        if(remainingNodes === -1){
            return;
        }

        currendNode.addClass('highlight');
        let parent  = currendNode.parent();
        colorizeParents(remainingNodes - 1, $(parent));
    }
    function depthFirstSearch(depth, currentNode) {
        if(depth > maxDepth){
            maxDepth = depth;
            deptestNode = currentNode;
        }
        let currentNodeChildren = currentNode.children();
        for (let child of currentNodeChildren) {
            console.log(child);
            depthFirstSearch(depth + 1, $(child));
        }
    }
}

colorize('.article');