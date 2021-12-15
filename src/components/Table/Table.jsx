import React from 'react';
import TableRow from '../TableRow/TableRow';
import styles from './Table.module.css';

const Table = ({setResponseData, responseData, order, setOrder}) => {
    const sorting = (col) => {
        if (order === 'ASC'){
            const sorted = responseData.sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setResponseData(sorted);
            setOrder('DSC');
        };
        if (order === 'DSC'){
            const sorted = responseData.sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setResponseData(sorted);
            setOrder('ASC');
        }; 
    };
    return (
        <div>
            <table className={styles.table}>
                <caption>find your fighter</caption>
                <thead className={styles.thead}>
                    <tr>
                        <td onClick={() => sorting('name')} className={`${styles.name} ${styles.tableItem}`} id='name'>
                            <div className={styles.itemName}>
                                <span className={styles.itemTag}>Name</span>
                                <div className={styles.triangles}>
                                    <span id='triangleUp' className={`${styles.triangleUp} ${styles.triangle}`}>&#9660;</span>
                                    <span id='triangleDown' className={`${styles.triangleDown} ${styles.triangle}`}>&#9660;</span>
                                </div>
                            </div>
                        </td>
                        <td onClick={() => sorting('phone')} className={`${styles.phone} ${styles.tableItem}`} id='phone'>Phone</td>
                        <td onClick={() => sorting('username')} className={`${styles.username} ${styles.tableItem}`} id='username'>Username</td>
                        <td onClick={() => sorting('email')} className={`${styles.email} ${styles.tableItem}`} id='email'>Email</td>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    <TableRow tableData={responseData} />
                    {/* TODO: rename tp tableRows */}
                </tbody>
            </table>
        </div>
    );
};

export default Table;