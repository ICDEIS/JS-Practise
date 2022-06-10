

function realTime() {
   const time = new Date()
   const realHours = time.getHours()
   const realMinutes = time.getMinutes()
   const realSeconds = time.getSeconds()

   const realWeek = time.getDay()
   const realMonth = time.getMonth()
   const realDay = time.getDate()
   const realYear = time.getFullYear()

   const hour = document.getElementsByClassName('hours')[0]
   const minute = document.getElementsByClassName('minutes')[0]
   const second = document.getElementsByClassName('seconds')[0]
   const session = document.getElementsByClassName('session')[0]

   const week = document.getElementsByClassName('week')[0]
   const month = document.getElementsByClassName('month')[0]
   const day = document.getElementsByClassName('day')[0]
   const year = document.getElementsByClassName('year')[0]

   
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
   
   weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
   if(realWeek == 0)
   week.innerHTML = weekDay[0]
   if(realWeek == 1)
   week.innerHTML = weekDay[1]
   if(realWeek == 2)
   week.innerHTML = weekDay[2]
   if(realWeek == 3)
   week.innerHTML = weekDay[3]
   if(realWeek == 4)
   week.innerHTML = weekDay[4]
   if(realWeek == 5)
   week.innerHTML = weekDay[5]
   if(realWeek == 6)
   week.innerHTML = weekDay[6]
   
   if(realDay < 10) {
      day.innerHTML = `0${realDay}`
   } else {
      day.innerHTML = realDay
   }
   
   months = ['January','February','March','April','May','June','July','August','September','Octobe','November','December']
   if(realMonth == 0)
      month.innerHTML = months[0]
   if(realMonth == 1)
      month.innerHTML = months[1]
   if(realMonth == 2)
      month.innerHTML = months[2]
   if(realMonth == 3)
      month.innerHTML = months[3]
   if(realMonth == 4)
      month.innerHTML = months[4]
   if(realMonth == 5)
      month.innerHTML = months[5]
   if(realMonth == 6)
      month.innerHTML = months[6]
   if(realMonth == 7)
      month.innerHTML = months[7]
   if(realMonth == 8)
      month.innerHTML = months[8]
   if(realMonth == 9)
      month.innerHTML = months[9]
   if(realMonth == 10)
      month.innerHTML = months[10]
   if(realMonth == 11)
      month.innerHTML = months[11]

   year.innerHTML = realYear

}
realTime()
setInterval(realTime, 1000)
