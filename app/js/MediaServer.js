//MediaServer.js
//
//Library used to conrol a Resolume Media Server for the purposes
//of a trivia event.  This library will generate the osc commands
//needed to control the media server
//
//This library requires the input of a OSCserver instance
//
//Last Edited By: Shawn Poellet 7-21-2019

'use strict'

module.exports = class MediaServer {
  constructor(inOSC){
    this.ipAddress = '127.0.0.1';
    this.port = 3000;
    this.oscInstance = inOSC;

    //show paramaters
    this.layers = {
      question: 1,
      answer: 2,
      info: 3,
      timer: 4,
      scores: 5,
      scoresOverlay: 6
    }

    this.timerClip = 1;
    this.transitionTime = 1000; //in ms
  }

  showSlide(layer, index){
    var oscMessage = "/composition/layers/" +layer+ '/clip/' +index+ '/connect'
    this.oscInstance.sendCommand(this.ipAddress, this.port, this.oscMessage, 1)
  }

  setTime(layer, time){

  }

  setSlideTimes(time){
    setTime(this.layers.question, time);
    setTime(this.layers.answer, time);
    setTime(this.layers.info, time);
  }

  stopLayer(layer){

  }

  displayInfo(index, time){
    if (typeof time !== 'undefined') setSlideTimes(time);
    else setSlideTimes(this.transitionTime);
    showSlide(this.layers.info, index);
    stopLayer(this.layers.question);
    stopLayer(this.layers.answer);
  }

  displayQuestion(index, time){
    if (typeof time !== 'undefined') setSlideTimes(time);
    else setSlideTimes(this.transitionTime);
    showSlide(this.layers.question, index);
    stopLayer(this.layers.info);
    stopLayer(this.layers.answer);
  }

  displayAnswer(index, time){
    if (typeof time !== 'undefined') setSlideTimes(time);
    else setSlideTimes(this.transitionTime);
    showSlide(this.layers.answer, index);
    stopLayer(this.layers.info);
    stopLayer(this.layers.question);
  }

  clearSlideOutput(){
    stopLayer(this.layers.question);
    stopLayer(this.layers.answer);
    stopLayer(this.layers.info);
  }

  clearOutput(){

  }

  displayScoreTitleCard(){

  }

  updateScore(){

  }

}
