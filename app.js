const slides = document.querySelectorAll(".card")

for(const slide of slides){
    slide.addEventListener("click", () => {
        clearActiveClasses()
        slide.classList.add("active")
    })
}

function clearActiveClasses(){
    for(slide of slides){   
        slide.classList.remove("active")
    }
}