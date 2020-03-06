const assignmentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ASSIGNMENT_LIST':
            return state = { list: action.payload };
        default:
            return state;
    }
}

const navbarReducer = (state = { navbar: 'dashboard' }, action) => {
    switch (action.type) {
        case 'NAVBAR':
            return state = { navbar: action.payload };
        default:
            return state;
    }
}

export { assignmentReducer, navbarReducer };