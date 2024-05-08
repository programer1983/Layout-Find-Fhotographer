var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 30,

    breakpoints: {
      1000: {
        slidesPerView: 2.5,
      },
      600: {
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1,
      }
    },
  });
  /* ====================================================================================================  */

  const burgerMenu = document.querySelector(".header__burger")
  const headerMenu = document.querySelector(".header__menu")
  const html = document.querySelector("html")

  burgerMenu.addEventListener("click", openMenu)

  function openMenu(){
    burgerMenu.classList.toggle('active')
    headerMenu.classList.toggle('open-menu')
    html.classList.toggle('hidden-html')
  }

/* ====================================================================================================  */
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".header__serch", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".popular__item", {
    ...scrollRevealOption,
    interval: 500,
  });
  ScrollReveal().reveal(".start__content h2", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".start__content a", {
    ...scrollRevealOption,
    delay: 400,
  });
  ScrollReveal().reveal(".start__inner img", {
    ...scrollRevealOption,
    origin: "right",
  });

  /* ==================================================================================================== */

  const animItems = document.querySelectorAll('.talent__item')

  if (animItems.length > 0){
      window.addEventListener('scroll', animOnScroll)
      function animOnScroll(){
          for (let index = 0; index < animItems.length; index++){
              const animItem = animItems[index]
              const animItemHeight = animItem.offsetHeight
              const animItemOffset = offset(animItem).top
              const animStart = 4
  
              let animItemPoint = window.innerHeight - animItemHeight / animStart
  
              if (animItemHeight > window.innerHeight){
                  animItemPoint = window.innerHeight - window.innerHeight  / animStart
              }
  
              if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                  animItem.classList.add('active')
              }else{
                  if (!animItem.classList.contains('anim-no-haight')){
                      animItem.classList.remove('active')
                  }
              }
          }
      }
      function offset(el){
          const rect = el.getBoundingClientRect()
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
          scrollTop = window.pageYOffset || document.documentElement.scrollTop
          return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
      }
      setTimeout(() => {
          animOnScroll()
      }, 300)
  }