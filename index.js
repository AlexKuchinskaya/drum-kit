const keys = document.querySelectorAll(".key");

const removeTransition = (evt, key) => {
    evt.preventDefault();
    if (evt.propertyName !== 'transform') {
        return
    }
    key.classList.remove('playing')
};

const playSound = (evt) => {
    evt.preventDefault();
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', (evt) => {
    playSound(evt)
})

keys.forEach((key) => {
    key.addEventListener('transitionend', (evt) => removeTransition(evt, key));
})