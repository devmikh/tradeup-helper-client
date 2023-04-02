import { useState } from 'react';
import { useSelector } from "react-redux";
import { dispatch } from '../../store/store';
import { getInventory } from '../../store/features/inventorySlice';

import styles from './index.module.css';

const SearchBar = () => {

    const inventory = useSelector(state => state.inventory);
    const [ steamId, setSteamId ] = useState('');

    const submitForm = async (event) => {
        event.preventDefault();
        dispatch(getInventory(steamId));
    }

    const onChange = (event) => {
        setSteamId(event.target.value);
    }

    return (
        <form onSubmit={submitForm} className={styles.form}>
            <span className={styles.prompt}>Please enter steamID64:</span>
            <input className={styles.input} name='steamid' onChange={onChange} value={steamId}></input>
            <button className={styles.button} type='submit'>Get Inventory</button>
            <span className={styles.error}>{inventory.error}</span>
        </form>
        
    )
}

export default SearchBar;