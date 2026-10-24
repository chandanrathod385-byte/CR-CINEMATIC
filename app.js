let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".slider"); // <-- fix here

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
    });
});

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 7000);

let watchBtn = document.getElementById("watchBtn");
let videoSection = document.getElementById("videoSection");
let video = document.getElementById("myVideo");

watchBtn.addEventListener("click", () => {

    videoSection.scrollIntoView({
        behavior: "smooth"
    });

    // observe when video comes in view
    let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            video.play();
            observer.disconnect(); // ek baar hi chale
        }
    }, { threshold: 0.6 });

    observer.observe(videoSection);

});



let search = document.getElementById('search');
let search_icon  = document.getElementById('search_icon');

search_icon.addEventListener('click' , () => {
    search.classList.toggle('search_input');
});




let cato_bx = document.getElementById('cato_bx');
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

left_scroll.addEventListener('click' , () => {
    cato_bx.scrollLeft -=100;
})

right_scroll.addEventListener('click' , () => {
   cato_bx.scrollLeft +=100;
})

let movies_bx_1 = document.getElementById('movies_bx_1');
let left_scroll1 = document.getElementById('left_scroll1');
let right_scroll1 = document.getElementById('right_scroll1');

left_scroll1.addEventListener('click' , () => {
    movies_bx_1.scrollLeft -= 150;
})

right_scroll1.addEventListener('click' , () => {
   movies_bx_1.scrollLeft +=  150;
})









// year and a-z box start
let year = document.getElementById('year');
let a_z = document.getElementById('a_z');

year.addEventListener('click', () => {
    year.classesList.toggle('show_year1')
});

a_z.addEventListener('click' , () => {
    a_z.classList.toggle('show__year1')
});    


