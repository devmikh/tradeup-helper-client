import axios from 'axios';
import { useState } from 'react';

import styles from './index.module.css';

const SearchBar = () => {

    const { steamId, setSteamId } = useState('');
    const { error, setError } = useState('');

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get('');
        } catch(error) {
            setError(error.message);
        }
    }

    const onChange = (event) => {
        setSteamId(event.target.value);
    }

    return (
        <form onSubmit={submitForm} className={styles.form}>
            <span className={styles.prompt}>Please enter steamID64:</span>
            <input className={styles.input} name='steamid' onChange={onChange} value={steamId}></input>
            <button className={styles.button} type='submit'>Get Inventory</button>
            <span className={styles.error}>{error}</span>
        </form>
        
    )
}

export default SearchBar;