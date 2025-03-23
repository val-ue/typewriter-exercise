const textBox = document.querySelector("h1");
const keySound = document.querySelector(".normal-key");
const enterSound = document.querySelector(".enter");
const backspaceSound = document.querySelector(".backspace");

textBox.innerText = "";

document.addEventListener("keydown", function (e) {
  const playSound = function (sound) {
    const soundClone = sound.cloneNode(true);
    soundClone.play();
  };

  const span = document.createElement("span");

  span.classList.add("animation");

  if (e.key === " ") {
    span.innerText += "-";
    playSound(keySound);
  } else if (e.key === "Backspace") {
    textBox.innerText = textBox.innerText.slice(0, -1);
    playSound(backspaceSound);
  } else if (e.key === "Enter") {
    playSound(enterSound);
  } else {
    span.innerText = e.key;

    playSound(keySound);
  }

  textBox.appendChild(span);
});
