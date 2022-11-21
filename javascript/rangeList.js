// Problem Set below:
// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range
// includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100,
// 201)
/**
 *
 * NOTE: Feel free to add any extra member variables/functions you like.
 */
class RangeList {
  constructor () {
    this.integers = []
  }
 /**
 * Adds a range to the list
 * @param {Array<number>} range - Array of two integers that specify
beginning and end of range.
 */
 add(range) {
  if (Array.isArray(range) && range.length===2 ){
    this.integers = this._merge([...this.integers,range])
    console.log('integers',this.integers )
  }
 }
 /**
 * Removes a range from the list
 * @param {Array<number>} range - Array of two integers that specify
beginning and end of range.
 */
 remove(range) {
   this.integers = this._remove(this.integers,range)
 }
 /**
 * Prints out the list of ranges in the range list
 */
 print() {
  console.log(this.integers.reduce((pre,cur)=>pre +'['+cur.join()+') ','')) 
 }
_merge (intervals) {
  const len = intervals.length
  const res = []
  if (!len) return res
  intervals = intervals.sort((a,b)=>a[0]-b[0])
  // 先推进去一个，然后用贪心算法，修改区间的右边界。
  res.push(intervals[0])
  let vol = res[0]
  for (let inter of intervals) {
    const rightBoudary = vol[1]
    let curItem = inter
    let [left,right] = curItem
    // 覆盖
    if (left<=rightBoudary){
        vol[1] = Math.max(right,rightBoudary)
    }else {
        // 区间不相交
        res.push(curItem)
        //贪心算法：这里才更新
        vol = res[res.length-1]
    }
  }
  return res
  }

  _remove (intervals,toBeRemoved){
    const len = intervals.length
    let res = [];
    if (!len || toBeRemoved.length<1){
      return res
    }
    for (let inter of intervals) {
      // 不相交：左边不相交和右边不相交
        if (inter[0] >= toBeRemoved[1] || inter[1] <= toBeRemoved[0]) res.push(inter);
        else {
            if (inter[0] < toBeRemoved[0]) res.push([inter[0], toBeRemoved[0]]);
            if (inter[1] > toBeRemoved[1]) res.push([toBeRemoved[1], inter[1]]);
        }
    }
    return res;
  }
}
// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// // Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// // Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// // Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// // Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// // Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// // Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// // Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// // Should display: [1, 3) [19, 21)