import { useSelector } from "react-redux";
import ItemGrid from "../ItemGrid";
import TradeupSection from '../TradeupSection';
import styles from './index.module.css';

const Main = () => {

    return (
        <div className={styles.main}>
            <ItemGrid />
            <TradeupSection />
        </div> 
        
            
    )
};

export default Main;