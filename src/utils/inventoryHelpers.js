export const switchSelectedById = (data, asset_id) => {
    const item = data.find(item => item.asset_id === asset_id);
    if (item) {
        item.selected = !item.selected;
    }
}

export const getSelectedItems = (data) => {
    return data.filter(item => item.selected);
}