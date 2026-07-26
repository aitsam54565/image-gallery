const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentIndex = 0;
function showImage(index){

    currentIndex = index;
    lightbox.classList.add("active");
    lightboxImg.src = images[index].src;
}
images.forEach((img,index)=>{
    img.addEventListener("click",()=>{

        showImage(index);

    });
});
closeBtn.addEventListener("click",()=>{
    lightbox.classList.remove("active");
});
nextBtn.addEventListener("click",()=>{
    currentIndex++;
    if(currentIndex >= images.length){

        currentIndex = 0;

    }
    showImage(currentIndex);
});
prevBtn.addEventListener("click",()=>{
    currentIndex--;
    if(currentIndex < 0){

        currentIndex = images.length-1;

    }
    showImage(currentIndex);
});
document.addEventListener("keydown",(e)=>{
    if(!lightbox.classList.contains("active")) return;
    if(e.key==="ArrowRight"){

        nextBtn.click();

    }
    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }
    if(e.key==="Escape"){

        closeBtn.click();

    }
});
lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeBtn.click();

    }
});