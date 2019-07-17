'use strict'

const CueList = require('./CueList.js');
const OSCserver = require('./OSCserver.js');

var cueList = new CueList();
var oscServer = new OSCserver();


oscServer.sendCommand('10.0.0.155', 7000, '/hello');
oscServer.sendCommand('10.0.0.155', 7000, '/hello2', true, 6);
