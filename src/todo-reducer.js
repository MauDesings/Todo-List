function todoReducer(state,action) {

    switch (action.type) {
        case 'ADD_TASK':
            return [...state,action.payload];
     
        case 'DELETE_TASK':
            return state.filter(item => item.id !== action.payload);

        case 'COMPLETED_TASK':
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                return item;
            })

        case 'EDIT_TASK':
            return state.map(item => item.id === action.payload.id
                ? (item = {id: item.id, done: item.done, valueTask: action.payload.valueTask})
                : item);    


        default:
            return state;
    }
}

export default todoReducer;