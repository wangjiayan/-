// DOM 字符串转虚拟 DOM 对象
// const domStr = '<div><span>123</span></div>'

class Vnode {
  constructor (tag,attrs,value,nodeType) {
    this.tag = tag 
    this.attrs = attrs
    this.value = value
    this.children = []
    this.nodeType = nodeType
  }
  appendChild (child){
    this.children.push(child)
  }
}
const ELEMENT_TYPE = 1
const TEXT_TYPE = 3
function dom2vdom (node){
  let vnode = null
  const tag = node?.nodeName
  const nodeType = node?.nodeType
  const attrs = node?.attributes
  const value = node?.nodeValue
  const children = node?.children
  if (nodeType === ELEMENT_TYPE){
    let attrObj = {}
    for (let i=0;i<attrs.length;i++){
      const key = attrs[i].name
      const value = attrs[i].nodeValue
      attrObj[key] =value
    }
    console.log(attrObj)

    vnode = new Vnode(tag,attrObj,value,nodeType)
    for (let child of children){
      vnode.appendChild(dom2vdom(child))
    }
  } else if (nodeType === TEXT_TYPE){
    const value = node.nodeValue
    vnode = new Vnode(undefined,undefined,value,nodeType)
  }
  return vnode

}
const node = document.getElementById('app')
console.log(dom2vdom(node))