import electron from 'electron'
const ipc = electron.ipcRenderer

const saveCategorie = (categories:object) =>{
ipc.send('setCategory', categories)
}

export default saveCategorie;
