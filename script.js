
var h1 = document.getElementById('tasks')
var button = document.getElementById('save')
var input = document.getElementById('input')
var array = []




button.addEventListener('click' , function(){
    console.log('clicked')
    array.push(input.value+'\n')
    h1.innerText = array
})