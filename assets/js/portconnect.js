const serialport = require('serialport')
const Readline = serialport.parsers.Readline;

class Server {
    constructor (path,baudRate) {
      this.parser = ''
      this.path = path
      this.baudRate = baudRate || 9600
      this.connect()
    }
  
    async connect () {
  
      this.port = new SerialPort(this.path, {
        baudRate: baudRate,
        autoOpen: true
      })
    
      this.startParser()
      this.startEvents()
      this.handleErrors()
    }
  
    startParser () {
      this.parser = this.port.pipe(new Readline({ delimiter: '\n' }))
    }
  
    startEvents () {
      this.port.on('open', () => {
        console.log(`Connection with  opened.`)
      })
  
      this.parser.on('data', data => {
        // this.controller.store(data)
        console.log('Error: ', data)
      })
    }
  
    handleErrors () {
      this.port.on('error', function (err) {
        console.log('Error: ', err.message)
      })
    }
  }
  
  module.exports = Server