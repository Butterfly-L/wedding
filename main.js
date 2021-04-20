// *******************
// scroll animation
// *******************

const fixedLeft = (sec) => {
    sec.classList.add('position-fixed')
            // img.previousElementSibling.classList.add('loading')
            // img.setAttribute('src', img.dataset.src)
            // img.removeAttribute('data-src')
            // img.addEventListener('load', removeMockup)
        }
    
// const onEnterView = (entries, observer) => {
//             console.log('onEnterView')
//             if (entry.isIntersecting) {
//                 fixedLeft(entry.target)
//                 observer.unobserve(entry.target)
//             }

            // for (let entry of entries) {
            //     if (entry.isIntersecting) {
            //         loadImage(entry.target)
            //         observer.unobserve(entry.target)
            //     }
            // }
        // }

let options = {
    // rootMargin: '-100%',
    threshold: 0
}
   
// const watcher = new IntersectionObserver((entries, observer) => {
//   if (entries[0].isIntersecting) {
//     console.log("intersecting");   
//     //   entries[0].target.classList.add("position-fixed");
//     fixedLeftSec.classList.remove("position-fixed");
   
//   }
// }, options);

const fixedLeftSec = document.querySelector('#fixed-left')
const blankLeftSec = document.querySelector('#left')
const posLeftSec = document.querySelector('#left').scrollTop
const footer = document.querySelector('#footer')
const sec2 = document.querySelector('#sec-2')
// watcher.observe(footer)


document.addEventListener('scroll',()=>{
    let scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
    let posLeftSec = document.querySelector('#left').offsetTop
    if (scrollTop > posLeftSec){
        fixedLeftSec.classList.add("position-fixed");
        blankLeftSec.classList.add("blank");
    }else{
        fixedLeftSec.classList.remove("position-fixed");
        blankLeftSec.classList.remove("blank");
    }
})

// watcher.observe(posLeftSec)

        // for (let image of lazyImages) {
        //     watcher.observe(image)
        // }
    // })


// bubble maker
// https://codepen.io/jacknguyen97/pen/aboXXej?editors=0010
// const bubbleWrapper = document.querySelector('.bubble-wrapper')
// const numOfBall = 25;
// const minBallSize = 60;
// const maxBallSize = 250;
// var posX = [];
// var posY = [];

// for(let i =0; i < numOfBall; i++){
//     bubbleWrapper.insertAdjacentHTML('beforeend','<div class="bubble"></div>')

// }

// const bubble = document.getElementsByClassName('bubble')

// function getRandom(min, max){
//     return Math.floor(Math.random()*(max - min)) + min

// }

// function init(){
//     for(let i =0; i< numOfBall/2; i++){
//         let ballSize = getRandom(minBallSize, maxBallSize+1)
//         bubble[i].style.width = ballSize + 'px'
//         bubble[i].style.height = ballSize + 'px'
//         bubble[i].style.right = getRandom(0, 1500) + "px"
//         bubble[i].style.bottom = "-" + getRandom(0, 100) + "px"
//     }
// }

// function init2(){
//     for(let i =numOfBall/2; i< numOfBall; i++){
//         let ballSize = getRandom(minBallSize, maxBallSize+1)
//         bubble[i].style.width = ballSize + 'px'
//         bubble[i].style.height = ballSize + 'px'
//         bubble[i].style.left = getRandom(0, 1500) + "px"
//         bubble[i].style.bottom = "-" + getRandom(0, 100) + "px"
//     }
// }

// init()
// init2()