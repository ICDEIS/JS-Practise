setInterval(setClock, 1000)

const hourArrow = document.querySelector('[date-hour-hand]')
const minuteArrow = document.querySelector('[date-minute-hand]')
const secondArrow = document.querySelector('[date-second-hand]')

function setClock() {
   const now = new Date()
   const realSecond = now.getSeconds() / 60
   const realMinute = (realSecond + now.getMinutes()) / 60
   const realHour = (realMinute + now.getHours()) / 12

   makeRotate(secondArrow, realSecond)
   makeRotate(minuteArrow, realMinute)
   makeRotate(hourArrow, realHour)
}

function makeRotate(element, rotationRatio) {
   element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()