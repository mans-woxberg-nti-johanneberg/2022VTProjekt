const nav = document.querySelector('.navlinks')
const burger = document.querySelector('.burger')

function togglemeny() {
    nav.classList.toggle('navactive')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', togglemeny)