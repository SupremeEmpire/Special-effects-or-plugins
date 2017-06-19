function sum(...params){
    return params.reduce((pre,cur)=>pre+cur)
}
let author = "李泽举"
// es6导出
// export
export{sum,author}