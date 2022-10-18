const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const rightdiv = document.querySelector('.rightdiv')
const navlist = document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    rightdiv.classList.toggle('vclassresp');
    navlist.classList.toggle('vclassresp');
    navbar.classList.toggle('hnavresp');
}) 

// Scroll Reveal Animation
ScrollReveal({
    reset: false,
    distance: '75px',
    duration: 1700,
    delay: 70
});

ScrollReveal().reveal('.main .left, .container .row, .mainrow, .box', { delay: 600, origin: 'bottom', interval:200 });
ScrollReveal().reveal('.leftcol, .cols .left,  #Nationals .flex-center .container h1', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.rightcol, .cols .right1, .eligright .eligp, .leftcontact', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.group .block, .delhi .content', { delay: 800, origin: 'bottom',interval:200 });
ScrollReveal().reveal('.cols .mid, .container .bottom, .delhi .images', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.container .top, #Nationals .flex-center .container .delhi .ver h1', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.eligright .info', { delay: 600, origin: 'right', interval:200 });
ScrollReveal().reveal('.Edge h2, .rightborder, .eligleft, .rightcontact', { delay: 600, origin: 'left'});

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});