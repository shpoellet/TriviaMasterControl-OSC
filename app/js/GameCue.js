//GameCue.js
//
//Defines the class GameCue
//
//Last Edited By: Shawn Poellet 7-16-2019

'use strict'

const types = require('./types.js');

module.exports = class GameCue {
  constructor(){
    this.type = types.CueType.GAME;
    this.paramater = types.GameParamater.INTRO;
    this.round = 0;
    this.index = 1;
    this.time = -1;
  }
}
