import { useState } from 'react';
import { useSelector } from "react-redux";
import { dispatch } from '../../store/store';
import { getInventory, clearSelectedItems } from '../../store/features/inventorySlice';

import styles from './index.module.css';

const SearchBar = () => {

    const inventory = useSelector(state => state.inventory);
    const [ steamId, setSteamId ] = useState('');

    const submitForm = async (event) => {
        event.preventDefault();
        dispatch(clearSelectedItems());
        dispatch(getInventory(steamId));
    }

    const onChange = (event) => {
        setSteamId(event.target.value);
    }

    return (
        <form onSubmit={submitForm} className={styles.form}>
            <div className={styles.inputContainer}>
                <input className={styles.input} name='steamid' onChange={onChange} value={steamId} placeholder='Please enter SteamID64'></input>
                <button className={styles.button} type='submit'>Get Inventory</button>
            </div>
            <span className={styles.error}>{inventory.error}</span>
        </form>
        
    )
}

export default SearchBar;