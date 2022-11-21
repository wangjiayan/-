const obj = {
  re: /hello/,
  f() {},
  date: new Date(),
  map: new Map(),
  list: [1, 2, 3],
  a: 3,
  b: 4,
};
obj.obj=obj

const obj1 = cloneDeep(obj);
console.log('obj1',obj1)
console.log('obj1',obj1)

function getType (target){
  const typeStr=Object.prototype.toString.call(target)
  const type = typeStr.slice(8,-1).toLocaleLowerCase()
  return type
}
function isPrimisive (target) {
    const vols = ['string','number','boolean','null','undefined','symbol','function']
    return vols.includes(getType(target))
}

function getInit (target){
   const Ctor = target.constructor
   return new Ctor()
}

function cloneDeep (target, memory = new Map()) {
  if (isPrimisive(target)) {
    return target
  }
  // 解决循环引用
  if (memory.get(target)){
    return memory.get(target)
  }

  // 不可遍历的引用类型: 
  if (getType(target)=== 'date'){
    return new Date(target)
  }
  if (getType(target)=== 'regexp'){
    return new RegExp(target)
  }
  let rst = getInit(target)
  memory.set(target,rst)
  // 可遍历的引用类型: set
  if (getType(target)==='set'){
    for (const item of target){
      rst.add(cloneDeep(item,memory))
    }
  }
  if (getType(target)==='map'){
    for (const key of target){
      rst.set(key,cloneDeep(target[key],memory))
    }
  }
  if (getType(target)==='array' || getType(target)==='object' ){
    for (const key in target){
      rst[key] = cloneDeep(target[key],memory)
    }
  }
  return rst
}