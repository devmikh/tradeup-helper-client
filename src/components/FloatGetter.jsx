import axios from 'axios';
import { useState } from 'react';

const FloatGetter = () => {

    const [link, setLink] = useState('');
    const [float, setFloat] = useState('');

    const onChange = (event) => {
        setLink(event.target.value);
    };

    const getFloat = async() => {
        setFloat('');
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/getItemInfo`, { inspect_link: link});
            setFloat(response.data.paintwear);
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <div className="App">
            <h2>Enter inspect link:</h2>
            <input value={link} onChange={onChange}></input>
            <button onClick={getFloat}>Get Float</button>
            <h2>Float value: {float}</h2>
        </div>
    )
};

export default FloatGetter;