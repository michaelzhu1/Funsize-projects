import { connect } from 'react-redux';
import NoteIndex from './note_index';

const mapStateToProps = state => ({
  note: state.note
});

export default connect(mapStateToProps, null)(NoteIndex);
