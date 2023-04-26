const typingElement = document.getElementById('typing');
const blinkElement = document.getElementById('blink');
const texts = ['Computer Science Graduate.', 'Software Engineer.', 'FrontEnd Developer.', 'Backend Developer.'];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typingElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 125);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.innerHTML = typingElement.innerHTML.slice(0, -1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(type, 500);
  }
}

setTimeout(type, 1000);