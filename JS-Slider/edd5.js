window.addEventListener('DOMContentLoaded', () => {
   const cona = document.querySelector('.cona'),
         slider = document.querySelector('.slider'),
         sliderCard = document.getElementsByClassName('slider-card'),
         active = document.querySelector('.active'),
         line1 = document.querySelector('.line1'),
         line2 = document.querySelector('.line2'),
         line3 = document.querySelector('.line3'),
         line4 = document.querySelector('.line4')

   line1.addEventListener('click', () => {
      slider.style.transform = 'translateY(0)'
      active.style.top = '0'
      cona.style.background = `linear-gradient(35deg,rgb(99, 0, 220), rgb(240, 0, 0))`
   })
   
   line2.addEventListener('click', () => {
      slider.style.transform = 'translateY(-25%)'
      active.style.top = '80px'
      cona.style.background = `linear-gradient(210deg, #ffc116, rgb(0, 92, 151)`
   })
   
   line3.addEventListener('click', () => {
      slider.style.transform = 'translateY(-50%)'
      active.style.top = '160px'
      cona.style.background = `linear-gradient(135deg,rgb(0, 49, 128), rgb(255, 0, 212))`
   })
   
   line4.addEventListener('click', () => {
      slider.style.transform = 'translateY(-75%)'
      active.style.top = '240px'
      cona.style.background = `linear-gradient(245deg,green, blue)`
   })

   console.log(sliderCard)
})