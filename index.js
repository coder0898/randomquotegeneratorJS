//refernce

const quoteInput = document.getElementById('quoteInput');
const authorInput = document.getElementById('authorInput');

const newQuoteBtn = document.getElementById('newQuoteBtn');
const textToSound = document.getElementById('textToSound'); 

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