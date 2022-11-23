

function isMapStr (str1,str2){
  const arr1 = str1.split('')
  const arr2 = str2.split('')
  const len1 = arr1.length
  const len2 = arr2.length
  let i = 0
  let map ={}
  if (len1!==len2 || !len1) return false
  while (i < len1){
    const left = arr1[i]
    const right = arr2[i]
    if (map[left]) {
      if (map[left]!==right){
        return false
      }
    }else{
      map[left] = right
    }
    i++
  }
  return true
}
// console.log(isMapStr('paper','title'))
// console.log(isMapStr('egg','add'))


const foo = {a:1}
function test (obj){
  obj.a = 2
  console.log('obj',obj)
}
test(foo)
console.log('foo',foo)
