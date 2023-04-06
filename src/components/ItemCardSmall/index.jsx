import { dispatch } from '../../store/store';
import { switchSelected } from '../../store/features/inventorySlice';
import styles from './index.module.css';

const ItemCardSmall = (props) => {

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

    const toggleSelected = (asset_id, selected) => {
        dispatch(switchSelected({asset_id, selected}));
    }
    
    return (
        <div className={`${styles.container} ${gradeStyle}`} onClick={() => toggleSelected(asset_id, selected)}>
            <span className={styles.name}>{name}</span>
            <span>{exterior}</span>
            <img src={`${import.meta.env.VITE_ICON_URL}/${icon_url}`} width={90}/>
            <span>{collection}</span>
            <span className={styles.float}>{float}</span>
        </div>
    )
};

export default ItemCardSmall;