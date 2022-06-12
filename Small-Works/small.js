

const slider = document.querySelectorAll('a[href^="#"]')

slider.forEach(anchor => {
   anchor.addEventListener('click', function(e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior : 'smooth'})
   })
})
console.log(slider)