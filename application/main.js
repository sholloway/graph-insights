const { app, BrowserWindow } = require('electron');

function createWindow () {
	// Create the browser window.
	let win = new BrowserWindow({
		show: false,
		webPreferences: {
			nodeIntegration: true
		}
	});
	win.maximize();
	win.show();
	//open the dev tools
	win.webContents.openDevTools();


	// and load the index.html of the app.
	win.loadURL(`file://${__dirname}/public/index.html`);
}

app.on('ready', createWindow);
