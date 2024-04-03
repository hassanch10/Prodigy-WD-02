let milli=0;
let sec=0;
let min=0;
let hr=0;

let timer=false;

function start(){
    timer=true;
    myfun();
}
function stop(){
    timer=false;
    myfun();
}
function reset(){
    location.reload();
}

function myfun(){
 if(timer==true){
    milli=milli+1;
    if(milli==100){
        sec=sec+1;
        milli=0;
    }
    if(sec==60){
        min=min+1;
        sec=0;
    }
    if(min==60){
        hr=hr+1;
        min=0;
    }
    let sec2=sec;
    let mint2=min;
    let hr2=hr;
    if(sec<10){
        sec2="0"+sec
    }
    if(min<10){
        mint2="0"+min;
    }
    if(hr<10){
        hr2="0"+hr;
    }
   setTimeout("myfun()" ,10);
   document.getElementById("milli").innerHTML=milli;
   document.getElementById("sec").innerHTML=sec2;
   document.getElementById("min").innerHTML=mint2;
   document.getElementById("hr").innerHTML=hr2;
 }
}
