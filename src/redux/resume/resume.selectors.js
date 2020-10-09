import { createSelector } from 'reselect';

const selectResume = (state) => state.resume;

export const selectMainColor = createSelector(
  [selectResume],
  (resume) => resume.color
);

export const selectMainFont = createSelector(
  [selectResume],
  (resume) => resume.font
);
