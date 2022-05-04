function dynamicArray(n, queries) {
    // Write your code here
let arr= Array.from(Array(n), ()=>new Array())
let lastAnswer=0;
let answers=[]

queries.forEach(([q,x,y])=>{
    let idx=((x^lastAnswer)%n)
    if(q===1){
        arr[idx].push(y);
    }else{
        lastAnswer=arr[idx][y%arr[idx].length]
        answers.push(lastAnswer)
    }
})

return answers;
}
