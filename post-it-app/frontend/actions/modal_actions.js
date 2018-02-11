export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_BODY = 'UPDATE_BODY';
export const UPDATE_COLOR = 'UPDATE_COLOR';

const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title
});

const updateBody = (body) => ({
  type: UPDATE_BODY,
  body
});

const updateColor = (color) => ({
  type: UPDATE_COLOR,
  color
});
