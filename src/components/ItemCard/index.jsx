import { useState } from 'react';
import styles from './index.module.css';

const ItemCard = (props) => {

    const [isSelected, setIsSelected] = useState(false);

    const { name, exterior, icon_url, grade, collection, float } = props;
    console.log(float);
    let gradeStyle;

    switch (grade) {
        case 'Consumer':
            gradeStyle = styles.consumer;
            break;
        case 'Industrial':
            gradeStyle = styles.industrial;
            break;
        case 'Mil-Spec':
            gradeStyle = styles.milspec;
            break;
        case 'Restricted':
            gradeStyle = styles.restricted;
            break;
        case 'Classified':
            gradeStyle = styles.classified;
            break;
        default:
            gradeStyle = styles.consumer;
    }

    const switchSelected = () => {
        setIsSelected(!isSelected);
    }

    return (
        <div className={`${styles.container} ${isSelected ? styles.selected : ''} ${gradeStyle}`} onClick={switchSelected}>
            <span className={styles.name}>{name}</span>
            <span>{exterior}</span>
            <img src={`${import.meta.env.VITE_ICON_URL}/${icon_url}`} width={180}/>
            <span>{grade}</span>
            <span>{collection}</span>
            <span>{float}</span>
        </div>
    )
};

export default ItemCard;