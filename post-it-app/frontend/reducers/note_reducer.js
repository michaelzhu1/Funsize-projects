import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../actions/note_actions";
const initialState = [{title: 'This is a title',
  body: 'This is a body'}];

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    default:
      return state;
  }
};

export default NoteReducer;
