import { useSelector } from "react-redux";
import { dispatch } from '../../store/store';
import { setCollectionFilter, setGradeFilter,setSortBy } from "../../store/features/inventorySlice";
import styles from './index.module.css';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';

const Filters = () => {

    const inventory = useSelector(state => state.inventory);

    const onChangeCollection = (event) => {
        dispatch(setCollectionFilter(event.target.value));
    };

    const onChangeGrade = (event) => {
        dispatch(setGradeFilter(event.target.value));
    }

    const onChangeSort = (event) => {
        dispatch(setSortBy(event.target.value));
    }

    return (
        <div className={styles.filterContainer}>
            {/* <input name="search" placeholder="Search" className={styles.searchField} /> */}
            <FormControl>
                <InputLabel id="grade-label">Grade</InputLabel>
                <Select
                    labelId="grade-label"
                    label="Grade"
                    value={inventory.filters.gradeFilter}
                    onChange={onChangeGrade}
                    className={styles.select}
                >
                    <MenuItem value={'any'}>Any</MenuItem>
                    <MenuItem value={"Consumer"}>Consumer</MenuItem>
                    <MenuItem value={"Industrial"}>Industrial</MenuItem>
                    <MenuItem value={"Mil-Spec"}>Mil-Spec</MenuItem>
                    <MenuItem value={"Restricted"}>Restricted</MenuItem>
                    <MenuItem value={"Classified"}>Classified</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="collection-label">Collection</InputLabel>
                <Select
                    labelId="collection-label"
                    label="collection"
                    value={inventory.filters.collectionFilter}
                    onChange={onChangeCollection}
                    className={styles.select}
                    MenuProps={{
                        style: {
                           maxHeight: 400,
                              },
                        }}
                >
                    <MenuItem value='any'>Any</MenuItem>
                    {inventory.collections && inventory.collections.map(collection => {
                        return <MenuItem value={collection}>{collection}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="sort-label">Sort by</InputLabel>
                <Select
                    labelId="sort-label"
                    label="Sort by"
                    value={inventory.filters.sortBy}
                    onChange={onChangeSort}
                    className={styles.select}
                >
                    <MenuItem value={"recent"}>Most recent</MenuItem>
                    <MenuItem value={"lowfloat"}>Lowest float</MenuItem>
                    <MenuItem value={"highfloat"}>Highest float</MenuItem>
                </Select>
            </FormControl>
            
        </div>
    )
}

export default Filters;