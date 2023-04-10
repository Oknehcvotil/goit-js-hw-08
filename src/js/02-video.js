import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

const STORAGE_VIDEO_CURRENT_TIME = 'videoplayer-current-time';

startVidoePreviosTime();

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(e) {
  localStorage.setItem(STORAGE_VIDEO_CURRENT_TIME, JSON.stringify(e));
}

function startVidoePreviosTime() {
  const savedTime = localStorage.getItem(STORAGE_VIDEO_CURRENT_TIME);
  if (savedTime) {
    const time = JSON.parse(savedTime);
    player.setCurrentTime(time.seconds);
  }
}
