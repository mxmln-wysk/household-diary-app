import React, { useState, useEffect } from "react";
import getMonth from '../helpers/getMonth';
import DataDialog from "./dataDialog";
import TableRow from "./tableRow";
import electron from 'electron';
import formateDate from "../helpers/formatDate";
import getCategories from "../helpers/getCategories";
const ipc = electron.ipcRenderer;

const tableHeader = ['Datum', 'Kategorie','Beschreibung', 'Art', 'Summe' ]

const Dashboard = () => {
    const [monthData, setMonthData] = useState([])
    const [month, setMonth] = useState(formateDate(Date()).slice(0,7))
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((categories)=>{
            if (!categories.categories) return;
            setCategories(categories.categories)
        })
    }, [])

    useEffect(() => {
        getMonth(month).then((month) => {
            if (!month.data) return;
            setMonthData(month.data)
        })
    }, [month])    
    
    const saveNewEntry = (entry:any[]) => {
        const dataArr = [...monthData, entry]
        setMonthData(dataArr);
        const saveObject = {'data' : dataArr}; 
        ipc.send('saveMonthData', saveObject);

    }

    return(
        <div>
            Dashboard
            <table>
                <thead>
                    <tr>
                    {tableHeader.map((th)=>{
                        return(
                            <th key={th}>{th}</th>
                        )
                    })}
                    </tr>
                </thead>
                <tbody>
                    {monthData.map((data) => {
                        return (
                            <TableRow key={data.timestamp} row={data} />
                        )
                    })}
                </tbody>
            </table>
            <DataDialog categories={categories} saveData={saveNewEntry}/>
        </div>
    )
}

export default Dashboard;
