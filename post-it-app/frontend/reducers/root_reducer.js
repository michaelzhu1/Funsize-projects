import { combineReducers } from "redux";
import NoteReducer from "./note_reducer";


const RootReducer = combineReducers({
  note: NoteReducer
});

export default RootReducer;
