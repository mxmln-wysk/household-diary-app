import electron from 'electron'
const ipc = electron.ipcRenderer;

const getMonth = async (date:string) => {
    return ipc.invoke('getMonth',date)
    .then((response) =>{        
        return JSON.parse(response);
    });

}

export default getMonth;
