window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})




// const menu = document.querySelector('.nav__menu');
// const menuBtn = document.querySelector('#open-menu-btn');
// const closeBtn = document.querySelector('#close-menu-btn');


// menuBtn.addEventListener('click', () => {
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block";
//     menuBtn.style.display = "none";
// })

// const closeNav = () => {
//     menu.style.display = "none";
//     closeBtn.style.display = "none";
//     menuBtn.style.display = "inline";
// }

// closeBtn.addEventListener('click', closeNav)






let menu1 = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu1.onclick = () => {
    navbar.classList.toggle('active2');
    menu1.classList.toggle('move');
}

