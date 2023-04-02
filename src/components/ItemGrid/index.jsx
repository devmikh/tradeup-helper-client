import { useSelector } from "react-redux";
import styles from './index.module.css';
import ItemCard from '../ItemCard';
import { useEffect, useState } from "react";

const ItemGrid = () => {

    const inventory = useSelector(state => state.inventory);

    return (
        <div className={styles.container}>
            {inventory.data && inventory.data.map(item => {
                return (
                    <ItemCard
                        name={item.name}
                        exterior={item.exterior}
                        icon_url={item.icon_url}
                        type={item.type}
                        collection={item.collection}
                    />
                )
            })}
        </div>
    )
};

export default ItemGrid;