import { useSelector } from "react-redux";
import styles from './index.module.css';
import ItemCard from '../ItemCard';
import Filters from "../Filters";
import MoonLoader from "react-spinners/MoonLoader";

const ItemGrid = () => {

    const inventory = useSelector(state => state.inventory);

    let content = '';
    if (inventory.loading) {
        content =
        <MoonLoader
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
        />;
    } else if (!inventory.loading && inventory.data) {
        content = inventory.data.map(item => {
            return (
                <ItemCard
                    name={item.name}
                    exterior={item.exterior}
                    icon_url={item.icon_url}
                    grade={item.grade}
                    collection={item.collection}
                    float={item.float}
                />
            )
        });
    } else {
        content =
        <span className={styles.inventoryMessage}>
            Your inventory will be displayed here
        </span>;
    }

    return (
        <div className={styles.inputContainer}>
            {inventory.data ? <Filters /> : null}  
            <div className={styles.itemsContainer}>
                {content}
            </div>
        </div> 
        
            
    )
};

export default ItemGrid;