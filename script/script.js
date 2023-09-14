var crsr = document.querySelector("#mouse_drop");
var navP = document.querySelectorAll("#nav p");

document.addEventListener("mousemove", (dets) =>{
    crsr.style.left = dets.pageX  + "px"
    crsr.style.top = dets.pageY  + "px"
})

navP.forEach(function(elem){
    elem.addEventListener("mouseenter", ()=>{
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #F45050";
        crsr.style.background = "transparent";
    });
    elem.addEventListener("mouseleave", ()=>{
        crsr.style.scale = 1;
        crsr.style.background = "#F45050";
    })
})
