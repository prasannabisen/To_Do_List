let task=[{
    todo:'work',
    struke:true
}]

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
    })
}