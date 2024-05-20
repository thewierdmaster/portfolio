const typingElement = document.querySelector('.typing');
const phrases = ["AI & ML Engineer.", "Full Stack Developer."];
let phraseIndex = 0;
let letterIndex = 0;
let isTyping = true; // Flag to control typing state

function typeLetters() {
  if (!isTyping) return; // Skip if currently paused

  typingElement.textContent = phrases[phraseIndex].slice(0, letterIndex);
  letterIndex++;

  if (letterIndex > phrases[phraseIndex].length) {
    letterIndex = 0;
    phraseIndex = (phraseIndex + 1) % phrases.length;

    // Introduce a pause before typing the next phrase
    isTyping = false;
    setTimeout(() => {
      isTyping = true;
      typeLetters(); // Restart typing after pause
    }, 1000); // Adjust pause duration (in milliseconds)
  }
}

setInterval(typeLetters, 120); // Typing speed
typeLetters(); // Initial call to display the first phrase