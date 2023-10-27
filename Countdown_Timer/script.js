let minup = document.querySelector('#minup')
let secup = document.querySelector('#secup')
let mindown = document.querySelector('#mindown')
let secdown = document.querySelector('#secdown')

let min = document.querySelector('#min')
let sec = document.querySelector('#sec')

let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let clear = document.querySelector('#clear')

console.log(min.innerHTML)

minup.addEventListener('click',()=>{
    let k = Number.parseInt(min.innerHTML)
     k += 1
     min.innerHTML = k;
})

mindown.addEventListener('click',()=>{
    let k = Number.parseInt(min.innerHTML)
     k -= 1
     if(k>=0){
     min.innerHTML = k;
     }
})


secup.addEventListener('click',()=>{
    let k = Number.parseInt(sec.innerHTML)
     k += 1
     sec.innerHTML = k;
     if(k>60){
        let k = Number.parseInt(min.innerHTML)
        k += 1
        min.innerHTML = k;
        sec.innerHTML = 0;
     }
})

secdown.addEventListener('click',()=>{
    let k = Number.parseInt(sec.innerHTML)
     k -= 1
     if(k<0 && Number.parseInt(min.innerHTML)>0){
        let k = Number.parseInt(min.innerHTML)
        k -= 1
        if(k>=0){
        min.innerHTML = k;
        }
     sec.innerHTML = 59;
     }
     else{
        let k = Number.parseInt(sec.innerHTML)
        k -= 1
        if(k>=0){
        sec.innerHTML = k;
        }
     }
})

clear.addEventListener('click',()=>{
    min.innerHTML = 0;
    sec.innerHTML = 0;

    minup.disabled = false;
    mindown.disabled = false;
    secup.disabled = false;
    secdown.disabled = false;

    start.innerHTML = 'Start'

})

let intervalID = 0;

start.addEventListener('click',()=>{
    minup.disabled = true;
    mindown.disabled = true;
    secup.disabled = true;
    secdown.disabled = true;
    start.disabled = true;
    start.innerHTML = 'Continue';

    if(!intervalID){
    intervalID = setInterval(()=>{
        if((Number.parseInt(min.innerHTML) == 0) && (Number.parseInt(sec.innerHTML)) == 0 ){
            //alert
            alert('Timeup!!')
            clearInterval(intervalID);
            intervalID = 0;
            start.disabled = false;
            start.innerHTML = 'Start';
            
            // make buttons clickable
            minup.disabled = false;
            mindown.disabled = false;
            secup.disabled = false;
            secdown.disabled = false;

            console.log('cleared but executed')
            //clear Interval       
        }
        else if ( (Number.parseInt(min.innerHTML) > 0) && (Number.parseInt(sec.innerHTML) == 0) ){
            let k = Number.parseInt(min.innerHTML);
            k -= 1;
            min.innerHTML = k;

            sec.innerHTML = 59;
        }
        else if ( (Number.parseInt(min.innerHTML) > 0) && (Number.parseInt(sec.innerHTML) > 0) ){
            let k = Number.parseInt(sec.innerHTML);
            k -= 1;
            sec.innerHTML = k;
        } else if(Number.parseInt(sec.innerHTML) > 0){
            let k = Number.parseInt(sec.innerHTML);
            k -= 1;
            sec.innerHTML = k;
        }
    },1000)


}
    else{
        alert('Timer has already started!!')
    }
   
})

stop.addEventListener('click',()=>{
    start.disabled = false;
    clearInterval(intervalID)
    intervalID = 0;
})