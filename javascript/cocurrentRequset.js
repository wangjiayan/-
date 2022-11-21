var urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png"
];

console.log('我执行了')
concurrentRequest(urls, 3).then((res) => {
  console.log(res);
});

function loadImage (url){
  return new Promise((resolve,reject)=>{
    const img = new Image()
    img.onload=function (){
      resolve()
    }
    img.onerror = function (){
      reject(new Error('fail'))
    }
    img.src = url
  })
}

function concurrentRequest (reqArr,maxNum){
  return new Promise((resolve,reject)=>{
    let counter = 1
    let index = 0
    const executor =  ()=>{
      loadImage(reqArr.pop()).then(()=>{
        counter--
        if (!reqArr.length){
          resolve('加载完毕')
        }else if(counter<= maxNum && reqArr.length){
          executor()
        }
      }).catch(err=>{
        reject(err)
      })
    }
    while(counter <= maxNum && reqArr.length){
      counter++
      index++
      executor()
    }
  })
}