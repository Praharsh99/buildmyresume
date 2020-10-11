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

export const selectSkills = createSelector(
  [selectResume],
  (resume) => resume.skills
);

export const selectSections = createSelector(
  [selectResume],
  (resume) => resume.sections
);

export const selectPreviewImageUrl = createSelector(
  [selectResume],
  (resume) => resume.previewImageUrl
);

export const selectProfilePicture = createSelector(
  [selectResume],
  (resume) => resume.profilePicture
);
