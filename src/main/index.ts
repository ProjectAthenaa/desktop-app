import {ipcMain, remote} from 'electron';


ipcMain.on("frame-handler", async (e, type: "maximize" | "minimize" | "close", index = null) => {
  console.log(remote);

  const currentWindow = await remote.getCurrentWindow();

  switch (type) {
    case "maximize":
      currentWindow.maximize();
      break;
    case "minimize":
      currentWindow.minimize();
      break;
    case "close":
      currentWindow.close();
      break;
    default:
      throw Error("Nonexistent action type.");
  }
});
