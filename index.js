//refernce

const quoteInput = document.getElementById('quoteInput');
const authorInput = document.getElementById('authorInput');

const newQuoteBtn = document.getElementById('newQuoteBtn');
const textToSound = document.getElementById('textToSound'); 
const copyQuote = document.getElementById('copyQuote');

// event Handler

const api_url = 'https://api.quotable.io/random';

const QuoteGeneration = async(api)=>{
    const res = await fetch(api);
    
    const data = await res.json();

    quoteInput.innerText = data.content;
    authorInput.innerText = data.author;
}  


QuoteGeneration(api_url);

// Event Listener

newQuoteBtn.addEventListener('click',()=>{
    QuoteGeneration(api_url);
})


textToSound.addEventListener('click', ()=>{

        // the SpeechSynthesisUtterance is a web speech api that reperesent a speech request
        let utternce = new SpeechSynthesisUtterance(`${quoteInput.innerText} by ${authorInput.innerText}`);
    
        speechSynthesis.speak(utternce); //speak method of SpeechSynthesis speaks the utternce.
})

// to copy quote
copyQuote.addEventListener('click',()=>{
    // writeText() property writes the sepcified text string to clipboard. 
    navigator.clipboard.writeText(quoteInput.innerText);
    alert('Quote is copied');
});