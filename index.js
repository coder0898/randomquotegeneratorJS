//refernce

const quoteInput = document.getElementById('quoteInput');
const authorInput = document.getElementById('authorInput');

const newQuoteBtn = document.getElementById('newQuoteBtn');
const textToSound = document.getElementById('textToSound');
const copyQuote = document.getElementById('copyQuote');

const notificationHandle = document.querySelector('.notification');

// event Handler

const api_url = 'https://api.quotable.io/random';

const QuoteGeneration = async (api) => {
    const res = await fetch(api);

    const data = await res.json();

    quoteInput.innerText = data.content;
    authorInput.innerText = data.author;
}


QuoteGeneration(api_url);

// Event Listener

newQuoteBtn.addEventListener('click', () => {
    QuoteGeneration(api_url);
})


textToSound.addEventListener('click', () => {

    // the SpeechSynthesisUtterance is a web speech api that reperesent a speech request
    let utternce = new SpeechSynthesisUtterance(`${quoteInput.innerText} by ${authorInput.innerText}`);

    speechSynthesis.speak(utternce); //speak method of SpeechSynthesis speaks the utternce.
})

// to copy quote

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast) clearTimeout(toast); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

copyQuote.addEventListener('click', () => {
    // writeText() property writes the sepcified text string to clipboard. 
    navigator.clipboard.writeText(quoteInput.innerText);
    const li = document.createElement('li');
    li.className = 'toast';

    li.innerHTML = `
    <div class="column">
    <i class="fa-solid fa-circle-check"></i>
    <span>Quote is successfully copied.</span> 
    </div>`;
 
    notificationHandle.appendChild(li);
 
    li = setTimeout(() => removeToast(li), 5000);
});