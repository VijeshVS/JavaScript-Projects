buttons = document.querySelectorAll('button')
input_tag = document.querySelector('#display')

let arr = Array.from(buttons)

arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            let ans = eval(input_tag.value)
            console.log(ans)
            input_tag.value = ans
        }
        else if(e.target.innerHTML == 'AC'){
            input_tag.value = ''
        }
        else if(e.target.innerHTML == 'DEL'){
            input_tag.value = input_tag.value.slice(0,input_tag.value.length-1)
        }
        else{
            input_tag.value += e.target.innerHTML
        }
    })
})

