import { TODO_CREATION_FAILED, TODO_CREATION_SUCCESS, TODO_CREATION_STARTED, DELETE_TODO, UPDATE_TODO } from "../constants";


const initialState = {
    list: [],
    error: null,
    isListLoading: false,
    isCreationLoading: false,
}


export const todosReducer = (state = initialState, action) => {
  switch (action.type) {

    case TODO_CREATION_STARTED:
      return {...state, isCreationLoading: true};
    case TODO_CREATION_FAILED:
      return {...state, isCreationLoading: false, error: "Error"};
    case TODO_CREATION_SUCCESS:
      return {...state, list: [...state.list, action.payload], isCreationLoading: false};
    case DELETE_TODO:
      return state;
    case UPDATE_TODO:
      return state;
    default:
      return state;
  }
};
