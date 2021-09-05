// Get all keys
const keys = document.querySelectorAll(".key");

const playNote = event => {
  let audioKeyCode = getKeyCode(event);
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
  // If key not exists in dataset keys
  const cantFoundAnyKey = !key;
  
  if (cantFoundAnyKey) {
    return;
  }

  addPlayingClass(key);
  playAudio(audioKeyCode);
};

const getKeyCode = event => {
  const isKeyboard = event.type === "keydown";
  // is a keyboard or mouse
  return isKeyboard ? event.keyCode : event.target.dataset.key;
};

const playAudio = audioKeyCode => {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`); 
  audio.currentTime = 0;
  audio.play();
};

const addPlayingClass = key => key.classList.add("playing");

const removePlayingClass = event => event.target.classList.remove("playing");

const registerEvents = () => {
  // Mouse click
  keys.forEach(key => {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass);
  });
  // Keyboard typing
  addEventListener("keydown", playNote);
}

// When windows loads
addEventListener("load", registerEvents);