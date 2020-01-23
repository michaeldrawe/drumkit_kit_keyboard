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

  function soundClap() {
    
    var path = "sounds/clap.wav";
    var snd = new Audio (path);
    snd.play();
  }

  function soundHihat() {
    
    var path = "sounds/hihat.wav";
    var snd = new Audio (path);
    snd.play();
  }

  function soundKick() {
   
    var path = "sounds/kick.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundOpenhat() {
    
    var path = "sounds/openhat.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundBoom() {
    
    var path = "sounds/boom.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundRide() {
    
    var path = "sounds/ride.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundSnare() {
    
    var path = "sounds/snare.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundTom() {
    
    var path = "sounds/tom.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundTink() {
   
    var path = "sounds/tink.wav"
    var snd = new Audio(path)
    snd.play()
  }