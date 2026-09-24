const start = document.getElementById("start")
const stop=document.getElementById("stop")
const reset=document.getElementById("reset")
const secs=document.getElementById("secs")
let Interval;
let num=30

start.addEventListener("click", ()=>{
    Interval = setInterval(timer, 1000)
})
stop.addEventListener("click", ()=>{
    clearInterval(Interval)
})
reset.addEventListener("click", ()=>{
    clearInterval(Interval)
    num=30;
    secs.innerHTML="30"
})


function timer(){
    num--
    secs.innerHTML=num
    if (num<=0){
        clearInterval(Interval)
        alert("Time's up!")
    }
}