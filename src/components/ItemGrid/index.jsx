import { useSelector } from "react-redux";
import styles from './index.module.css';
import ItemCard from '../ItemCard';
import MoonLoader from "react-spinners/MoonLoader";

const ItemGrid = () => {

    const inventory = useSelector(state => state.inventory);

    return (
        <div className={styles.inputContainer}>
            <div className={styles.itemsContainer}>
            {inventory.loading ? 
                <MoonLoader
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> :
                inventory.data && inventory.data.map(item => {
                    return (
                        <ItemCard
                            name={item.name}
                            exterior={item.exterior}
                            icon_url={item.icon_url}
                            grade={item.grade}
                            collection={item.collection}
                        />
                    )
                })}
            </div>
        </div> 
        
            
    )
};

export default ItemGrid;