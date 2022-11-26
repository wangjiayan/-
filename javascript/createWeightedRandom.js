function createWeightedRandom(input) {
  return function randomFunction (){
    let sum = 0
    let len = input.length
    let preSum =[]
    for (let i=0;i<len;i++){
      sum += input[i]
      preSum[i] =  sum
    }

    // 返回包含首位的随机数 [0,len)
    let randomNum = Math.floor(Math.random()*sum+1)
    return findItemIndex(preSum,randomNum)
  }
}
function findItemIndex(arr, target) {
  let left = 0
  let right = arr.length-1
  while(left<right){
    let mid = Math.floor((left+right)/2)
    if (arr[mid]===target){
      return mid
    }else if (arr[mid]>target){
      right = mid-1
    }else if (arr[mid]<target){
      left = mid + 1
    }
  }
  return left
}

const randomFn = createWeightedRandom([1,3,2,8])
console.log(randomFn())