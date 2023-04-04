import styles from './index.module.css';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';

const Filters = () => {
    return (
        <div className={styles.filterContainer}>
            <input name="search" placeholder="Search" className={styles.searchField} />
            <FormControl>
                <InputLabel id="grade-label">Grade</InputLabel>
                <Select
                    labelId="grade-label"
                    label="Grade"
                    className={styles.select}
                >
                    <MenuItem value={"consumer"}>Consumer</MenuItem>
                    <MenuItem value={"industrial"}>Industrial</MenuItem>
                    <MenuItem value={"milspec"}>Mil-Spec</MenuItem>
                    <MenuItem value={"restricted"}>Restricted</MenuItem>
                    <MenuItem value={"classified"}>Classified</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="collection-label">Collection</InputLabel>
                <Select
                    labelId="collection-label"
                    label="collection"
                    className={styles.select}
                >
                    <MenuItem value={"snakebite"}>Snakebite</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="sort-label">Sort by</InputLabel>
                <Select
                    labelId="sort-label"
                    label="Sort by"
                    className={styles.select}
                >
                    <MenuItem value={"recent"} selected={true}>Most recent</MenuItem>
                    <MenuItem value={"lowfloat"}>Lowest float</MenuItem>
                    <MenuItem value={"highfloat"}>Highest float</MenuItem>
                </Select>
            </FormControl>
            
        </div>
    )
}

export default Filters;