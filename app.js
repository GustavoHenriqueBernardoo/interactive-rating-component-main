const cardUI = document.querySelector('.card')
const rating = document.querySelectorAll('.rating button')
const submitBtn = document.querySelector('.btn')

let actualRate = 0

rating.forEach(rate => {
  rate.addEventListener('click', (e) => {
    if (!e.target.classList.contains('active')) {
      removeActive()
      e.target.classList.add('active')

      actualRate = e.target.innerText
    }
  })
})

submitBtn.addEventListener('click', () => {
  cardUI.innerHTML = `
  <div class="ty-card">
    <img class="ty-image" src="./images/illustration-thank-you.svg" alt="" />
    <p class="rating">You selected out ${actualRate} of 5 </p>
    <h2 class="title">Thank You!</h2>
    <p class="text">We appreciate you taking the time to give a rating. If
    you ever need more support, don’t hesitate to get in touch!</p>
   </div> 
  `

})

function removeActive() {
  for (let i = 0; i < rating.length; i++) {
    rating[i].classList.remove('active')
  }
}