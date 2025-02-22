let element = document.getElementById("text");

// SpeechRecognition সেটআপ
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "en-GB"; // বাংলা চাইলে: "bn-BD"
recognition.continuous = true;
recognition.interimResults = true; // টেক্সট লাইভ আপডেট হবে

let isListening = false; // ট্র্যাক করতে ক্লিক করলে স্টার্ট বা স্টপ হবে

document.onclick = () => {
    if (!isListening) {
        recognition.start();
        isListening = true;
        element.innerText = "🎤 Listening...";
    } else {
        recognition.stop();
        isListening = false;
        element.innerText += " (Stopped)";
    }
};

// স্পিচ রেজাল্ট শোনার জন্য
recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + " ";
    }
    element.innerText = transcript.trim(); // লাইভ টেক্সট আপডেট
};

// Error হ্যান্ডলিং
recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    element.innerText = "⚠️ Error: " + event.error;
};
