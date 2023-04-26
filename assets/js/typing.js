const typingElement1 = document.getElementById('typing');
const blinkElement1 = document.getElementById('blink');
const texts1 = ['Bachelor of Computer Science.', 'Software Engineer.', 'FrontEnd Developer.', 'Backend Developer.'];
let textIndex1 = 0;
let charIndex1 = 0;

function type1() {
  if (charIndex1 < texts1[textIndex1].length) {
    typingElement1.innerHTML += texts1[textIndex1].charAt(charIndex1);
    charIndex1++;
    setTimeout(type1, 125);
  } else {
    setTimeout(erase1, 1000);
  }
}

function erase1() {
  if (charIndex1 > 0) {
    typingElement1.innerHTML = typingElement1.innerHTML.slice(0, -1);
    charIndex1--;
    setTimeout(erase1, 50);
  } else {
    textIndex1++;
    if (textIndex1 >= texts1.length) {
      textIndex1 = 0;
    }
    setTimeout(type1, 500);
  }
}

setTimeout(type1, 1000);

const typingElement2 = document.getElementById("typing-title");
const blinkElement2 = document.getElementById("blink-title");
const texts2 = ["Projects", "Repo-"];
let textIndex2 = 0;
let charIndex2 = 0;

function type2() {
  if (charIndex2 < texts2[textIndex2].length) {
    typingElement2.innerHTML += texts2[textIndex2].charAt(charIndex2);
    charIndex2++;
    setTimeout(type2, 125);
  } else {
    setTimeout(erase2, 10000);
  }
}

function erase2() {
  if (charIndex2 > 0) {
    typingElement2.innerHTML = typingElement2.innerHTML.slice(0, -1);
    charIndex2--;
    setTimeout(erase2, 50);
  } else {
    textIndex2++;
    if (textIndex2 >= texts2.length) {
      textIndex2 = 0;
    }
    setTimeout(type2, 500);
  }
}

setTimeout(type2, 1000);