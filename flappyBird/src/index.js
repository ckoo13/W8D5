import FlappyBird from './game';
import Bird from './bird';

const Game = require('./game.js')

const canvas = document.getElementById('bird-game');
new FlappyBird(canvas).play();