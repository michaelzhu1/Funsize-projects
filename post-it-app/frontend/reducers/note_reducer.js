import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../actions/note_actions";
const initialState = [{title: 'This is a title',
  body: 'This is a body',
  color: 'red'}];

const NoteReducer = (state = initialState, action) => {
  const oldState = state.slice();
  let newState;
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case UPDATE_NOTE:
      newState = oldState.slice(0, action.id)
      .concat([action.note])
      .concat(oldState.slice(action.id + 1));
      return newState;
    case DELETE_NOTE:
      newState = oldState.splice(action.id, 1);
      return newState;
    default:
      return state;
  }
};

export default NoteReducer;
