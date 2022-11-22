setTimeout(() => {
  console.log(1)
}, 0);
const promise = new Promise((resolve, reject) => {
  console.log(2)
  reject(3)
  console.log(4)
})

promise
.then(() => console.log(5))
.catch(() => console.log(6))
.then(() => console.log(7))
.catch(() => console.log(8))
.then(() => console.log(9))
console.log(10)

// 
// 2,4,10,6,8,1


// 已知如下数组：

// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

function flatten (arr) {
  const  arr1 = arr.reduce((pre,cur)=>{
    return Array.isArray(cur) ? [...pre,...flatten(cur)] : [...pre,cur]
  },[]).sort((a,b)=>a-b)
  return [...new Set(arr1)]
}

console.log(flatten(arr))
