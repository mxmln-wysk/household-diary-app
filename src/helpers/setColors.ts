import electron from 'electron'
const ipc = electron.ipcRenderer

const saveTextColor = (colors:object) =>{
ipc.send('color', colors)
}

export default saveTextColor;
