// 给一个字符串, 找到第一个不重复的字符
// ababcbdsa
// abcdefg
// 时间复杂度是多少?
// 除了给的两个用例, 还能想到什么用例来测试一下?

function findFistChar (str){
  const map = new Map()
  for (let char of str){
    if (map.get(char)){
      map.set(char,map.get(char)+1)
    }else{
      map.set(char,1)
    }
  }
  let fistChar = ''
  for (const [key,val] of map){
    if (!fistChar && val===1){
      fistChar = key
    }
  }
  return fistChar
}
console.log(findFistChar('ababcbdsa'))