const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const rightdiv = document.querySelector('.rightdiv')
const navlist = document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    rightdiv.classList.toggle('vclassresp');
    navlist.classList.toggle('vclassresp');
    navbar.classList.toggle('hnavresp');
}) 