import electron from 'electron'
const ipc = electron.ipcRenderer;

const getCategories = async () => {
    return ipc.invoke('getCategory')
    .then((response) =>{        
        return JSON.parse(response);
    });

}

export default getCategories;
