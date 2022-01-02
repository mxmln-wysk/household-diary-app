import React from "react";

const TableRow = (props:any) => {
    const row = props.row;    
    return(
       <tr key={row.id}>
           <td>
               {row.date.slice(2)}
           </td>
           <td>
               {row.category}
           </td>
           <td>
               {row.description}
           </td>
           <td>
               {row.type}
           </td>
           <td>
               {row.sum}
           </td>
       </tr>
    )
}

export default TableRow;
