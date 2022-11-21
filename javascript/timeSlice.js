const container = document.querySelector('#app')
const totalNum = 10000
const pageSize = 100
const totalPage = Math.ceil(totalNum/pageSize)
let page = 1
function loop (){
  if (page> totalPage) return
  window.requestAnimationFrame(()=>{
    const fragment = document.createDocumentFragment()
    let i= 0
    while ( i< pageSize) {
      let list = document.createElement('li')
      list.innerText = '内容'+page*pageSize + i
      fragment.append(list)
      i++
    }
    container.append(fragment)
    page++
    loop()
  })
}
// function loop() {
//   if (page >= totalPage) return;
//   window.requestAnimationFrame(() => {
//     let fragment = document.createDocumentFragment(); //文档片段接口
//     for (let i = 1; i <= pageSize; i++) {
//       let list = document.createElement("li");
//       list.innerText = i + pageSize * page;
//       fragment.append(list); //插入不会引起回流。
//     }
//     container.appendChild(fragment);
//     page++;
//     loop(); //注意需要在window.requestAnimation的尾部调用。
//   });
// }

loop()