export function manageFriends(state = { friends: [] }, action){
  
  switch (action.type) {
    case "ADD_FRIEND":
      return ({
        ...state,
         friends: [...state.friends, action.friend]
        }
      );

    case "REMOVE_FRIEND":
      console.log(action.id)
      const removeIndex = state.friends.findIndex(friend => friend.id === action.id)
      console.log(removeIndex)
      return {
        ...state,
        friends: [...state.friends.slice(0, removeIndex), ...state.friends.slice(removeIndex + 1)],
      };
    default:
      return state;
  }
}

// [2, 7, 9, 40, 100]

// let state = {
//   friends: []
// };

// let state = { numberOfPresents: 0 };
// let action = { type: "INCREASE", };

// export function managePresents(state, action) {
//   switch (action.type) {
//     case "INCREASE":
//       return { numberOfPresents: state.numberOfPresents + 1 };
//     default:
//       return state;
//   }
// }


// let state = {
//   friend: {
//     name: "",
//     hometown: "",
//     id: "",
//   }
// }

// let state = {
//   friends: [{
//     friend: {
//       name: "",
//       hometown: "",
//       id: "",
//     }
//   }]
// };