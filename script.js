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
    console.log("function soundClap has been called");
    var path = "sounds/clap.wav";
    var snd = new Audio (path);
    snd.play();
  }

  function soundHihat() {
    console.log("function soundHihat has been called");
    var path = "sounds/hihat.wav";
    var snd = new Audio (path);
    snd.play();
  }

  function soundKick() {
    console.log("function soundKick has been called")
    var path = "sounds/kick.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundOpenhat() {
    console.log("function soundOpenhat has been called")
    var path = "sounds/openhat.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundBoom() {
    console.log("function soundBoom has been called")
    var path = "sounds/boom.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundRide() {
    console.log("function soundRide has been called")
    var path = "sounds/ride.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundSnare() {
    console.log("function soundSnare has been called")
    var path = "sounds/snare.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundTom() {
    console.log("function soundTom has been called")
    var path = "sounds/tom.wav"
    var snd = new Audio(path)
    snd.play()
  }

  function soundTink() {
    console.log("function soundTink has been called")
    var path = "sounds/tink.wav"
    var snd = new Audio(path)
    snd.play()
  }