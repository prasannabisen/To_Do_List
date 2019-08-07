
let task=[{
    todo:'work',
    strike:true
}]

function main(){
    console.log(task.length)
    let html=''
    for(let i=0;i<task.length ;i++)
    {
        if(task[i].strike)
        {
            html+=`<li class="strike">${task[i].todo}</li>`
        }
        else{
            html+=`<li>${task[i].todo}</li>`
        }
    }
    return html
}

function paint(){
    const ol=document.getElementById('ol')
    ol.innerHTML=main(task)
    input.value=''
}

window.onload=function(){
    console.log('kk')
    const button=document.getElementById('button')
    button.addEventListener('click',function(){
        const input=document.getElementById('input')
        task.push({
            todo:input.value,
            strike:false
        })
        console.log(task)
        paint()
    })
}