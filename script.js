document.getElementById('speakBtn').addEventListener('click', function () {
  // Get the text input
  const text = document.getElementById('text').value;

  // Check if the browser supports speech synthesis
  if ('speechSynthesis' in window) {
    // Create a new speech synthesis utterance
    const speech = new SpeechSynthesisUtterance(text);

    // Set voice options (optional)
    speech.lang = 'en-US'; // Set language (e.g., English US)
    speech.pitch = 1; // Voice pitch (0-2)
    speech.rate = 1; // Speed (0.1 - 10)
    speech.volume = 1; // Volume (0-1)

    // Speak the text
    window.speechSynthesis.speak(speech);
  } else {
    alert("Sorry, your browser doesn't support text to speech.");
  }
});
