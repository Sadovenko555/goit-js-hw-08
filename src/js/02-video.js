import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const STORAGE_PLAYER_CURRENT_TIME = 'videoplayer-current-time';

setPlayerTime();

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(data) {
    localStorage.setItem(STORAGE_PLAYER_CURRENT_TIME, JSON.stringify(data));
}

function setPlayerTime() {
    const savedTime = localStorage.getItem(STORAGE_PLAYER_CURRENT_TIME);
    if (savedTime) {
        const time = JSON.parse(savedTime);
        player.setCurrentTime(time.seconds);
    }
}