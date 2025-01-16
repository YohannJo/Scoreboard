let home=document.getElementById("hs");
let guest=document.getElementById("gs");
let hili=document.getElementById("hl");
let hc=0;
let gc=0;
        
function hb1(){
    hc+=1;
    home.textContent=hc;
    if(hc>gc){
        hili.textContent="Home is leading";
    }
    else if(gc>hc){
         hili.textContent="Guest is leading";
    }
    else{
        hili.textContent="They both have equal scorre";
    }
}
function hb2(){
    hc+=2;
    home.textContent=hc;
    if(hc>gc){
        hili.textContent="Home is leading";
    }
    else if(gc>hc){
         hili.textContent="Guest is leading";
    }
    else{
        hili.textContent="They both have equal scorre";
    }
}
function hb3(){
    hc+=3;
    home.textContent=hc;
    if(hc>gc){
        hili.textContent="Home is leading";
    }
    else if(gc>hc){
         hili.textContent="Guest is leading";
    }
    else{
        hili.textContent="They both have equal scorre";
    }
}
function gb1(){
    gc+=1;
    guest.textContent=gc;
    if(hc>gc){
        hili.textContent="Home is leading";
    }
    else if(gc>hc){
         hili.textContent="Guest is leading";
    }
    else{
        hili.textContent="They both have equal scorre";
    }
}
function gb2(){
    gc+=2;
    guest.textContent=gc;
    if(hc>gc){
        hili.textContent="Home is leading";
    }
    else if(gc>hc){
         hili.textContent="Guest is leading";
    }
    else{
        hili.textContent="They both have equal scorre";
    }
}
function gb3(){
    gc+=3;
    guest.textContent=gc;
    if(hc>gc){
        hili.textContent="Home is leading";
    }
    else if(gc>hc){
         hili.textContent="Guest is leading";
    }
    else{
        hili.textContent="They both have equal scorre";
    }
}
function ng(){
    hc=0;
    gc=0;
    home.textContent=hc;
    guest.textContent=gc;
    hili.textContent="Highlights:";
}

