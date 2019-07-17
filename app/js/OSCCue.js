//OSCCue.js
//
//Defines the class OSCCue
//
//Last Edited By: Shawn Poellet 7-16-2019

'use strict'

const types = require('./types.js');

module.exports = class OSCCue {
  constructor(){
    this.type = types.CueType.OSC;
    this.command = "";
    this.useVale = false;
    this.value = 0;
  }
}
