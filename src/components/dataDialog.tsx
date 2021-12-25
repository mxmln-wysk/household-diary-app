import React, { useState } from "react";
import formateDate from "../helpers/formatDate";
import electron from 'electron'
const ipc = electron.ipcRenderer

const DataDialog = () => {
    const Datum = new Date().toDateString()
    
    console.log(Datum);
    
    const [date, setDate] = useState(formateDate(Datum));
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [sum, setSum] = useState('');
    const save = () => {
       if(category ==='' || description ==='' || type === '' || sum ===''){
           alert('Bitte fülle alle Inputs aus!')
           return
       }
       const dateObject = {
        "date": date,
        "category": category,
        "description": description,
        "type": type,
        "sum": sum,
       }
       ipc.send('setMonthDate', dateObject)

       console.log(dateObject);
       
    }

    console.log(date);
    
    
    
    return(
        <div id="dialog">
            <div>
                <label htmlFor='date'>Datum</label>
                <input id="date" name="date" type="text"  onFocus={(e)=> { e.currentTarget.type = "date";e.currentTarget.focus();}} value={date} onChange={(e)=> setDate(e.target.value)} placeholder={date} />
            </div>
            <div>
                <label htmlFor='category'>Kategorie</label>
                <input id="category" name="category" type="text" value={category} onChange={(e)=> setCategory(e.target.value)} />
            </div>                <div>
                <label htmlFor='description'>Beschreibung</label>
                <input id="description" name="description" type="text" value={description} onChange={(e)=> setDescription(e.target.value)} />
            </div>
            <div>
                <label htmlFor='type'>Art</label>
                <input id="type" name="type" type="text" value={type} onChange={(e)=> setType(e.target.value)} />
            </div>
            <div>
                <label htmlFor='type'>Summe</label>
                <input id="sum" name="sum" type="number" value={sum} onChange={(e)=> setSum(e.target.value)} />
            </div>
            <button onClick={()=>save()}>speichern</button>
        </div>
    )
}

export default DataDialog;