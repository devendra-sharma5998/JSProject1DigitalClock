let clock= document.getElementById("clock2")
let hr= document.getElementById("hr")
let min= document.getElementById("min")
let sec= document.getElementById("sec")
let am_pm= document.getElementById("am_pm")

function timer(){
    let timers=new Date();
    let hours=timers.getHours()
    let minutes=timers.getMinutes()
    let seconds=timers.getSeconds()
    
   
    min.innerText=minutes;
    sec.innerText=seconds;
    if(hours>=12 ){
        am_pm.innerText="PM"
    }
    let t =document.getElementById("food_timing")
    let j=document.getElementById("goodtext")
    let image=document.getElementById("image")
    
    if(hours>12 && hours<14){
        food_timing.innerText="grab some health Lunch"
        goodtext.innerText="GOOD AFTERNOON!!TAKE SOME SLEEP"
        image.style.backgroundimage="URL('./Component 31 – 1@2x.jpg')"
    }
    if(hours>14 && hours<18){
        food_timing.innerText="STOP YAWINING, GET SOME TEA. "
        goodtext.innerText="GOOD EVENING"
        image.style.backgroundImage="URL('./lunch_image@2x.png')"
    }
    if(hours>18 && hours<22 ){
        food_timing.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
        goodtext.innerText="GOOD NIGHT"
        // image.style.backgroundimage="URL('./goodnight_image@2x.jpg')"
        image.style.backgroundImage="URL('./goodnight_image@2x.jpg')"
    }

    // console.log(timers);
    if(hours>12){
        hours= hours-12
    }
    hr.innerText=hours;
}

setInterval(timer,1000);

// let btns=docuent.getElementById("butn")


// selectbutn.addEventListener("change",function(event){
    let morning=document.getElementById("morning")
    let lunch = document.getElementById("lunch")
    let nap = document.getElementById("nap")
    let night = document.getElementById("night")
// })
let butn =document.getElementById("butn")
let morningtext;
let lunchtext;
let naptext;
let nighttext;

    // button= document.getElementById("button",function(event){

select.addEventListener("change",function(event){
    // console.log(event.target.selectedOptions[0].text) 
   morningtext=`WakeupTime ${event.target.selectedOptions[0].text}`
    
})
selectlunch.addEventListener("change",function(event){
    // console.log(event.target.selectedOptions[0].text) 
    lunchtext=`LunchTime ${event.target.selectedOptions[0].text}`
    
})
selectnap.addEventListener("change",function(event){
    // console.log(event.target.selectedOptions[0].text) 
    naptext=`NapTime ${event.target.selectedOptions[0].text}`
    
})
selectnight.addEventListener("change",function(event){
    // console.log(event.target.selectedOptions[0].text) 
    nighttext=`NightTime ${event.target.selectedOptions[0].text}`
    
})

butn.addEventListener("click",function(){
   morning.innerText=morningtext 
})
butn.addEventListener("click",function(){
lunch.innerText=lunchtext;
})
butn.addEventListener("click",function(){
nap.innerText=naptext;
})
butn.addEventListener("click", function(){
    night.innerText=nighttext
})










