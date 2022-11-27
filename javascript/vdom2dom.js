const vnode = {
  tag: 'DIV',
  attrs: {
      id: 'app'
  },
  children: [{
          tag: 'SPAN',
          value:'123',
          children: [{
              tag: 'A',
              children: []
          }]
      },
      {
          tag: 'SPAN',
          children: [{
                  tag: 'A',
                  children: []
              },
              {
                  tag: 'A',
                  children: []
              }
          ]
      }
  ]
}

function render(vnode) {
  const {tag,attrs,children} = vnode
  const type = tag.toLowerCase()
  const ele = document.createElement(type)
  for (const key in attrs){
    ele.setAttribute(key,attrs[key])
  }
  if (children.length){
    for (const childVnode of children){
      ele.appendChild(render(childVnode))
    }
  }
  return ele
}
console.log(render(vnode))