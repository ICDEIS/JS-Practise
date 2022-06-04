
'use strict'

window.addEventListener('DOMContentLoaded', () => {
   let item1 = document.getElementsByClassName('item1')[0]
   let item2 = document.getElementsByClassName('item2')[0]
   let item3 = document.getElementsByClassName('item3')[0]
   let item4 = document.getElementsByClassName('item4')[0]
   let item5 = document.getElementsByClassName('item5')[0]
   let item6 = document.getElementsByClassName('item6')[0]
   let btns = document.querySelectorAll('button'),
       items= document.getElementsByClassName('item')
   let modal1 = document.getElementById('modal1')
   let cartBn = document.getElementsByClassName('cartbtn')[0]
   let btnCart = document.getElementsByClassName('btn-cart')[0]
   console.log(cartBn)


   cartBn.addEventListener('click', () => {
      modal1.style.display = 'block'
   })
   function newElement() {
      let cart = document.createElement('div'),
          field = document.createElement('div'),
          h2 = document.createElement('h2'),
          closeBtn = document.createElement('button')

      cart.classList.add('cart')
      field.classList.add('cart-field')
      closeBtn.classList.add('close')

      h2.textContent = 'Selected Products'
      closeBtn.textContent = 'Close'

      document.body.appendChild(cart)
      cart.appendChild(h2)
      cart.appendChild(field)
      cart.appendChild(closeBtn)
   }
   newElement()
   
   let cart = document.getElementsByClassName('cart')[0]
   let fileld = document.getElementsByClassName('cart-field')[0]
   let closeBtn = document.querySelector('.close')
   btnCart.addEventListener('click', () => {
      cart.style.display = 'block'
   })
   closeBtn.addEventListener('click', () => {
      cart.style.display = 'none'
   })
   btns.forEach(function(item, k) {
      item.addEventListener('click', () => {
         let copied = items[k].cloneNode(true)
         let btn = copied.querySelector('button')
         btn.remove()
         fileld.appendChild(copied)
         items[k].remove()
      })
   })
   console.log(items)
})





