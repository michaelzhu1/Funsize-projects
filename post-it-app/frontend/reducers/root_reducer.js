import { combineReducers } from "redux";
import NoteReducer from "./note_reducer";
import ModalReducer from "./modal_reducer";

const RootReducer = combineReducers({
  note: NoteReducer,
  modal: ModalReducer
});

export default RootReducer;
