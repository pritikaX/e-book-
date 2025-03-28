/*=============== SEARCH This section allows a user to show and hide a search bar or 
content area when clicking respective buttons.===============*/
const searchButton = document.getElementById('search-button'),
searchClose = document.getElementById('search-close'),
searchContent = document.getElementById('search-content')

/*=====MENU SHOW=====*/
/*validate if constant exixts */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/*====MENU HIDDEN====*/
/*validate if constant exists*/
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}


/*=============== LOGIN Handles the display and hiding of the login modal or section.===============*/
const loginButton = document.getElementById('login-button'),
loginClose = document.getElementById('login-close'),
loginContent = document.getElementById('login-content')

/*=====LOGIN SHOW=====*/
/*validate if constant exixts */
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/*====LOGIN HIDDEN====*/
/*validate if constant exists*/
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER Adds a shadow to the header when the user scrolls down.
scrollY: Measures the vertical scroll position of the window.===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewpoint height,//
    this.scroll >=50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== HOME SWIPER Creates a carousel for the homepage using the Swiper library. ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {         /*breakpoints: Allows different configurations for varying screen sizes.*/
        1220: {
            spaceBetween: 32, // Use a positive value for space
        },
    }
    
    
    
  })

/*=============== FEATURED SWIPER Another carousel for featured items, 
similar to the home swiper but with additional navigation and pagination.===============*/
const swiper = new Swiper('.featured__swiper', {
    loop: true, // Enables infinite scrolling
    slidesPerView: 3, // Number of visible slides at a time
    spaceBetween: 30, // Space between slides in pixels
    navigation: { // Add navigation buttons
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: { // Add pagination dots
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: { // Optional: Autoplay slides
        delay: 3000,
        disableOnInteraction: false,
    },
});

// Initialize Swiper when the document is fully loaded

/*=============== NEW SWIPER ===============*/
const swiperNew = new Swiper('.new__swiper', {
    loop: true, // Enables infinite scrolling
    slidesPerView: 3, // Number of visible slides at a time
    spaceBetween: 30, // Space between slides in pixels
    navigation: { // Add navigation buttons
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: { // Add pagination dots
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: { // Optional: Autoplay slides
        delay: 3000,
        disableOnInteraction: false,
    },
});


/*=============== TESTIMONIAL SWIPER ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true, // Enables infinite scrolling
    slidesPerView: 3, // Number of visible slides at a time
    spaceBetween: 30, // Space between slides in pixels
    navigation: { // Add navigation buttons
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: { // Add pagination dots
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: { // Optional: Autoplay slides
        delay: 3000,
        disableOnInteraction: false,
    },
});


/*=============== SHOW SCROLL UP Displays a "scroll up" button when the user scrolls past a certain point.===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    /*when the scroll is higher tha  350 viewport height and the show-scroll class to the  a tag with the scrollup class*/
    this.scrollY >= 350? scrollUp.classList.add('show-scroll')   /*When the scroll exceeds 350px, the show-scroll class is added. */
                                           : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK 
Highlights the navigation link corresponding to the current section being viewed.===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
       const sectionHeight = current.offsetHeight,                /* height of the section */
       sectionTop = current.offsetTop - 58,                       /* position of the section from the top*/
       sectionId = current.getAttribute('id'),
       sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

       if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
       }else{
        sectionsClass.classList.remove('active-link')           /* Adds a class to highlight the link. */
       }
       
    })
}


/*=============== DARK LIGHT THEME Allows the user to toggle between light and dark themes. ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme= 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')   /*Stores user preferences across sessions.*/
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme =() => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic
if(selectedTheme) {
    //if the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate /deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    //add or remove the dark/icon theme manually with the button
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION Adds animations when elements come into view.===============*/
const sr = ScrollReveal({
    origin: 'top',  /*direction of the animation*/
    distance: '60px', /*Distance the element moves.*/
    duration: 2500,   
    delay: 400,
    reset: true /* Optional: Enables animation repeat Replays animation when scrolled back.*/
})

sr.reveal('.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer');
sr.reveal('.home__images', { delay: 600 });
sr.reveal('.services__card', { interval: 100 });
sr.reveal('.discount__data', { origin: 'left' });
sr.reveal('.discount__images', { origin: 'right' });
