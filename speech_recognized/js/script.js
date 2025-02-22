let element = document.getElementById("text");
let startBtn = document.getElementById("start-btn");
let copyBtn = document.getElementById("copy-btn");

// SpeechRecognition সেটআপ
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "en-GB"; // চাইলে "bn-BD" ব্যবহার করতে পারো
recognition.continuous = true;
recognition.interimResults = true; // লাইভ আপডেট

let isListening = false;

startBtn.onclick = () => {
    if (!isListening) {
        recognition.start();
        isListening = true;
        startBtn.innerText = "🛑 Stop Talking";
        element.innerText = "🎤 Listening...";
    } else {
        recognition.stop();
        isListening = false;
        startBtn.innerText = "🎤 Start Talking";
    }
};

recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + " ";
    }
    element.innerText = transcript.trim();
};

// Copy Button Click
copyBtn.onclick = () => {
    if (element.innerText.trim() !== "") {
        navigator.clipboard.writeText(element.innerText)
            .then(() => {
                alert("✅ Text Copied!");
            })
            .catch(err => {
                console.error("Copy Failed: ", err);
            });
    } else {
        alert("⚠️ No text to copy!");
    }
};

// Error Handling
recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    element.innerText = "⚠️ Error: " + event.error;
};