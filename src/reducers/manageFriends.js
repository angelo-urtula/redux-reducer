export function manageFriends(state, action){
    state = {
        friends: []
    }
    switch(action.type){
        case "ADD_FRIEND":
            return {friends: state.friends + 1}
            default:
                return state
    }

}
