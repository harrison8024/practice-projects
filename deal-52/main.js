$(document).ready(initializeApp);

var originalPokerDeck = [];
function initializeApp(){
    createCard();
}

/***********************************************************************************************************************
 * Harrison
 */
// var cards = {
//     suit: heart,
//     rank: number,
//     img: url
//
// };
function createCard(){
    var suitArray = ["heart", "club", "daimond", "spade"];
    for(suitIndex = 0; suitIndex < suitArray.length; suitIndex++){
        for(cardIndex = 1; cardIndex < 14; cardIndex++){
            var newCard = $("<div>", {
                "class" : "cards",
                "suit" : suitArray[suitIndex],
                "rank" : cardIndex,
                "img" : "url"
            });
            originalPokerDeck.push(newCard);
            $(".gameArea").append(newCard);
            newCard.text(suitArray[suitIndex] + cardIndex);

        }
    }
}









/***********************************************************************************************************************
 * Daniel
 */








/***********************************************************************************************************************
 * Omer
 */








/***********************************************************************************************************************
 * Hanh
 */








/***********************************************************************************************************************
 * Dona
 */








