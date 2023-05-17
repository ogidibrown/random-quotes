const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");


//random quote function
function randomQuote(){
    quoteBtn.classList.add('loading')
    quoteBtn.innerText = "loading Quote..."
//fetching random quotes/data from a fake API and parsing it into javaScript Object
    fetch("https://api.quotable.io/random").then(res =>res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove('loading');

    });

}

quoteBtn.addEventListener("click", randomQuote);


soundBtn.addEventListener("click", ()=>{
    // the SpeechSynthesisUtterance is a web speech api that represents a speech request
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        speechSynthesis.speak(utterance); //speak method of speechSynthesis speaks the utterance
 });
    
copyBtn.addEventListener("click", ()=>{
        //copying the quote text on copyBtn click
        //writeText() property writes the specific text string to the system clipboard
       navigator.clipboard.writeText(quoteText.innerText)
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank")
});