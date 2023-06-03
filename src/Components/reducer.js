export const initialState = {
    dataset_name: [],
    count: [],
    entry: [],
    jsonx: [],
    des: []
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'PARAMETER_COUNT':
            return {
                ...state,
                dataset_name: [action.item.dataset_name],
                count: [action.item.count],
                entry: [action.item.entry],
                jsonx: [],
                des: [action.item.des]
            };

        case 'JSON_DATA':
            return {
                ...state,
                jsonx: [action.item.jsonx]
            };

        default:
            return state;
    }
    
}

export default reducer;