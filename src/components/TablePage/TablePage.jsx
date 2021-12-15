import React from 'react';
import { NavLink } from 'react-router-dom';
import Table from '../Table/Table';
import TableSearch from '../TableSearch/TableSearch';
import styles from './TablePage.module.css';


const TablePage = () => {
    const [responseData, setResponseData] = React.useState(null);
    const [order, setOrder] = React.useState('ASC');
    const [filterString, setFilterString] = React.useState('');

    React.useEffect(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonFromResponse = await response.json();
        setResponseData(jsonFromResponse);
    }, []);

    function handleFilterchange(event) {
        setFilterString(event.target.value);

        const filteredData = responseData.filter(obj => obj.name.includes(filterString));
        setResponseData(filteredData);
    };

    if (responseData) {
        return(
            <div>
                <div className={styles.tablePage}>
                    <h2 className={styles.tableItem}>choose your fighter</h2>
                    <TableSearch handleFilterchange={handleFilterchange} filterString={filterString} />
                    <Table setResponseData={setResponseData} responseData={responseData} setOrder={setOrder} order={order} />
                </div>
            </div>
        );
    } else { 
        return null; 
    };
}

export default TablePage;