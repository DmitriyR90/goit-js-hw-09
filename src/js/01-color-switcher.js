const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartChangeColor);
refs.stopBtn.addEventListener('click', onStopChangeColor);
refs.stopBtn.setAttribute('disabled', 'true');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartChangeColor() {
  refs.startBtn.setAttribute('disabled', 'true');

  intervalId = setInterval(() => {
    const backgroundColorValue = getRandomHexColor();
    document.body.style.backgroundColor = backgroundColorValue;
  }, 1000);

  refs.stopBtn.removeAttribute('disabled');
}

function onStopChangeColor() {
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'true');
  refs.stopBtn.setAttribute('disabled', 'true');
  clearInterval(intervalId);
}
