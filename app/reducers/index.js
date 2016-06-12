export default
function Reducer(state = {user:{}}, action){
    switch (action.type) {
        case 'SHOW_LOADER':
            return {
                user: {},
                loading: true
            };
        default:
            return state
    }
}