import { useState } from 'react';
import styles from './index.module.css';

const ItemCard = () => {

    const [isSelected, setIsSelected] = useState(false);

    const switchSelected = () => {
        setIsSelected(!isSelected);
    }

    return (
        <div className={`${styles.container} ${isSelected ? styles.selected : ''}`} onClick={switchSelected}>
            <span>MAC-10 | Monkeyflage</span>
            <span>(Minimal Wear)</span>
            <img src={`${import.meta.env.VITE_ICON_URL}/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJmY-FnPLtNbfQkW5u5Mx2gv2PrYqn3FW2_BFvYG7yLdKRcVc5NVyF-lm2x729hsC7tcnMyXQ2vSAk7WGdwULNQ54tfA`} width={128}/>
            <span>Mil-spec</span>
            <span>The Recoil Collection</span>
            <span>0.09907022118568</span>
        </div>
    )
};

export default ItemCard;