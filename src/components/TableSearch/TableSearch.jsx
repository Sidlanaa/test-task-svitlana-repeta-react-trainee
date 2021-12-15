import React from 'react';
import styles from './TableSearch.module.css';

const TableSearch = ({ filterString, handleFilterchange }) => {
    return (
        <div className={styles.searchForm}>
            <input list="planetsNames" value={filterString} onChange={handleFilterchange} className={styles.inputOfSearch} placeholder="Type name here..." />
            {/* <datalist id="planetsNames">
                <option className={styles.option} value={handleFilterchange}></option>
            </datalist> */}
            <input className={styles.searchButton} type="button" value="search" />
        </div>
    );
};

export default TableSearch;