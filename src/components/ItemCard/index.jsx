import { useState } from 'react';
import styles from './index.module.css';
import { switchSelected } from '../../store/features/inventorySlice';
import { dispatch } from '../../store/store';

const ItemCard = (props) => {

    // const [isSelected, setIsSelected] = useState(false);

    const { asset_id, name, exterior, icon_url, grade, collection, float, selected } = props;
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

    const toggleSelected = (asset_id) => {
        dispatch(switchSelected(asset_id));
    }
    
    return (
        <div className={`${styles.container} ${selected ? styles.selected : ''} ${gradeStyle}`} onClick={() => toggleSelected(asset_id)}>
            <span className={styles.name}>{name}</span>
            <span>{exterior}</span>
            <img src={`${import.meta.env.VITE_ICON_URL}/${icon_url}`} width={180}/>
            <span>{grade}</span>
            <span>{collection}</span>
            <span className={styles.float}>{float}</span>
        </div>
    )
};

export default ItemCard;