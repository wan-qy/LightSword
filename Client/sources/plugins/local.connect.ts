//-----------------------------------
// Copyright(c) 2015 猫王子
//-----------------------------------

'use strict'

import { ISocks5, INegotiationOptions, IStreamTransportOptions, ICommandOptions } from '../socks5/plugin';

class LocalConnect implements ISocks5 {
  
  negotiate(options: INegotiationOptions, callback: (result: boolean, reason?: string) => void) {
    process.nextTick(() => callback(true));
  }
  
  sendCommand(options: ICommandOptions, callback: (result: boolean, reason?: string) => void) {
    process.nextTick(() => callback(true));
  }
  
  transport(options: IStreamTransportOptions) {
    let proxySocket = options.proxySocket;
    let clientSocket = options.clientSocket;
    
    proxySocket.pipe(clientSocket);
    clientSocket.pipe(proxySocket);
  }
  
}

module.exports = LocalConnect;