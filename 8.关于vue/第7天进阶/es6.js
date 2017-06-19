let person = {sex:'女'}

let obj1 = {name:"陈晓芳"}
let obj2 = {age:18}

// 会将参数里的对象合并到第一个参数里面
Object.assign(obj1,obj2,person)

console.log(obj1)

