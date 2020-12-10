function render(vnode, container) {
    // 1 jsx => 真实dom
    let node = createNode(vnode);
    // 2 存入容器
    container.appendChild(node);
}

function createNode(vnode) {
    let node;
    console.log(`虚拟dom  `, vnode);

    let isTextNode = typeof vnode === 'string' || typeof vnode === 'number';
    // 原生标签
    if (typeof vnode.type === 'string') {
        node = updateElementNode(vnode);
    } else if (isTextNode) {
        node = updateTextNode(vnode);
    }
    return node;
}
// 原生标签处理方法
function updateElementNode(vnode) {
    console.log(11111111111111,vnode.type)
    let node = document.createElement(vnode.type);
    if (vnode.props.children) {
        reconcileChildren(node, vnode.props.children);
    }
    return node;
}
// 深度遍历子节点
function reconcileChildren(parent, childrens) {
    let childrenArr = Array.isArray(childrens) ? childrens : [childrens];
    for (let i = 0; i < childrenArr.length; i++) {
        render(childrenArr[i], parent);
    }
}
// 文本标签
function updateTextNode(vnode) {
    let node = document.createTextNode(vnode);
    return node;
}
export default { render };
