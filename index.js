// Remember: You rock! 🎸

const btn4 = document.getElementById('btn4')
const btn10 = document.getElementById('btn10')
const btn16 = document.getElementById('btn16')
const btnMatch = document.getElementById('match')
const btnNo = document.getElementById('no-match')
const btnRestart = document.getElementById('restart')
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
    //Toggle buttons
    toggleButtons()    
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
        img.addEventListener('click', event => showCard(img))
        div.appendChild(img)
        gameContainer.appendChild(div)
    }) 
}

function matchedCards() {
    const cards = document.querySelectorAll('img')
    cards.forEach(card => {
        if(card.style.opacity === '1') {
            card.style.background = '#fee7b2'
            }
        })
}


function notMatchedCards() {
    document.querySelectorAll('img').forEach(card => {
        if((card.style.background === 'rgb(254, 231, 178)') || (card.style.background === 'rgb(254, 231, 178) none repeat scroll 0% 0%'))
            {card.style.opacity = '1'
        } else {
            card.style.opacity = '0'
        }
        
    })
}

/*
function notMatchedCards() {
    document.querySelectorAll('img').forEach(card => {
        if(card.style.background !== 'rgb(254, 231, 178)')
            {card.style.opacity = '0'
        }
        if (card.style.background !== 'rgb(254, 231, 178) none repeat scroll 0% 0%') {
            card.style.opacity = '0'
        }
    })
} */


function restartGame() {
    location.reload()
}

//Helper functions
function getRandomPhoto() {
    const num = Math.ceil(Math.random()*85)
    if (photos.find(el => el === num) === undefined) {
    return `https://foodish-api.herokuapp.com/images/pizza/pizza${num}.jpg`
       } else {
           console.log('else ausgelöst')
           getRandomPhoto()
       }
}


function showCard(card) {
        card.style.opacity = '1'

    
}


function toggleButtons() {
   btn4.style.display = 'none'
   btn10.style.display = 'none'
   btn16.style.display = 'none'
   btnMatch.style.display = 'flex'
   btnNo.style.display = 'flex'
   btnRestart.style.display = 'flex'
}
