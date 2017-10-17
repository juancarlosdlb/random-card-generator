var cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//var clubs = document.createElement("club");
//clubs.src = "http://delawhite.co/test/club.png";

//var spades = document.createElement("spade");
//spades.src = "http://delawhite.co/test/spade.png";

//var hearts = document.createElement("heart");
//hearts.src = "http://delawhite.co/test/heart.png";

//var diamonds = document.createElement("diamond");
//diamonds.src = "http://delawhite.co/test/diamond.png";

//var suit = ["clubs", "spades", "hearts", "diamonds"];

var suit =["http://delawhite.co/test/club.png", "http://delawhite.co/test/spade.png", "http://delawhite.co/test/heart.png", "http://delawhite.co/test/diamond.png"];

function randomCardValue () {
    var randomCardNumber = Math.floor ( Math.random () *cardNumber.length);
    var randomSuit = Math.floor ( Math.random () *suit.length);
    document.getElementById("finalRandomCard").innerHTML = cardNumber[randomCardNumber];
    document.getElementById("finalRandomSuit").src = suit[randomSuit];
    document.getElementById("finalRandomSuit2").src = suit[randomSuit];
}