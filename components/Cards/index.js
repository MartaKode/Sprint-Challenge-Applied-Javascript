// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    //debugger
const javascript = response.data.articles.javascript
const bootstrap = response.data.articles.bootstrap
const technology = response.data.articles.technology
const jquery = response.data.articles.jquery
const node = response.data.articles.node

const topicsArray = [javascript, bootstrap, technology, jquery, node]


function plopArticle( topic ){
    topic.forEach(element => {
        //debugger
        const card = document.createElement('div')
        const cardHeadline = document.createElement('div')
        const cardAuthor = document.createElement('div')
        const cardImgContainer = document.createElement('div')
        const cardImg = document.createElement('img')
        const cardSignature = document.createElement('span')
    
        card.appendChild(cardHeadline)
        card.appendChild(cardAuthor)
        cardAuthor.appendChild(cardImgContainer)
        cardImgContainer.appendChild(cardImg)
        cardAuthor.appendChild(cardSignature)
    
        card.classList.add('card')
        cardHeadline.classList.add('headline')
        cardAuthor.classList.add('author')
        cardImgContainer.classList.add('img-container')
    
        cardHeadline.textContent = element.headline
        cardImg.src = element.authorPhoto
        cardSignature.textContent = element.authorName
    
        document.querySelector('.cards-container').appendChild(card)
    })
        
}

//plopArticle(javascript)
topicsArray.forEach( item => {
    plopArticle(item)
})

//console.log(javascript)
})
.catch( error => {
    console.log('Failing')
})
.finally( () => {
    console.log('Done')
})



// -------------🍝Spaghetti🍝Code: ---------------

// javascript.forEach(element => {
//     //debugger
//     const card = document.createElement('div')
//     const cardHeadline = document.createElement('div')
//     const cardAuthor = document.createElement('div')
//     const cardImgContainer = document.createElement('div')
//     const cardImg = document.createElement('img')
//     const cardSignature = document.createElement('span')

//     card.appendChild(cardHeadline)
//     card.appendChild(cardAuthor)
//     cardAuthor.appendChild(cardImgContainer)
//     cardImgContainer.appendChild(cardImg)
//     cardAuthor.appendChild(cardSignature)

//     card.classList.add('card')
//     cardHeadline.classList.add('headline')
//     cardAuthor.classList.add('author')
//     cardImgContainer.classList.add('img-container')

//     cardHeadline.textContent = element.headline
//     cardImg.src = element.authorPhoto
//     cardSignature.textContent = element.authorName

//     document.querySelector('.cards-container').appendChild(card)

   

// })