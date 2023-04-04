export const getCollections = (data) => {
    const collections = {};
    data.forEach(item => collections[item.collection] = true);
    return Object.keys(collections).sort();
};

export const filterData = (data, filterObject) => {
    const { collectionFilter, gradeFilter, sortBy } = filterObject;

    let filteredData = data;

    if (collectionFilter !== 'any') {
        filteredData = filteredData.filter(item => item.collection === collectionFilter);
    }

    if (gradeFilter !== 'any') {
        filteredData = filteredData.filter(item => item.grade === gradeFilter);
    }

    if (sortBy !== 'recent') {
        switch (sortBy) {
            case 'lowfloat':
                filteredData.sort((a, b) => a.float - b.float);
                break;
            case 'highfloat':
                filteredData.sort((a, b) => b.float - a.float);
                break;
        }
    }

    return filteredData;
};