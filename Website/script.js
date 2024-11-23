var index = 0;

function changeQuote(){
    var quotes = [
        '"I really like web development!" - ',
        '"If you sit, you are sitting." - Divyansh Shukla',
        '"I looked like this when I was young, and I still do." - Yogi Barra'
    ]
    var blockquote = document.querySelector("blockquote");
    blockquote.innerHTML = quotes[index];
}