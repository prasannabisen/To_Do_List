let task=[{
    todo:"work",
    strike:true
}]

window.onload=function(){
    const button=document.getElementById('button')
    button.addEventListener('click',function(){
        const input=document.getElementById('input')
        task.push({
            todo:input.value,
            strike:false
        }) 
    })
}