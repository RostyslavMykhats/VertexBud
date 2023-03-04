document.addEventListener('DOMContentLoaded', nav);
function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    let LIN = document.querySelectorAll('.nav-links a');
    burger.addEventListener('click', () => {
        LIN.forEach((hr)=>{
            hr.addEventListener('click', () => {
                nav.classList.remove('show')
            });
        })
        nav.classList.toggle('show')
    })
}






