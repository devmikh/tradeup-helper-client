import { useState } from 'react';
import styles from './index.module.css';

const ItemCard = (props) => {

    const [isSelected, setIsSelected] = useState(false);

    const { name, exterior, icon_url, type, collection } = props;

    const switchSelected = () => {
        setIsSelected(!isSelected);
    }

    return (
        <div className={`${styles.container} ${isSelected ? styles.selected : ''}`} onClick={switchSelected}>
            <span>{name}</span>
            <span>{exterior}</span>
            <img src={`${import.meta.env.VITE_ICON_URL}/${icon_url}`} width={128}/>
            <span>{type}</span>
            <span>{collection}</span>
            <span>0.000001</span>
        </div>
    )
};

export default ItemCard;