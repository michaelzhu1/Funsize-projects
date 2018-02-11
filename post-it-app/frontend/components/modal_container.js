import { connect } from 'react-redux';
import Modal from './modal';
import { updateTitle, updateBody, updateColor } from "../actions/modal_actions";
import { addNote } from "../actions/note_actions";

const mapStateToProps = state => ({
  note: state.note
});

const mapDispatchToProps = dispatch => ({
  updateTitle: (title) => dispatch(updateTitle(title)),
  updateBody: (body) => dispatch(updateBody(body)),
  updateColor: (color) => dispatch(updateColor(color)),
  addNote: (note) => dispatch(addNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
