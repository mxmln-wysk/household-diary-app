import React, { useState, useEffect } from "react";
import getMonth from '../helpers/getMonth';
import DataDialog from "./dataDialog";
import TableRow from "./tableRow";

const tableHeader = ['Datum', 'Kategorie','Beschreibung', 'Art', 'Summe' ]

const Dashboard = () => {
    const [monthData, setMonthDate] = useState([])
    const [month, setMonth] = useState('')
    useEffect(() => {
        getMonth().then((month) => setMonthDate(month.data))
    }, [month])
    console.log(monthData);
    
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
                            <TableRow key={data.id} row={data} />
                        )
                    })}
                </tbody>
            </table>
            <DataDialog />
        </div>
    )
}

export default Dashboard;
