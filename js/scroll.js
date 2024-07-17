// SCROLL
const header = document.querySelector(".header");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        header.style.top = "0";
        navMenu.style.top = "6rem";
    }
    else{
        header.style.top = "5.5rem";
        navMenu.style.top = "11.5rem";
    }
})