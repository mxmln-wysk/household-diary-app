import electron from 'electron'
const ipc = electron.ipcRenderer;

const getMonth = async () => {
    console.log('getMonth')
    return ipc.invoke('getMonth')
    .then((response) =>{        
        return JSON.parse(response);
    });

}

export default getMonth;
