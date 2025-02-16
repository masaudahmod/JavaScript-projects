let quotes = [
    {
        quote: "Worship Allah as if you see Him, for if you don’t see Him, He sees you.",
        source: "Prophet Muhammad ﷺ"
    },
    {
        quote: " And whoever puts their trust in Allah, then He will suffice him.",
        source: "Quran  ",
        citation: "65:3"
    },
    {
        quote: " The best of you are those who learn the Quran and teach it.",
        source: "Prophet Muhammad ﷺ"
    },
    {
        quote: "If you are grateful, I will surely increase you [in favor].",
        source: "Quran ",
        citation: "14:7"
    },
    {
        quote: "The believer is kind and gentle, for there is no goodness in one who is neither kind nor gentle.",
        source: "Prophet Muhammad ﷺ"
    },
    {
        quote: "Worldly life is short, so turn to Allah before you return to Allah.",
        source: "Anonymous"
    },
    {
        quote: "Spread love everywhere you go.",
        source: "Prophet Muhammad ﷺ"
    },
    {
        quote: "The heart that beats for Allah is always a stranger among the hearts that beat for the Dunya (world).",
        source: "Anonymous"
    },
    {
        quote: "Those who forgive and overlook are rewarded by Allah.",
        source: "Quran ",
        citation: "42:40"
    },
    {
        quote: "Remember death often, for it is the destroyer of pleasures.",
        source: "Prophet Muhammad ﷺ"
    },
    {
        quote: "Allah tests us with what we love.",
        source: "Anonymous"
    },
    {
        quote: "Forgive people so that perhaps Allah may forgive you.",
        source: "***"
    },
    {
        quote: "Do not be divided, for verily the hearts are inclined towards unity.",
        source: "Prophet Muhammad ﷺ"
    },
    {
        quote: " Every night and everyday, never forget to say, 'Lailaha illallah'",
        source: ""
    },
    {
        quote: "Sadaqah wipes out sins like water extinguishes fire.",
        source: "Anonymous"
    },
    {
        quote: "Be patient. Indeed, the promise of Allah is truth.",
        source: "Quran ",
        citation: "30:60"
    },
    {
        quote: "The one who remembers Allah in life and at the time of death has attained the ultimate success.",
        source: "Prophet Muhammad ﷺ"
    }
];

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    let randomQuote = quotes[randomNumber];
    return randomQuote
}

function getRandomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = 'rgb(' + red + ',' + green +','+ blue +')';
    return randomColor;
}

function printQuote(){
    let quotes = getRandomQuote();
    let quoteContainer = document.getElementById("quote-box");
    let quoteString = ` <p class="quote">${quotes.quote}</p><p class="source">${quotes.source} `

    if (quotes.citation) {
        quoteString += `<span class="citation">${quotes.citation}</span>`
    }
    if (quotes.period) {
        quoteString += `<span class="period">${quotes.period}</span> `
    }
    else {
        quoteString += "</p>"
    };
    quoteContainer.innerHTML = quoteString;

    document.body.style.backgroundColor = getRandomColor ();
}

window.setInterval(function(){
    printQuote ();
}, 150000);

document.getElementById("loadQuote").addEventListener("click", printQuote, false);