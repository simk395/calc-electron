const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
      width: 800,
      height: 600,
      transparent: true,
      frame: false
    })
  
    // and load the index.html of the app.
    win.loadFile('index.html')
  }
  
  app.whenReady().then(createWindow)