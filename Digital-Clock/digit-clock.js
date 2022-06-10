

function realTime() {
   const time = new Date()
   const realHours = time.getHours()
   const realMinutes = time.getMinutes()
   const realSeconds = time.getSeconds()

   const hour = document.getElementsByClassName('hours')[0]
   const minute = document.getElementsByClassName('minutes')[0]
   const second = document.getElementsByClassName('seconds')[0]
   const session = document.getElementsByClassName('session')[0]

   if(realHours >= 12) {
      session.innerHTML = 'PM'
   } if(realHours < 12) {
      session.innerHTML = 'AM'
   } if(realHours < 12) {
      hour.innerHTML = realHours
   } if(realHours > 12) {
      hour.innerHTML = (realHours - 12)
   } if(realSeconds < 10) {
      second.innerHTML = `0${realSeconds}`
   } else {
      second.innerHTML = realSeconds
   }
   
   minute.innerHTML = realMinutes
}
realTime()
setInterval(realTime, 1000)

