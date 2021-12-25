import electron from 'electron'
const ipc = electron.ipcRenderer

const getColors = async () => {
    await ipc.invoke('getColors')
    .then((response) =>{ 
        const colors = JSON.parse(response)
        document.documentElement.style.setProperty("--textColor", colors.textColor);
        document.documentElement.style.setProperty("--bgColor", colors.bgColor);
    })
    
}

export default getColors;