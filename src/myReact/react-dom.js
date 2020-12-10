function render(vnode, container) {
    // 1 jsx => 真实dom
    let node = createNode(vnode);
    // 2 存入容器
    container.appendChild(node);
}

function createNode(vnode) {
    let node;

    let isTextNode = typeof vnode === 'string' || typeof vnode === 'number';
    // 原生标签
    if (typeof vnode.type === 'string') {
        node = updateElementNode(vnode);
    } else if (isTextNode) {
        node = updateTextNode(vnode);
    }else if (typeof vnode.type === 'function'){
        node = updateFuncNode(vnode)
    }
    return node;
}
// 原生标签处理方法
function updateElementNode(vnode) {
    let node = document.createElement(vnode.type);
    if (vnode.props.children) {
        reconcileChildren(node, vnode.props.children);
    }
    return node;
}
// 深度优先遍历子节点
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
// 函数式节点
function updateFuncNode(vnode){
    console.log(vnode.type)
    const {type,props} = vnode;
    const child = type(props);
    console.log(child)
    const node = createNode(child);
    return node;
}
export default { render };
