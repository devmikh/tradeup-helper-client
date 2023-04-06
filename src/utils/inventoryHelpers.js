export const switchSelectedById = (data, asset_id, selectedItemsArr) => {
    const item = data.find(item => item.asset_id === asset_id);
    if (item) {
        item.selected = !item.selected;
        if (item.selected) {
            selectedItemsArr.push(item)
        } else {
            const index = selectedItemsArr.findIndex(item => item.asset_id === asset_id);
            selectedItemsArr.splice(index, 1);
        }
    }
}

export const removeSelected = (data) => {
    data.forEach(item => {
        item.selected = false;
    });
}

export const calculateAvgFloat = (data) => {
    return data.reduce((total, next) => total + next.float, 0) / data.length;
}
