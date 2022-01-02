import React, { useState } from "react";
import formateDate from "../helpers/formatDate";
import electron from 'electron'
import formatDate from "../helpers/formatDate";
const ipc = electron.ipcRenderer

const DataDialog = (props: any) => {
    const Datum = new Date().toDateString()
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
        "date": formatDate(date),
        "timestamp": Date.now(),
        "category": category,
        "description": description,
        "type": type,
        "sum": sum,
       }
       props.saveData(dateObject);
    }

    return(
        <div id="dialog">
            <div>
                <label htmlFor='date'>Datum</label>
                <input id="date" name="date" type="text"  onFocus={(e)=> { e.currentTarget.type = "date";e.currentTarget.focus();}} value={date} onChange={(e)=> setDate(e.target.value)} placeholder={date} />
            </div>
            <div>
                <label htmlFor='category'>Kategorie</label>
                <select id="category" name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value=''>Select Category </option>
                    {props.categories.map((category:string)=>{
                        return(
                            <option key={category} value={category}>
                                {category}
                            </option>
                        )
                    })}
                </select>
            </div>                
            <div>
                <label htmlFor='description'>Beschreibung</label>
                <input id="description" name="description" type="text" value={description} onChange={(e)=> setDescription(e.target.value)} />
            </div>
            <div>
                <label htmlFor='type'>Art</label>
                <select id="type" name="type" value={type} onChange={(e)=> setType(e.target.value)}>
                    <option value=''>Select Art</option>
                    <option value='Einnahme'>Einnahme</option>
                    <option value='Ausgabe'>Ausgabe</option>
                </select>

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