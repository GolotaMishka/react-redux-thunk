import {
  TODO_CREATION_FAILED,
  TODO_CREATION_SUCCESS,
  TODO_CREATION_STARTED,
} from "../constants";

export const createTodo = (newTodo) => {
  return async (dispatch)  => {
    try {
      dispatch({ type: TODO_CREATION_STARTED });

      const response = await fetch('https://6193dd2f221e680017450c99.mockapi.io/tasks', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(newTodo)
    })
    const newTodoFromServer = await response.json();


      dispatch({ type: TODO_CREATION_SUCCESS, payload: newTodoFromServer });
    } catch (e) {
      dispatch({ type: TODO_CREATION_FAILED });
    }
  };
};
