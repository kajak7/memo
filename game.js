const cardsColor =["red", "red", "green", "green", "blue","blue",
 "brown", "brown","yellow", "yellow", "gray", "gray", 
 "cadetblue", "cadetblue", "violet", "violet", 
 "lightgreen", "lightgreen"];

 /* zmienna, ktora bedziemy zmienac */
 let cards = document.querySelectorAll("div");
 cards = [...cards] /* zamiana na tablice, 18 divow*/



 /*kliknieta karta */
 let activeCard = "";
/* tablica aktywnych kart */
 const activeCards = [];

 const gamePairs = cards.length/2;
 let gameResult = 0;

 const startTime = new Date().getTime();

 const clickCard = function(){

    activeCard= this;
    /*kliknieta karta nie zostaje usuneta */ 
    activeCard.classList.remove("hidden");

    //czy to 1 klikniecie?
    if(activeCards.length===0){
        activeCards[0] =activeCard;
    return;
    }
    //czy to jest 2 klikniecie?
    //jesli tak to nastepne klikniecie jest zablokowane
    else{
        cards.forEach(card =>{
            card.removeEventListener("click",clickCard)
            activeCards[1] = activeCard;
            setTimeout(function() {
            if(activeCards[0].className === activeCards[1].className){
                activeCards.forEach(card =>card.classList.add("off"))
                gameResult++;
                if(gameResult == gamePairs){
                    console.log("wygrana gra")
                }
            }
            else{
                activeCards.forEach(card =>card.classList.add("hidden"))
            }

            activeCard = "";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click", clickCard))
        }, 2000)
        })
    }

 }

 //losowanie
 const init = function (){
     cards.forEach  (card => {
        const position = Math.floor(Math.random()*cardsColor.length);
        card.classList.add(cardsColor[position]);
        /* usuwam pozycje */
        cardsColor.splice(position, 1);
     })

     setTimeout(function(){
         cards.forEach(card =>{
             card.classList.add("hidden")
             card.addEventListener("click", clickCard)
         })
     }, 2000);
 }

 init()