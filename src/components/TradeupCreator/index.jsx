import { useSelector } from "react-redux";
import ItemCardSmall from "../ItemCardSmall";
import { dispatch } from "../../store/store";
import { clearSelectedItems } from "../../store/features/inventorySlice";
import styles from './index.module.css';

const TradeupCreator = () => {

    const selectedItems = useSelector(state => state.inventory.selectedItems);
    const avgFloat = useSelector(state => state.inventory.avgFloat);

    const clearItems = () => {
        dispatch(clearSelectedItems());
    }

    return (
        <div className={styles.tradeupCreatorContainer}>
            {selectedItems.length === 0 ? 
                <span className={styles.tradeupCreatorPrompt}>Please select items</span> :
                <div className={styles.inputContainer}>
                    <div>Average float: {avgFloat}</div>
                    <button onClick={clearItems}>Clear</button>
                    <div className={styles.itemsContainer}>
                        {selectedItems.map(item => {
                            return (
                                <ItemCardSmall
                                    key={item.asset_id}
                                    asset_id={item.asset_id}
                                    name={item.name}
                                    exterior={item.exterior}
                                    icon_url={item.icon_url}
                                    grade={item.grade}
                                    collection={item.collection}
                                    float={item.float}
                                    selected={item.selected}
                                />
                            )
                        })}
                    </div>
                </div>   
            }
        </div>   
    )
};

export default TradeupCreator;