buttons = document.querySelectorAll('.number');
input_obj = document.querySelector('#display');
console.log(input_obj)


buttons.forEach((b)=>{
    b.addEventListener('click',()=>{
        let k = b.textContent;
        input_obj.value += k.trim();
    })
})

clearance = document.querySelector('#AC')

clearance.addEventListener('click',()=>{
    input_obj.value = ''
})