const carousel = document.querySelector(".carousel");

firstImg = document.querySelectorAll("img")[0];

arrowIcons = document.querySelectorAll(".wrapper i")

let isDragStart = false, prevPageX, prevScrollLeft;
let firstimgWidth = firstImg.clientWidth + 14;  // first image width and margin
let scrollWidth = carousel.scrollLeft - carousel.clientWidth

const showHideIcons = () => {
    // arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"   (ternary)
    
    if(carousel.scrollLeft == 0){
        arrowIcons[0].style.display = "none"
    }
    else{
        arrowIcons[0].style.display = "block"
    }
    
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"

    // if(carousel.scrollLeft == scrollWidth){
    //     arrowIcons[1].style.display = "none"
    // }
    // else{
    //     arrowIcons[1].style.display = "block"
    // }

}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // carousel.scrollLeft += icon.id == "left" ? -firstimgWidth : firstimgWidth;      (ternery)
        
        if(icon.id == "left"){
            carousel.scrollLeft -= firstimgWidth;
        }
        else{
            carousel.scrollLeft += firstimgWidth;
        }
        setTimeout(() => showHideIcons(), 6)
    })
})


const dragStart = (e) => {
    // variable valoue mouse event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling carousel  
    e.preventDefault();

    if(!isDragStart) return;
    carousel.classList.add("dragging")
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons()
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);


