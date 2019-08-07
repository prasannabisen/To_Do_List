import { checkServerIdentity } from "tls";

let task=[{
    todo:"work",
    strike:false
}]

function check(task){
    for(let i=0;i<task.length;i++)
    {
        if(task[i].strike)
        {
            html+=`<li class="strike">${task[i].todo}</li>`
        }
        else{
            html+=`<li>${task[i].todo}<li>`
        }
    }
}

function fun(){
    const ol=document.getElementById('ol')
    ol.innerHTML=check(task)
    input.value=""
}

window.onload=function(){
    const button=document.getElementById('button')
    button.addEventListener('click',function(){
        const input=document.getElementById('input')
        task.push({
            todo:input.value,
            strike:true
        }) 
        console.log(task)
        fun()
    })
}