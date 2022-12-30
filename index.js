let clock=document.getElementById("clock2")

let hr=document.getElementById("hr")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let am_pm=document.getElementById("am_pm")
let image_text=document.getElementById("image_text")


function timers(){
    
    let timer=new Date();
    let hour=timer.getHours();
    let minute=timer.getMinutes();
    let seconds=timer.getSeconds();
    
    min.innerText=minute;
    sec.innerText=seconds;

    if(hour>=12){
        am_pm.innerText="PM"
    }
    if(hour>=12 && hour<16){
        image_text.innerText="LETS HAVE LUNCH"
    }
    if(hour>=16 && hour<20){
        image_text.innerText="STOP YAWNING,GET SOME TEA.. ITS JUST EVENING!"
    }
    if(hour>=20 && hour<24){
        image_text.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
    }
    // }
    if(hour>12){
     hr.innerText=hour-12;

 }
    // console.log(timer);

}
setInterval(timers,1000);

let wakeup=document.getElementById("selectWakeUp")
let wakeUpvalue;
let lunch=document.getElementById("selectlunch")
let lunchvalue;
let nap=document.getElementById("selectnap")
let napvalue;
let night=document.getElementById("selectnight")
let nightvalue;

let morning_text=document.getElementById("morning_text")
let lunch_text=document.getElementById("lunch_text");
let nap_text=document.getElementById("nap_text");
let night_text=document.getElementById("night_text");
 
let morn;
let lunn;
let napp;
let nightt;

wakeup.addEventListener("change",function(event){
    morn=`wakeup_time:${event.target.selectedOptions[0].text}`
    wakeUpvalue=event.target.selectedOptions[0].value;
//    console.log(morn,wakeUpvalue)
})
lunch.addEventListener("change",function(event){
    lunn=`lunch_time:${event.target.selectedOptions[0].text}`
    lunchvalue=event.target.selectedOptions[0].value;
})
nap.addEventListener("change",function(event){
    napp=`nap_time ${event.target.selectedOptions[0].text}`
    napvalue=event.target.selectedOptions[0].value;
})
night.addEventListener("change",function(event){
    nightt=`night_time ${event.target.selectedOptions[0].text}`
    nightvalue=event.target.selectedOptions[0].value;
})

let ghanta=new Date()
let gha_hr=ghanta.getHours();

ghanta=gha_hr
if(gha_hr>12){
    gha_hr=gha_hr-12
}
console.log(gha_hr)
let goodtext=document.getElementById("goodtext")
let image=document.getElementById("image")

let butn=document.getElementById("butn")
butn.addEventListener("click",function(){
morning_text.innerText=morn;
lunch_text.innerText=lunn;
nap_text.innerText=napp;
night_text.innerText=nightt;

console.log(gha_hr,wakeUpvalue,ghanta)

if(ghanta==wakeUpvalue){
goodtext.innerText="GOOD MORNING!! WAKE UP!!";
image.style.backgroundImage="URL('./Component 30 – 1')"
}
else if(ghanta==lunchvalue){
    goodtext.innerText="GOOD AFTERNOON !! HAVE SOME SLEEP";
    image.style.backgroundImage="URL('./Component 31 – 1@2x.jpg')"
}
else if(ghanta==napvalue){
    goodtext.innerText="GOOD EVENING!!"
    image.style.backgroundImage="URL('./lunch_image@2x.png')"
}
else if(ghanta==nightvalue){
    goodtext.innerText="GOOD NIGHT!!"
    image.style.backgroundImage="URL('./goodnight_image@2x.jpg')"
}
})













