const serialport = require('serialport')

serialport.list((err, ports) => {
    console.log('ports', ports);
    if (err) {
    }

    if (ports.length === 0) {

    }
    
    // console.log(ports)
})