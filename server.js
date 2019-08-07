let task=[{
    todo:'work',
    strike:true
}]

function paint(){
    
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
        paint()
    })
}