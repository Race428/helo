const initialState = {
    userObj: {}
   


    // username: {},
    // id: {},
    // profile_pic: {}
}

// const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
// const UPDATE_USER_ID = 'UPDATE_USER_ID'
// const UPDATE_USER_PIC = 'UPDATE_USER_PIC'
const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'





// export function updateUserName(username) {
//     return {
//         type: UPDATE_USER_NAME,
//         payload: username
//     }
// }

// export function updateUserID(id) {
//     return {
//         type: UPDATE_USER_ID,
//         payload: id
//     }
// }

// export function updateUserPic(profile_pic) {
//     return {
//         type: UPDATE_USER_PIC,
//         payload: profile_pic
//     }
// }


export function updateUserDetails(userObj) {
    return{
    type:UPDATE_USER_DETAILS,
    payload: userObj
    }
   }


  

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case UPDATE_USER_NAME:
//             return{ ...state, username: action.payload}
//         case UPDATE_USER_ID:
//             return{ ...state, id: action.payload}
//         case UPDATE_USER_PIC: 
//             return{ ...state, profile_pic: action.payload}
//         default:
//             return state
//     }
// }

function Reducer(state = initialState, action) {
console.log(action.payload)
    switch (action.type) {
        // case UPDATE_USER_NAME:
        //     return { ...state, username: action.payload }
        // case UPDATE_USER_ID: 
        //     return { ...state, id:action.payload}
        // case UPDATE_USER_PIC: 
        //     return { ...state,profile_pic: action.payload}
        case UPDATE_USER_DETAILS: 
            return { ...state, userObj: action.payload}
        default:
            return state
    }
}


export default Reducer
// In your reducer function, add a case to the switch statement.
// The case should match the action type you just wrote.
// This case should return an object with all the same properties you set in initialState.
// The values of the object should be based on the values of the action payload.