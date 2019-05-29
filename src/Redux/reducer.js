const initialState = {
    userObj: {}
}


const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'







export function updateUserDetails(userObj) {
    return{
    type:UPDATE_USER_DETAILS,
    payload: userObj
    }
   }


  

function reducer(state = initialState, action) {
console.log(action.payload)
    switch (action.type) {
     
        case UPDATE_USER_DETAILS: 
            return { ...state, userObj: action.payload}
        default:
            return state
    }
}


export default reducer