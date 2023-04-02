import { useSelector } from "react-redux";
import ItemGrid from "../ItemGrid";
import TradeupCreator from '../TradeupCreator';
import styles from './index.module.css';

const Main = () => {

    return (
        <div className={styles.main}>
            <ItemGrid />
            <TradeupCreator />
        </div> 
        
            
    )
};

export default Main;