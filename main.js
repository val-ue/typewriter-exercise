const textBox = document.querySelector('h1');
const keySound = document.querySelector('.normal-key');
const enterSound = document.querySelector('.enter');
const backspaceSound = document.querySelector('.backspace');

textBox.innerText = '';

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    keySound.pause();

    const span = document.createElement('span');

    span.classList.add('animation');


    if (e.key === ' ') {
        span.innerText += '-';  
        keySound.play();
    } else if (e.key === 'Backspace') {
        textBox.innerText = textBox.innerText.slice(0,-1);
        backspaceSound.play();
    } else if (e.key === 'Enter') {
        enterSound.play();
    } else {
        span.innerText = e.key;
        keySound.play();
        if (!keySound.paused) {
            keySound.currentTime = 0;
            keySound.play();
        } else {
            keySound.play();  
        }
    }

    textBox.appendChild(span);

});

