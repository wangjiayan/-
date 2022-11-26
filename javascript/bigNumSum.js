
// 大数相加

let a = "9007199254740991";
let b = "1234567899999999999";



function add (a,b) {
  let arr1 = a.split('').reverse()
  let arr2 = b.split('').reverse()
  let i = 0
  let flag = 0
  let res = []
  while ( i < arr1.length || i < arr2.length) {
    let num1 = Number(arr1[i] ?? 0)
    let num2 = Number(arr2[i] ?? 0)
    let sum = flag + num1 + num2
    res.push(sum%10)
    flag = sum> 10? 1: 0
    i++
  }
  
  if (flag){
    res.push(1)
  }
  return res.reverse().join('')
}
console.log(add('123','123'))
console.log(add(a,b))