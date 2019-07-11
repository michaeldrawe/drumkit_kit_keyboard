function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing')  
  }
  
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop function from running if the pressed key does not have an audio el ement attached to it
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  window.addEventListener('keydown', playSound);