var electron = require("electron")
var path = require("path")
var url = require("url")
const { ipcMain } = require("electron")

import { remote } from "electron";

let win;
function createWindow() {
    win = new electron.BrowserWindow({
        width: 700,
        height: 500,
        titleBarStyle: "default"
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, "Index.html"),
        protocol: "file:",
        slashes: true
    }));
    win.on("closed", () => {
        win = null;
    });
}

electron.app.on("ready", createWindow);

electron.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron.app.quit();
    }
});

electron.app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});

ipcMain.on("cancel", () => {
    electron.app.exit(0);
});