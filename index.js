let hscore=0
let gscore=0
let hscr=document.getElementById("homescr")
let gscr=document.getElementById("guestscr")

function hadd1() {
    hscore+=1
    hscr.textContent=hscore    
}
function hadd2() {
    hscore+=2
    hscr.textContent=hscore
}
function hadd3() {
    hscore+=3
    hscr.textContent=hscore     
}
function gadd1() {
    gscore+=1
    gscr.textContent=gscore       
}
function gadd2() {
    gscore+=2
    gscr.textContent=gscore       
}
function gadd3() {
    gscore+=3
    gscr.textContent=gscore        
}