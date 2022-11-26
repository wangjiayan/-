
// LazyMan(“Hank”)输出:
// Hi! This is Hank!


// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~


// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~


// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class _LazyMan {
  constructor (name){
    this.queue = []
    const task = ()=>{
      console.log(`Hi This is ${name}!`)
      // 记得
      this.next();
    }
    this.queue.push(task)
    setTimeout(()=>{
      // 下一个事件循环再执行
      this.next()
    },0)
  }
  next (){
    const task = this.queue.shift()
    task && task()
  }
  eat(type){
    const task = ()=>{
      console.log(`Eat ${type}`)
      this.next()
    }
    this.queue.push(task)
    return this
  }
  sleep (time) {
    const task = ()=>{
      setTimeout(()=>{
        console.log(`Wake up after ${time}`)
        this.next()
      },time * 1000)
    }
    this.queue.push(task)
    return this
  }
  sleepFirst(time){
    const task = ()=>{
      setTimeout(()=>{
        console.log(`Wake up after ${time}`)
        this.next()
      },time * 1000)
    }
    this.queue.unshift(task)
    return this
  }

}

function LazyMan (...args){
  return new _LazyMan(...args)
}
// LazyMan('Hank')
// LazyMan('Hank').sleep(2).eat('dinner')
// LazyMan('Hank').eat('dinner').eat('supper')
LazyMan('Hank').eat('supper').sleepFirst(5)