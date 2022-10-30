function debounce (fn, delay) {
  let timer = null
  return function (){
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
     timer=setTimeout(()=>{
        fn.call(this,args)
      },delay)
  }
}
window.addEventListener(
  "scroll",
  debounce(() => {
    console.log(111);
  }, 1000)
);