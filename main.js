const electron = require('electron');
const url = require('url');
const path = require('path');


const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


var mainWindow;


app.on('ready', function () {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 1024,
    // Set the initial height to 500px
        height: 600,
        // titleBarStyle: 'hiddenInset',
        // Don't show the window until it ready, this prevents any white flickering
        // show: false,
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // mainWindow.webContents.openDevTools()
});