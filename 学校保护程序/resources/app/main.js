const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const globalShortcut = electron.globalShortcut



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1080, height: 1920,frame:false,alwaysOnTop :false,backgroundColor:'#d3e8a9',resizable:false,movable:false,fullscreen:true})

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    // 调试工具
    //mainWindow.webContents.openDevTools()

    win_event(mainWindow);
   
    globalShortcut.register('ESC', () => {
       
	   mainWindow.close();
	   
    })
   
   
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}


function win_event(win){
    win.webContents.on( 'new-window', function (event,url,fname,disposition,options) {
        //console.log("新开窗口");
        let childWindow;
        childWindow = new BrowserWindow({
            height:800,
            width:1200,
            webPreferences: {nodeIntegration: false}
        });
        win_event(childWindow);
        childWindow.loadURL(url);
        event.preventDefault();
    });
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})




// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
