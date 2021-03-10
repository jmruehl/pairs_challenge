// Remember: You rock! 🎸
//Data from DOM
const header = document.getElementsByTagName('header')
const h1 = document.getElementsByTagName('h1')
const btn4 = document.getElementById('btn4')
const btn10 = document.getElementById('btn10')
const btn16 = document.getElementById('btn16')
const btnMatch = document.getElementById('match')
const btnNo = document.getElementById('no-match')
const btnRestart = document.getElementById('restart')
const btnWrapper = document.getElementsByClassName('btn-wrapper')
const gameContainer = document.getElementById('game')

const photos = [] //Array with url of photos
let cards = [] // Array with each photo twice at random positioning


//Add event listener to buttons and create game 
btn4.addEventListener('click', event => createGame(4))
btn10.addEventListener('click', event => createGame(10))
btn16.addEventListener('click', event => createGame(16))
btnMatch.addEventListener('click', event => matchedCards())
btnNo.addEventListener('click', event => notMatchedCards())
btnRestart.addEventListener('click', event => restartGame())


function createGame(num) {
    //Display game view
    displayGame()    
    // Get random photos from Foodish    
    for (let i = 0; i < num; i++){
        photos.push(getRandomPhoto())
        }
    //Transfer photos from array photo to random position in array cards
    photos.forEach(photo => {
        //Add photo once at the end
        cards.push({'url': photo})
        //Add photo at random position
        let position = Math.ceil(Math.random()*cards.length)
        cards.splice(position, 0, {'url': photo})
        })
    //Create and render cards 
    cards.forEach(card => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        div.className = 'card-background'
        img.src = card.url
        img.className = 'card-image'
        img.addEventListener('click', event => showCard(img))
        div.appendChild(img)
        gameContainer.appendChild(div)
    }) 
}

function matchedCards() {
    const cards = document.querySelectorAll('img')
    cards.forEach(card => {
        if(card.style.opacity === '1') {
            card.style.background = 'whitesmoke'
            }
        })
}


function notMatchedCards() {
    document.querySelectorAll('img').forEach(card => {
        console.log(card.style.background)
        if((card.style.background === 'whitesmoke') || (card.style.background === 'whitesmoke none repeat scroll 0% 0%'))
            {card.style.opacity = '1'
        } else {
            card.style.opacity = '0'
        }
        
    })
}


function restartGame() {
    location.reload()
}

//Helper functions
function getRandomPhoto() {
    const num = Math.ceil(Math.random()*85)
    if (photos.find(el => el === num) === undefined) {
    return `https://foodish-api.herokuapp.com/images/pizza/pizza${num}.jpg`
       } /*else {
           console.log('else ausgelöst')
           getRandomPhoto()
       }*/
}


function showCard(card) {
        card.style.opacity = '1'
}


function displayGame() {
    header[0].className = 'header-game'
    h1[0].className = 'h1-game'
    btn4.style.display = 'none'
    btn10.style.display = 'none'
    btn16.style.display = 'none'
    btnWrapper[0].className = 'btn-wrapper btn-wrapper-game'
    btnMatch.style.display = 'block'
    btnNo.style.display = 'block'
    btnRestart.style.display = 'block'
}