let template = "我是{{name}}，年龄{{age}}，性别{{sex}},{{obj.a}},{{obj.d}}";
// template = '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}'
//注意这里的得正则匹配符号需要反斜杠 \{ 、 \w \.等
// [.\w+]
// a.b需要用累加器去处理下结果，传入初始值data
// {{name}}:slice(2, -2); // 截取第二个到倒数第二个的值,就得到name

let data = {
  name: "姓名",
  age: 18,
  sex: "女",
  obj: {
    a: "hahah",
    d: [1, 2, 3]
  }
};

console.log(render(template, data)); // 我是姓名，年龄18，性别undefined


function render (template,data){
  return template.replace(/\{\{.*?\}\}/g,function (match){
    const dataPath = match.slice(2,-2).trim()
    return new Function(`return this.${dataPath}`).call(data)
  })
}

