/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ==========================================
   STICKY NAVBAR
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(8,16,29,.9)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        header.style.background = "rgba(11,17,32,.45)";
        header.style.boxShadow = "none";

    }

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll("section");

function revealSections(){

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("active");

        }

    });

}

reveals.forEach(section => section.classList.add("reveal"));

window.addEventListener("scroll", revealSections);

revealSections();


/* ==========================================
   ADVANCED LIGHTBOX
========================================== */

const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const zoomIn = document.getElementById("zoom-in");
const zoomOut = document.getElementById("zoom-out");

let current = 0;
let scale = 1;

function openImage(index){

    current = index;

    scale = 1;

    lightbox.style.display = "flex";

    lightboxImg.src = images[current].src;

    lightboxImg.style.transform = "scale(1)";
}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        openImage(index);

    });

});

function updateImage(){

    scale = 1;

    lightboxImg.src = images[current].src;

    lightboxImg.style.transform="scale(1)";

}

nextBtn.onclick=()=>{

    current=(current+1)%images.length;

    updateImage();

}

prevBtn.onclick=()=>{

    current=(current-1+images.length)%images.length;

    updateImage();

}

closeBtn.onclick=()=>{

    lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}

zoomIn.onclick=()=>{

    scale+=0.2;

    lightboxImg.style.transform=`scale(${scale})`;

}

zoomOut.onclick=()=>{

    if(scale>0.4){

        scale-=0.2;

    }

    lightboxImg.style.transform=`scale(${scale})`;

}

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!=="flex") return;

    if(e.key==="ArrowRight") nextBtn.click();

    if(e.key==="ArrowLeft") prevBtn.click();

    if(e.key==="Escape") closeBtn.click();

});

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");

galleryItems.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=image.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   PARALLAX FLOATING THUMBNAILS
========================================== */

const thumbs=document.querySelectorAll(".thumb");

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.pageX)/40;
    const y=(window.innerHeight/2-e.pageY)/40;

    thumbs.forEach((thumb,index)=>{

        thumb.style.transform=
        `translate(${x*(index+1)}px, ${y*(index+1)}px)`;

    });

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons=document.querySelectorAll(".btn,.price-btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius=diameter/2;

        circle.style.width=
        circle.style.height=
        `${diameter}px`;

        circle.style.left=
        `${e.clientX-this.offsetLeft-radius}px`;

        circle.style.top=
        `${e.clientY-this.offsetTop-radius}px`;

        circle.classList.add("ripple");

        const ripple=this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/* ==========================================
   SMOOTH HOVER GLOW
========================================== */

document.querySelectorAll(".price-card,.gallery-item,.feature")
.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.setProperty("--x",x+"px");
        card.style.setProperty("--y",y+"px");

    });

});
