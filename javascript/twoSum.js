var twoSum = function(nums, target) {
   let map = {}
   let i = 0
   let len = nums.length
   while (i<len){
    if (map[target-nums[i]]!==undefined){
      return [i, map[target-nums[i]]]
    }else{
      map[nums[i]] = i
      i++
    }
   }
   return []
};
// var twoSum = function(nums, target) {
//   let map = {}
//   for (let i=0;i<nums.length;i++){
//       if (map[target-nums[i]]!==undefined){
//          return [i,map[target-nums[i]]]
//       }else{
//           map[nums[i]] = i 
//       }
//   }
//   return []
// };
console.log(twoSum([3,2,4],6))

