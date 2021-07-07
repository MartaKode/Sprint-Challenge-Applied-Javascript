/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function makeCarousel() {


  const carousel = document.createElement('div')
  const carouselLeftBtn = document.createElement('div')
  const carouselImg1 = document.createElement('img')
  const carouselImg2 = document.createElement('img')
  const carouselImg3 = document.createElement('img')
  const carouselImg4 = document.createElement('img')
  const carouselRightBtn = document.createElement('div')

  carousel.appendChild(carouselLeftBtn)
  carousel.appendChild(carouselImg1)
  carousel.appendChild(carouselImg2)
  carousel.appendChild(carouselImg3)
  carousel.appendChild(carouselImg4)
  carousel.appendChild(carouselRightBtn)

  carousel.classList.add('carousel')
  carouselLeftBtn.classList.add('left-button')
  carouselRightBtn.classList.add('right-button')

  carouselLeftBtn.textContent = '<'
  carouselRightBtn.textContent = '>'
  carouselImg1.src = "./assets/carousel/mountains.jpeg"
  carouselImg2.src = "./assets/carousel/computer.jpeg"
  carouselImg3.src = "./assets/carousel/trees.jpeg"
  carouselImg4.src = "./assets/carousel/turntable.jpeg"

  document.querySelector('.carousel-container').appendChild(carousel)

 // document.querySelector('.carousel-container img').style.display = 'block'

  const allCarouselImgs = document.querySelectorAll('.carousel-container img')
  const allCarouselimgsArray = Array.from(allCarouselImgs)
  const rightBtn = document.querySelector('.right-button')
  const leftBtn = document.querySelector('.left-button')

//document.querySelectorAll('.carousel-container img').forEach( element => element.style.display = 'block')



  //Left button is working!!!
  leftBtn.addEventListener('click', event => {
    for(let i=0; i<allCarouselimgsArray.length; i++){
      if(i>=allCarouselimgsArray.length){
        i--
      }else if(i<=0){
        i++
      }
      if(allCarouselimgsArray[i].style.display !== 'block' && allCarouselimgsArray[i-1].style.display !=='none'){
        allCarouselimgsArray[i].style.display = 'block'
        allCarouselimgsArray[i-1].style.display ='none'
      }else if(allCarouselimgsArray[i].style.display !== 'none' && allCarouselimgsArray[i-1].style.display !=='block'){
        allCarouselimgsArray[i].style.display = 'none'
        allCarouselimgsArray[i-1].style.display ='block'
      }
  
    }

  })

  //Right button needs work! :(
    rightBtn.addEventListener('click', event => {
      for(let i=3; i>0; i--){
        // if(i<0){
        //   i++
        // }else if(i>=allCarouselimgsArray.length){
        //   i--
        // }
        if(allCarouselimgsArray[i-1].style.display !== 'block' && allCarouselimgsArray[i].style.display !=='none'){
          allCarouselimgsArray[i-1].style.display = 'block'
          allCarouselimgsArray[i].style.display ='none'
        }else if(allCarouselimgsArray[i-1].style.display !== 'none' && allCarouselimgsArray[i].style.display !=='block'){
          allCarouselimgsArray[i-1].style.display = 'none'
          allCarouselimgsArray[i].style.display ='block'
        }
      }

     
  
    })



  //console.log(carousel)
}

makeCarousel()



// -------------🍝Spaghetti🍝Code: ---------------



  // function whenClicked(buttonClicked) {
  //   var index = 0
    

  //   if (buttonClicked === '<') {
  //     allCarouselImgsArray[index].style.display = 'none'
  //     allCarouselImgsArray[index +2].style.display = 'block'
  //     index--
  //   } else if (buttonClicked === '>') {
  //     allCarouselimsArray[index].style.display = 'none'
  //     allCarouselimsArray[index + 1].style.display = 'block'
  //     index++
  //   }
  //   if (index < 0 || index > allCarouselimsArray.length - 1) {
  //     index = 0
      
  //   }



  // }

 
  //   leftBtn.addEventListener("click", event => {
  //     whenClicked("<")
  //     //document.querySelector('.carousel-container img:nth-child(2)').style.display = 'none'
  //     //   document.querySelector('.carousel-container img:nth-child(3)').style.display = 'block'
  //   })
  //   rightBtn.addEventListener("click", event => {
  //     whenClicked(">")
  //   })

// for(let i=0; i<allCarouselImgsArray.length; i++){
//   if(i+1<allCarouselImgsArray.length){
//     allCarouselImgsArray[i].style.display = 'none'
//       allCarouselImgsArray[i+1].style.display = 'block'
//   }





  // document.querySelector('.right-button').addEventListener('mouseover', event => {
  //   document.querySelector('.carousel-container img').style.display = 'block'
  // })


    //   function init(){

  //   const images = Array.from(allCarouselImgs)

  //     const rightBtn = document.querySelector('.right-button')
  //     const leftBtn = document.querySelector('.left-button')

  //     function processClicks(action) {
  //       const arrayIndex = 0

  //       const myImg = document.getElementsByClassName('.carousel-container img')

  //       if (action == "<")
  //       arrayIndex-=1;
  //       else if (action == ">")
  //       arrayIndex++;
  //       if (arrayIndex < 0 || arrayIndex > images.length-1)
  //       arrayIndex = 0;
  //       myImg.src = images[arrayIndex];
  //       }

  //     if (leftBtn.addEventListener) {
  //       leftBtn.addEventListener("click", function () {
  //       processClicks("<")
  //       }, false);
  //       rightBtn.addEventListener("click", function () {
  //       processClicks(">")
  //       }, false);
  //       }
  //       else if (leftBtn.attachEvent) {
  //       leftBtn.attachEvent("onclick", function () {
  //       processClicks("back")
  //       });
  //       rightBtn.attachEvent("onclick", function () {
  //       processClicks(">")
  //       });
  //       }

  //   }
  // init()


  // document.querySelector('.left-button').addEventListener('click', event => {
  //   document.querySelector('.carousel-container img:nth-child(2)').style.display = 'none'
  //   document.querySelector('.carousel-container img:nth-child(3)').style.display = 'block'
  // })

  // document.querySelector('.left-button').addEventListener('click', event => {  

  // allCarouselImgsArray[i].style.display = 'none'
  //   allCarouselImgsArray[i+1].style.display = 'block'

  //   allImgs

  // })