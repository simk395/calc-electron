const { app, BrowserWindow } = require('electron')
const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, '/node_modules/.bin/electron')
});

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
      width: 800,
      height: 600,
      minHeight: 480,
      minWidth: 320,
      webPreferences:{
        devTools: false
      }
    })
  
    // and load the index.html of the app.
    win.loadFile('public/index.html')

    //hide menu bar
    win.setMenu(null)
  }
  
  app.whenReady().then(createWindow)