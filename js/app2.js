/*
Get start and resent buttons
Limit inputs to respective scales
Make numbers countdown
Once the hour or minutes cotdown they need to switch over
Make countdown only start on start button
Reset nubmers to 0 with reset button

*/

class Timer {
    constructor(){
        this.seconds = document.getElementById('sec')
        this.minutes = document.getElementById('minute')
        this.hours = document.getElementById('hour')
    }

    init(){

        setInterval( ()=>{
            this.countdownTimer()
        }, 1000
        )

        this.init()
    }


    countdownTimer(){
        let s = this.seconds
        let m = this.minutes
        let h = this.hours

        if(h.value == 0 && m.value == 0 && s.value == 0){
            h.value = 0
            m.value = 0
            s.value = 0
        } else if (s.value == 0){
            s.value--
        }


    }



}





let timer = new Timer 
let startCountdown = timer.init()
;
// Buttons
const start = document.getElementById('start')
const reset = document.getElementById('reset')

start.addEventListener('click', ()=>{
    startCountdown
})

reset.addEventListener('click', ()=>{
    console.log('click reset')
})