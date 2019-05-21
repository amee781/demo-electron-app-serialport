const serialport = require('serialport')

var list = ''
list += '<li class="list-group-header"> <input class="form-control" type="text" placeholder="Search for someone"> </li>'
serialport.list((err, ports) => {
    // console.log('ports', ports);
    if (err) {
        document.getElementById("hardware-list").innerHTML = list;
    }

    if (ports.length === 0) {
        // document.getElementById("hardware-list").innerHTML = list;
        list += '<li  class="list-group-item"> <div class="media-body"> <strong> Serial Port Found 0</strong> </div> </li>'
    } else {
        for (i = 0; i < ports.length; i++) { 
            console.log(ports[i])
            list += '<li class="list-group-item" ><img class="img-circle media-object pull-left" src="assets/img/connect.png" width="32" height="32"> <div class="media-body"><strong>'+ports[i].manufacturer+'</strong><p>'+ports[i].comName+'</p></div> </li>';
        }
        document.getElementById("hardware-list").innerHTML = list;
    }    
})
