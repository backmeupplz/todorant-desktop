import { app, BrowserWindow, session, shell } from 'electron'
import path from 'path'

let win: BrowserWindow | null

// Scheme must be registered before the app is ready

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: process.platform === 'darwin',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: false,
      nativeWindowOpen: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  win.setMenuBarVisibility(false)
  win.loadURL('https://todorant.com')

  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  //Without this header changing app will not work
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = 'Chrome'
    callback({ cancel: false, requestHeaders: details.requestHeaders })
  })
  createWindow()
})

app.on('web-contents-created', (e, contents) => {
  const urls = [
    'todorant.com',
    'auth.todorant.com',
    'accounts.google.com',
    'appleid.apple.com',
    'oauth.telegram.org',
    'www.facebook.com',
  ]
  contents.on('will-navigate', (e, url) => {
    const splittedUrl = url.split('/')[2]
    if (!urls.includes(splittedUrl)) {
      e.preventDefault()
      require('open')(url)
    }
  })
})
