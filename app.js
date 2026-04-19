document.addEventListener("DOMContentLoaded", () => {
    let search_icon = document.querySelector('#search_icon');
    let search = document.querySelector('.search');

    search_icon.addEventListener('click', () => {
        search.classList.toggle('search_input');
    });
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

// video box start

let start_seekbar_end = document.querySelector('.start_seekbar_end');
let cc_vol_screen = document.querySelector('.cc_vol_screen');
let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol_icon');

vol_icon.addEventListener('click', () => {
    cc_vol_screen.classList.toggle('cc_vol');
    start_seekbar_end.classList.toggle('start_seebar');
    vol.classList.toggle('input_vol');
})    

// video box end

// year and a-z box start
let year = document.getElementById('year');
let a_z = document.getElementById('a_z');

year.addEventListener('click', () => {
    year.classesList.toggle('show_year1')
});

a_z.addEventListener('click' , () => {
    a_z.classList.toggle('show_year1')
});


