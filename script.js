var elem = document.querySelectorAll(".elem");

elem.forEach(function(ele){
ele.addEventListener("mouseenter",function(){
    ele.style.backgroundColor ="white";
    ele.style.color ="black";
    ele.childNodes[3].style.opacity = 1
    ele.childNodes[3].style.display =1
    // console.log(ele.childNodes);

})
ele.addEventListener("mouseleave",function(){
    ele.style.backgroundColor =" transparent";
    ele.childNodes[3].style.opacity = 0
    ele.style.color ="white";
})
ele.addEventListener("mousemove",function(dets){
    ele.childNodes[3].style.left = dets.x+"px"
    ele.childNodes[3].style.top = dets.y+"px"
  
})
})