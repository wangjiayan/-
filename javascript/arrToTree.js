let data = [
  {
    id: 1,
    text: "节点1",
    parentId: 0 //这里用0表示为顶级节点
  },
  {
    id: 2,
    text: "节点1_1",
    parentId: 1 //通过这个字段来确定子父级
  },
  {
    id: 3,
    text: "节点1_1",
    parentId: 2 //通过这个字段来确定子父级
  },
  {
    id: 4,
    text: "节点1_1",
    parentId: 3 //通过这个字段来确定子父级
  }
];

const listToTree = function (arr){
  const map = {}
  const res = []
   for (item of arr){
    const {id,parentId} = item
    map[id]=item
    if (parentId!==0){
      const parentItem = map[parentId]
      const { children } = parentItem;
      map[parentId].children = children?.length ? [...children,item]:[item]
    }else{
      res.push(item)
    }
   }
   return res
}

console.log(JSON.stringify(listToTree(data)))
let a = [{"id":1,"text":"节点1","parentId":0,"children":[{"id":2,"text":"节点1_1","parentId":1,"children":[{"id":3,"text":"节点1_1","parentId":2,"children":[{"id":4,"text":"节点1_1","parentId":3}]}]}]}]