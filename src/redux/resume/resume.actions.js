import ResumeActionTypes from './resume.types';

export const setMainColor = (color) => ({
  type: ResumeActionTypes.SET_MAIN_COLOR,
  payload: color,
});

export const setMainFont = (font) => ({
  type: ResumeActionTypes.SET_MAIN_FONT,
  payload: font,
});
