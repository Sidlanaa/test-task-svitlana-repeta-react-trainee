import React from 'react';

const TableRow = ({ tableData }) => {
    return tableData.map(p => {
        return (
            <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.phone}</td>
                <td>{p.username}</td>
                <td>{p.email}</td> 
            </tr>
        );
    })
};

export default TableRow;