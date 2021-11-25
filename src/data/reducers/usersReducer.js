import { ADD_USER, DELETE_USER, UPDATE_USER } from "../constants";
const initialState = {
    list: [],
    error: null,
    isLoading: false
}
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state;
    case DELETE_USER:
      return state;
    case UPDATE_USER:
      return state;
    default:
      return state;
  }
};
