const initialState = {
    username: {},
    id: {},
    profile_pic: {}
}

const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
const UPDATE_USER_ID = 'UPDATE_USER_ID'
const UPDATE_USER_PIC = 'UPDATE_USER_PIC'



export function updateUserName(username) { 
    return{
        type: UPDATE_USER_NAME,
        payload: username
    }
}

export function updateUserPass(id) { 
    return{
        type: UPDATE_USER_ID,
        payload: id
    }
}

export function updateUserPic(profile_pic) { 
    return{
        type: UPDATE_USER_PIC,
        payload: profile_pic
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_NAME:
            return{ ...state, username: action.payload}
        case UPDATE_USER_ID:
            return{ ...state, id: action.payload}
        case UPDATE_USER_PIC: 
            return{ ...state, profile_pic: action.payload}
        default:
            return state
    }
}
export default reducer 


// In your reducer function, add a case to the switch statement.
// The case should match the action type you just wrote.
// This case should return an object with all the same properties you set in initialState.
// The values of the object should be based on the values of the action payload.