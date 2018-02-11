export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_BODY = 'UPDATE_BODY';
export const UPDATE_COLOR = 'UPDATE_COLOR';
export const UPDATE_MODAL = 'UPDATE_MODAL';


export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title
});

export const updateBody = (body) => ({
  type: UPDATE_BODY,
  body
});

export const updateColor = (color) => ({
  type: UPDATE_COLOR,
  color
});

export const updateModal = (modalStatus, type, id) => ({
  type: UPDATE_MODAL,
  payload: {isOpen: modalStatus, type, id}
});
