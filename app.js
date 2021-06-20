const slides = document.querySelectorAll(".card")

for(const slide of slides){
    slide.addEventListener("click", () => {
        slide.classList.add("active")
    })
}