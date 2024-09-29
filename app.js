let images=document.getElementsByClassName("images");
Array.from(images).forEach(img => {
    img.addEventListener("mouseover",function(e){
        img.style.transform="rotate(180deg)";
        img.style.transition="all 1s ease";
        img.style.filter="grayscale(100%)";
        img.style.width="250px";
        img.style.height="250px";
        setTimeout(function(){
            img.style.filter="grayscale(0%)";
            img.style.transform="rotate(0deg)";
            img.style.width="200px";
            img.style.height="200px";
        }, 1000);
    
        img.style.cursor="pointer";
    })   
});
