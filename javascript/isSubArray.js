// 判断有序数组A是否为有序数组B的子数组(需连续)
//  // [1,2,2,3,4,5] - [2,3,4] => true
// 

function isSubArray (arr,subArr){
   let left =0
   let right = 0
   while (left<arr.length && right<subArr.length){
      if (arr[left]===subArr[right]){
        right++
        left++
        if (right===subArr.length){
          return true
        }
      }else{
        left = right ? left : left + 1
        right = 0
      }
   }
   return false
}

console.log(isSubArray([1,2,2,3,4,5],[2,3,4]))
console.log(isSubArray([1,2,2,3,4,5],[2,3,1]))