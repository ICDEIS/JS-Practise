window.addEventListener('DOMContentLoaded', () => {
   class Card {
      constructor(src,alt,title,desc,amount,parSelector,...classes) {
         this.src = src
         this.alt = alt
         this.title = title
         this.desc = desc
         this.amount = amount
         this.classes = classes
         this.parent = document.querySelector(parSelector)
         this.exchange = 11250
         this.exchangeUSD()
      }
      exchangeUSD() {
         this.amount = this.amount / this.exchange
      }
      render() {
         const element = document.createElement('div')
         element.classList.add('card')

         // if(this.classes === 0) {
         //    this.classes = 'card'
         //    element.classList.add(this.classes)
         // } else {
         //    this.classes.forEach(className => element.classList.add(className))
         // }

         element.innerHTML = `
            <div class="card-img">
               <img src="${this.src}" alt="${this.alt}"> </div>
            <div class="card-body">
               <h4 class="card-title">${this.title}</h4>
               <div class="desc">${this.desc}</div>
               <hr>
               <div class="card-price">Price: $
                  <span class="card-price-amount">${this.amount}</span> </div>
         `
         this.parent.append(element)
      }
   }

   new Card (
      './ePhotos/Wallpapers/IMG_2682.JPG',
      'img1',
      'iPhone',
      `iPhone 13 Pro has a dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life.`,
      '11250000',
      '.eblock .cards'
   ).render()

   new Card (
      './ePhotos/Wallpapers/IMG_2692.JPG',
      'img2',
      'iPad',
      `Easy to use. Uniquely iPad. iPadOS builds on the same powerful foundation as iOS, while offering distinct experiences designed for the capabilities of iPad. Multitask effortlessly with touch or navigate the system with a trackpad. And now you can do even more, like copy and paste handwritten notes as text and write in any text field with Scribble.`,
      '11250000',
      '.eblock .cards'
   ).render()

   new Card (
      './ePhotos/Wallpapers/IMG_2688.JPG',
      'img3',
      'AirPods',
      `You heard it here first. HD voice quality for FaceTime. Connect on FaceTime in crisp, HD quality with a new AAC-ELD speech codec. And with support for spatial audio, Group FaceTime calls sound more true to life than ever.`,
      '11250000',
      '.eblock .cards'
   ).render()
})