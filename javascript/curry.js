
function curry (fn){
  return function curryFn (...args){
    if (args.length >=fn .length){
      return fn.call(this, ...args)
    }else{
      return (...args2)=> curryFn(...args,...args2)
    }
  }
}

const add = (x,y,z)=> x+y+z
const curryAdd = curry(add)

console.log(curryAdd(1)(2)(3))
console.log(curryAdd(1,2,3))
console.log(curryAdd(1)(2, 3))