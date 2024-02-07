const initialstate = 0

const changeNumber = (state = initialstate, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 5;
        case "DECREMENT":
            return state - 2;
        case "RESET":
            return initialstate;
        default:
            return state;
    }
}
export default changeNumber;