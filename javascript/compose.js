// function compose(...fns) {
//   // reverse() 作用是使输入函数从右往左执行
//   fns = fns.reverse()
//   return function(...args) {
//       let res;
//       fns.forEach((fn,index) => {
//           if(index === 0) {
//               res = fn.apply(this, args)
//           } else {
//               res = fn(res)
//           }
//       })
//       return res
//   }
// }

function compose(...fns){
  if (!fns.length) return (v)=>v
  if (fns.length===1) return fns[0]
  return fns.reduce((pre,cur)=>(...args)=>pre(cur(...args)))
}

function fn1(num1,num2) {
  return num1+num2 + 1
}
function fn2(num) {
  return num + 2
}
function fn3(num) {
  return num + 3
}

console.log(compose(fn3,fn2,fn1)(0,1))