//CueList.js
//
//Defines the class CueList
//
//Last Edited By: Shawn Poellet 7-16-2019

'use strict'

const types = require('./types.js');
const GameCue = require('./GameCue.js');
const OSCCue = require('./OSCCue.js');

module.exports = class OSCCue {
  constructor(mediaServerInstance, oscInstance){
    this.cueArray = [];
    this.selectedCue = 0;
    this.defaultTime = 1;
    this.mediaServer = mediaServerInstance;
    this.osc = oscInstance;
  }
  selectCue(value){
    //set the selected cue to the input value
    //if value is invalid the input will be ingored
    if (value >= 0 && value < this.cueArray.length){
      this.selectedCue = value;
      return true;
    }
    return false;
  }
  fireCue(){
    //fires the selectedCue
    //after fireing the cue selectedCue is increased
  }
  fireSpecificCue(value){
    //fires the cue notated by the input value

  }
}
