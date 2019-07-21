//OSCserver.js
//
//Creates an OSC instance that other objects can call to send OSC commands
//
//This class basically start the OSC library and provides a simple one line
//interface for sending commands
//
//Last Edited By: Shawn Poellet 7-17-2019

'use strict'

var OSC = require('osc-js');

module.exports = class OSCserver {
  constructor(inPort){
    this.osc = new OSC({ plugin: new OSC.DatagramPlugin() });
    this.listenPort = inPort;
    this.oscReady = false;
    this.osc.on('open', () => {
      this.oscReady = true;
    })

    //osc-js by default will bind the socket to localhost which blocks
    //outgoing connections to other hosts.  Setting the host to '0.0.0.0'
    //when the socket is opened will correct this issue.
    this.osc.open({host: '0.0.0.0', port : this.listenPort})
  }

  sendCommand(host, port, command, value){
    const message = new OSC.Message(command);
    if (typeof value !== 'undefined') message.add(value);
    this.osc.send(message, {host: host, port: port});
  }
}
