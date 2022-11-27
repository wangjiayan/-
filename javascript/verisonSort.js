// 有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
// 现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
// 对于首位相同的版本号，进行第二位以及其余位的判断。
function sortVersion (versionList){
  return versionList.sort((a,b)=>{
    const arr1 = a.split('.')
    const arr2 = b.split('.')
    let i=0;
    while (true){
      let char1 = arr1[i] || 0
      let char2 = arr2[i] || 0
      if (char1 === char2){
        i++
      }else{
        return char2 - char1
      }
    }
  })
}

console.log(sortVersion(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']))