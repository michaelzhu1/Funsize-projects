import { connect } from 'react-redux';
import Modal from './modal';
import { updateTitle, updateBody, updateColor, updateModal } from "../actions/modal_actions";
import { addNote } from "../actions/note_actions";

const mapStateToProps = state => ({
  note: state.note,
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({
  updateTitle: (title) => dispatch(updateTitle(title)),
  updateBody: (body) => dispatch(updateBody(body)),
  updateColor: (color) => dispatch(updateColor(color)),
  addNote: (note) => dispatch(addNote(note)),
  updateModal: (isOpen, type, id) => dispatch(updateModal(isOpen, type, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
